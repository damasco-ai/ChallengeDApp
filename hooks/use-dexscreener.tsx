"use client";

import { useQuery } from "@tanstack/react-query";

/**
 * Represents the liquidity information of a trading pair on DexScreener.
 * @interface
 * @property {number} [usd] - Liquidity in USD.
 * @property {number} [base] - Liquidity in the base token.
 * @property {number} [quote] - Liquidity in the quote token.
 */
interface DexScreenerLiquidity {
  usd?: number;
  base?: number;
  quote?: number;
}

/**
 * Represents a trading pair on DexScreener.
 * @interface
 * @property {string} chainId - The blockchain ID of the pair.
 * @property {string} dexId - The DEX ID where the pair is listed.
 * @property {string} url - The URL to the pair on DexScreener.
 * @property {string} pairAddress - The address of the trading pair.
 * @property {object} baseToken - Details of the base token.
 * @property {string} baseToken.address - The address of the base token.
 * @property {string} baseToken.name - The name of the base token.
 * @property {string} baseToken.symbol - The symbol of the base token.
 * @property {object} quoteToken - Details of the quote token.
 * @property {string} quoteToken.address - The address of the quote token.
 * @property {string} quoteToken.name - The name of the quote token.
 * @property {string} quoteToken.symbol - The symbol of the quote token.
 * @property {string} [priceNative] - The price of the token in the native currency.
 * @property {string} [priceUsd] - The price of the token in USD.
 * @property {DexScreenerLiquidity} [liquidity] - Liquidity information for the pair.
 * @property {number} [fdv] - Fully diluted valuation of the token.
 * @property {number} [marketCap] - Market capitalization of the token.
 */
interface DexScreenerPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceNative?: string;
  priceUsd?: string;
  liquidity?: DexScreenerLiquidity;
  fdv?: number;
  marketCap?: number;
}

/**
 * Represents the API response from DexScreener.
 * @interface
 * @property {string} schemaVersion - The schema version of the API response.
 * @property {DexScreenerPair[]} pairs - An array of trading pairs.
 */
interface DexScreenerApiResponse {
  schemaVersion: string;
  pairs: DexScreenerPair[];
}

/**
 * Represents the parsed DexScreener data for a trading pair.
 * @interface
 * @property {number | null} liquidity - Liquidity in USD.
 * @property {number | null} marketCap - Market capitalization.
 * @property {number | null} priceUsd - Price in USD.
 * @property {number | null} priceSol - Price in Solana's native token.
 * @property {number | null} fdv - Fully diluted valuation.
 */
interface DexScreenerData {
  liquidity: number | null;
  marketCap: number | null;
  priceUsd: number | null;
  priceSol: number | null;
  fdv: number | null;
}

/**
 * Represents the result of the `useDexScreener` hook.
 * @interface
 * @property {DexScreenerData} data - The parsed trading pair data.
 * @property {boolean} isLoading - Whether the query is loading.
 * @property {boolean} isError - Whether the query resulted in an error.
 * @property {unknown} error - The error object if the query failed.
 * @property {function} refetch - A function to manually refetch the query.
 */
interface UseDexScreenerResult {
  data: DexScreenerData;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  refetch: () => void;
}

/**
 * Fetches data from the DexScreener API for a given pair ID.
 *
 * @async
 * @param {string} pairId - The ID of the trading pair on Solana.
 * @returns {Promise<DexScreenerData>} A promise resolving to the parsed trading pair data.
 * @throws {Error} Throws an error if the API request fails.
 */
async function fetchDexScreenerData(pairId: string): Promise<DexScreenerData> {
  const url = `https://api.dexscreener.com/latest/dex/pairs/solana/${pairId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `DexScreener HTTP Error: ${response.status} ${response.statusText}`
    );
  }

  const json: DexScreenerApiResponse = await response.json();

  if (!json.pairs || json.pairs.length === 0) {
    return {
      liquidity: null,
      marketCap: null,
      priceUsd: null,
      priceSol: null,
      fdv: null,
    };
  }

  const pair = json.pairs[0];
  const { priceNative, priceUsd, liquidity, fdv, marketCap } = pair;

  return {
    liquidity: liquidity?.usd ?? null,
    marketCap: marketCap ?? null,
    priceUsd: priceUsd ? parseFloat(priceUsd) : null,
    priceSol: priceNative ? parseFloat(priceNative) : null,
    fdv: fdv ?? null,
  };
}

/**
 * Custom React Query hook to fetch trading pair data from DexScreener.
 *
 * @param {string} pairId - The ID of the trading pair to fetch.
 * @returns {UseDexScreenerResult} The result of the query, including the data, loading state, and error state.
 */
export function useDexScreener(pairId: string): UseDexScreenerResult {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["dexScreener", "solana", pairId],
    queryFn: () => fetchDexScreenerData(pairId),
    enabled: !!pairId, // Only run the query if pairId is provided.
    refetchInterval: 15000, // Refetch every 15 seconds.
  });

  return {
    data: data ?? {
      liquidity: null,
      marketCap: null,
      priceUsd: null,
      priceSol: null,
      fdv: null,
    },
    isLoading,
    isError,
    error,
    refetch,
  };
}
