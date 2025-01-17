/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";

import {
  getSignature,
  rpcConnection,
  transactionSenderAndConfirmationWaiter,
} from "@/lib/blockchain";
import { createJupiterApiClient } from "@jup-ag/api";
import { PublicKey, VersionedTransaction } from "@solana/web3.js";
import { toast } from "sonner";

const jupiterApi = createJupiterApiClient();

/**
 * Custom hook to interact with the Jupiter API for token swaps on Solana.
 * Provides functionality to fetch quotes and execute swaps.
 *
 * @returns {object} The hook returns functions to get quotes, execute swaps, and state variables for loading and error handling.
 */
export const useJupiter = () => {
  const [loading, setLoading] = useState(false); // Loading state for API calls.
  const [error, setError] = useState<string | null>(null); // Error message state.

  /**
   * Fetches a quote for swapping tokens using the Jupiter API.
   *
   * @param {string} inputMint - The mint address of the input token.
   * @param {string} outputMint - The mint address of the output token.
   * @param {number} amount - The amount of input tokens (in atomic units) to swap.
   * @returns {Promise<any>} A promise resolving to the quote data from Jupiter API.
   * @throws {Error} Throws an error if the API call fails.
   */
  const getQuote = useCallback(
    async (inputMint: string, outputMint: string, amount: number) => {
      setLoading(true);
      setError(null);
      try {
        const quote = await jupiterApi.quoteGet({
          inputMint,
          outputMint,
          amount,
          slippageBps: 50,
          platformFeeBps: 20,
          restrictIntermediateTokens: true,
        });
        setLoading(false);
        return quote;
      } catch (err) {
        setError("Failed to fetch quote");
        setLoading(false);
        throw err;
      }
    },
    []
  );

  /**
   * Executes a token swap using a quote from the Jupiter API.
   *
   * @param {any} quoteResponse - The response object from the Jupiter quote API.
   * @param {PublicKey} userPublicKey - The public key of the user initiating the swap.
   * @param {function} signTransaction - A function to sign the transaction.
   * @returns {Promise<string>} A promise resolving to the transaction signature.
   * @throws {Error} Throws an error if the swap execution fails.
   */
  const executeSwap = useCallback(
    async (
      quoteResponse: any,
      userPublicKey: PublicKey,
      signTransaction: (
        transaction: VersionedTransaction
      ) => Promise<VersionedTransaction>
    ) => {
      setLoading(true);
      setError(null);

      try {
        // Referral account setup
        const referralAccountPubkey = new PublicKey(
          process.env.NEXT_PUBLIC_JUP_REFERRAL_ACCOUNT_TOKEN as string
        );

        // Get swap transaction from the Jupiter API
        const { swapTransaction } = await jupiterApi.swapPost({
          swapRequest: {
            quoteResponse,
            userPublicKey: userPublicKey.toString(),
            prioritizationFeeLamports: {
              priorityLevelWithMaxLamports: {
                maxLamports: 10_000_000,
                priorityLevel: "veryHigh",
              },
            },
            dynamicComputeUnitLimit: true,
            dynamicSlippage: { maxBps: 300 },
            feeAccount: referralAccountPubkey.toString(),
          },
        });

        // Deserialize the transaction
        const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
        const transaction =
          VersionedTransaction.deserialize(swapTransactionBuf);

        // Simulate the transaction
        const simulateResult = await rpcConnection.simulateTransaction(
          transaction
        );

        if (simulateResult.value.err) {
          console.error(
            "Transaction simulation error:",
            simulateResult.value.err
          );
          toast("Transaction failed", {
            description: "Transaction simulation failed",
          });
          setLoading(false);
          throw new Error("Transaction simulation failed");
        }

        // Sign the transaction
        const signedTransaction = await signTransaction(transaction);
        const rawTransaction = signedTransaction.serialize();

        // Get the latest blockhash
        const latestBlockHash = await rpcConnection.getLatestBlockhash();

        // Send and confirm the transaction
        const response = await transactionSenderAndConfirmationWaiter({
          connection: rpcConnection,
          blockhashWithExpiryBlockHeight: {
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
          },
          serializedTransaction: Buffer.from(rawTransaction),
        });

        if (!response) {
          throw new Error("Failed to confirm transaction signature");
        }

        // Check the transaction result
        if (response.meta?.err) {
          console.error("Transaction error:", response.meta?.err);
          toast("Transaction error", {
            description: "Transaction execution failed",
          });
          setLoading(false);
          return;
        }

        // Transaction successfully confirmed
        const signature = getSignature(signedTransaction);

        setLoading(false);
        return signature;
      } catch (err) {
        console.error("Error executing swap:", err);
        setError("Failed to execute swap");
        setLoading(false);
        throw err;
      }
    },
    []
  );

  return {
    getQuote,
    executeSwap,
    loading,
    error,
  };
};
