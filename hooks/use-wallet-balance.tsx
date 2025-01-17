"use client";

import { useSolanaWallets } from "@privy-io/react-auth";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { useQuery } from "@tanstack/react-query";

import { rpcConnection } from "@/lib/blockchain";

type UseWalletUsdBalanceResult = {
  totalUsd: string;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
};

/**
 * Fetches the USD balance of a wallet by summing the value of all tokens and SOL owned by the wallet.
 *
 * @async
 * @param {string | undefined} address - The wallet address to fetch the balance for.
 * @returns {Promise<string>} The total balance in USD, formatted as a string.
 * @throws {Error} Throws an error if the Jupiter API request or token fetching fails.
 */
async function fetchBalanceInUsd(address: string | undefined): Promise<string> {
  if (!address) return "0"; // Return 0 if no wallet address is provided.

  const ownerPublicKey = new PublicKey(address);

  // Fetch all token accounts owned by the wallet.
  const parsedTokenAccounts = await rpcConnection.getParsedTokenAccountsByOwner(
    ownerPublicKey,
    { programId: TOKEN_PROGRAM_ID }
  );

  // Fetch the balance of SOL in lamports.
  const lamports = await rpcConnection.getBalance(ownerPublicKey);

  // Filter and map token accounts to extract mint addresses and balances.
  const tokens = parsedTokenAccounts.value
    .filter((ta) => {
      const info = ta.account.data.parsed.info;
      return info.mint === process.env.NEXT_PUBLIC_MINT_TOKEN_ADDRESS;
    })
    .map((ta) => {
      const info = ta.account.data.parsed.info;
      const mint = info.mint as string;
      const amount = info.tokenAmount?.uiAmount ?? 0;
      return { mint, amount };
    })
    .filter((t) => t.amount > 0);

  // Add SOL as a token with its equivalent amount in SOL.
  tokens.push({
    mint: "So11111111111111111111111111111111111111112",
    amount: lamports / LAMPORTS_PER_SOL,
  });

  if (tokens.length === 0) {
    return "0"; // Return 0 if no tokens are found.
  }

  // Fetch prices for all unique token mints from the Jupiter API.
  const uniqueMints = Array.from(new Set(tokens.map((t) => t.mint)));
  const queryString = uniqueMints.join(",");
  const jupiterUrl = `https://api.jup.ag/price/v2?ids=${queryString}`;
  const response = await fetch(jupiterUrl);

  if (!response.ok) {
    throw new Error(
      `Jupiter API Error: ${response.status} ${response.statusText}`
    );
  }

  const result = await response.json();

  // Create a map of token prices.
  const pricesMap: Record<string, number> = {};
  if (result?.data) {
    for (const mint of Object.keys(result.data)) {
      const tokenData = result.data[mint];
      if (tokenData && typeof tokenData.price === "string") {
        pricesMap[mint] = parseFloat(tokenData.price);
      }
    }
  }

  // Calculate the total balance in USD.
  let total = 0;
  for (const { mint, amount } of tokens) {
    const price = pricesMap[mint];
    if (price) {
      total += amount * price;
    }
  }

  // Format the total balance as a short decimal string.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  });

  return formatter.format(total);
}

/**
 * Custom React hook to fetch and manage the total USD balance of a Solana wallet.
 *
 * @returns {UseWalletUsdBalanceResult} An object containing the total USD balance, loading state, error state, and refetch function.
 * @property {string} totalUsd - The total balance in USD, formatted as a string.
 * @property {boolean} loading - Whether the balance is currently being fetched.
 * @property {Error | null} error - An error object if an error occurred.
 * @property {function} refetch - A function to manually refetch the balance.
 */
export function useWalletUsdBalance(): UseWalletUsdBalanceResult {
  const { wallets } = useSolanaWallets(); // Fetch connected Solana wallets from Privy.
  const solanaAddress = wallets[0]?.address; // Use the first wallet in the list.

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["walletUsdBalance", solanaAddress], // Cache the balance data using the wallet address.
    queryFn: () => fetchBalanceInUsd(solanaAddress), // Fetch the balance in USD.
    enabled: !!solanaAddress, // Enable the query only if a wallet address exists.
    refetchInterval: 50000, // Automatically refetch the balance every 50 seconds.
  });

  // Cast the error to a typed Error object, if applicable.
  let typedError: Error | null = null;
  if (error instanceof Error) {
    typedError = error;
  }

  return {
    totalUsd: data ?? "0", // Return 0 if no balance data is available.
    loading: isLoading, // Whether the query is in a loading state.
    error: typedError, // Error object if an error occurred.
    refetch, // Function to manually refetch the balance data.
  };
}
