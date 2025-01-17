"use client";

import { useQuery } from "@tanstack/react-query";

/**
 * Fetches the current price of SOL (Solana token) from the Jupiter API.
 *
 * @async
 * @returns {Promise<number>} The current price of SOL in USD.
 * @throws {Error} Throws an error if the API request fails or the price is not found in the response.
 */
async function fetchSolPrice(): Promise<number> {
  const url =
    "https://api.jup.ag/price/v2?ids=So11111111111111111111111111111111111111112";

  const response = await fetch(url); // Fetch price data from Jupiter API.
  if (!response.ok) {
    throw new Error(
      `Jupiter HTTP Error: ${response.status} ${response.statusText}`
    );
  }

  const json = await response.json();

  // Extract the price of SOL from the API response.
  const priceString =
    json?.data?.["So11111111111111111111111111111111111111112"]?.price;
  if (!priceString) {
    throw new Error("SOL price not found in the Jupiter API response.");
  }

  return parseFloat(priceString); // Convert the price to a number and return.
}

/**
 * Custom React hook to fetch and manage the current price of SOL (Solana token).
 *
 * @returns {object} An object containing the SOL price, loading state, error state, and a refetch function.
 * @property {number} solPrice - The current price of SOL in USD.
 * @property {boolean} isLoading - Whether the price data is currently being fetched.
 * @property {boolean} isError - Whether there was an error fetching the price data.
 * @property {Error | null} error - The error object if an error occurred.
 * @property {function} refetch - A function to manually refetch the SOL price.
 */
export function useSolPrice() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["solPrice"], // Unique key for caching the SOL price query.
    queryFn: fetchSolPrice, // Function to fetch the price data.
    refetchInterval: 30000, // Automatically refetch every 30 seconds.
  });

  return {
    solPrice: data ?? 0, // Return 0 if no data is available.
    isLoading, // Whether the query is in a loading state.
    isError, // Whether an error occurred during the query.
    error, // Error object if an error occurred.
    refetch, // Function to manually refetch the price data.
  };
}
