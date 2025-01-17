"use client";

import { useSolanaWallets } from "@privy-io/react-auth";
import { PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";

import { rpcConnection } from "@/lib/blockchain";

/**
 * Fetches the token balance for a given wallet and token mint address.
 *
 * @async
 * @param {string | undefined} walletAddress - The address of the wallet to fetch the token balance for.
 * @param {string} tokenMintAddress - The mint address of the token to fetch the balance for.
 * @returns {Promise<number>} The token balance in human-readable format (UI amount).
 * @throws {Error} Throws an error if the wallet address is invalid or if the RPC request fails.
 */
async function fetchTokenBalance(
  walletAddress: string | undefined,
  tokenMintAddress: string
): Promise<number> {
  if (!walletAddress) return 0; // Return 0 if no wallet address is provided.

  const publicKey = new PublicKey(walletAddress); // Convert wallet address to PublicKey.
  const tokenMintPublicKey = new PublicKey(tokenMintAddress); // Convert token mint address to PublicKey.

  // Fetch token accounts owned by the wallet for the given token mint.
  const response = await rpcConnection.getParsedTokenAccountsByOwner(
    publicKey,
    {
      mint: tokenMintPublicKey,
    }
  );

  if (response.value.length === 0) {
    return 0; // Return 0 if no token accounts are found.
  }

  // Extract token balance from the parsed account data.
  const accountInfo = response.value[0].account.data.parsed.info;
  return accountInfo.tokenAmount?.uiAmount ?? 0; // Return the UI amount (human-readable balance).
}

/**
 * Custom React hook to fetch and manage the token balance of a user's wallet.
 *
 * @returns {object} An object containing the token balance, loading state, error state, and a refetch function.
 * @property {number} balance - The token balance in human-readable format (default is 0).
 * @property {boolean} isLoading - Whether the balance is currently being fetched.
 * @property {boolean} error - Whether there was an error fetching the balance.
 * @property {function} refetch - A function to manually refetch the token balance.
 */
export function useTokenBalance() {
  const { wallets } = useSolanaWallets(); // Fetch connected wallets from Privy.
  const wallet = wallets[0]; // Use the first wallet in the list.

  const {
    data: balance,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["tokenBalance", wallet?.address], // Use wallet address as part of the query key.
    queryFn: () =>
      fetchTokenBalance(
        wallet?.address,
        process.env.NEXT_PUBLIC_MINT_TOKEN_ADDRESS
      ), // Fetch token balance using the provided function.
    enabled: !!wallet?.address, // Enable the query only if a wallet address exists.
  });

  return {
    balance: balance ?? 0, // Return 0 if no balance data is available.
    isLoading, // Whether the query is in a loading state.
    error: isError, // Whether an error occurred during the query.
    refetch, // Function to manually refetch the balance data.
  };
}
