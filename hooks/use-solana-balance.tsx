"use client";

import { useSolanaWallets } from "@privy-io/react-auth";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";

import { rpcConnection } from "@/lib/blockchain";

/**
 * Fetches the Solana balance of a given wallet address.
 *
 * @async
 * @param {string | undefined} address - The Solana wallet address to fetch the balance for.
 * @returns {Promise<number>} The balance in SOL (or 0 if the address is undefined).
 */
async function fetchSolanaBalance(
  address: string | undefined
): Promise<number> {
  if (!address) return 0; // Return 0 if no address is provided.

  const publicKey = new PublicKey(address); // Convert the address to a PublicKey object.

  const lamports = await rpcConnection.getBalance(publicKey); // Fetch the balance in lamports.
  return lamports / LAMPORTS_PER_SOL; // Convert lamports to SOL and return.
}

/**
 * Custom hook to fetch and manage the Solana balance of the user's wallet.
 *
 * @returns {object} An object containing the balance, loading state, error state, and a function to refetch the balance.
 * @property {number} balance - The Solana balance in SOL.
 * @property {boolean} isLoading - Whether the balance is currently being fetched.
 * @property {boolean} error - Whether there was an error fetching the balance.
 * @property {function} refetch - A function to manually refetch the balance.
 */
export function useSolanaBalance() {
  const { wallets } = useSolanaWallets(); // Fetch the list of connected wallets.
  const wallet = wallets[0]; // Use the first wallet in the list.

  const {
    data: balance,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["solanaBalance", wallet?.address], // Use the wallet address as part of the query key.
    queryFn: () => fetchSolanaBalance(wallet?.address), // Fetch balance using the address.
    enabled: !!wallet?.address, // Only enable the query if a wallet address exists.
  });

  return {
    balance: balance ?? 0, // Return 0 if no balance is available.
    isLoading, // Whether the query is in a loading state.
    error: isError, // Whether an error occurred during the query.
    refetch, // Function to refetch the balance.
  };
}
