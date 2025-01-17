"use client";

import {
  BlockhashWithExpiryBlockHeight,
  Connection,
  Transaction,
  TransactionExpiredBlockheightExceededError,
  VersionedTransaction,
  VersionedTransactionResponse,
} from "@solana/web3.js";
import bs58 from "bs58";
import promiseRetry from "promise-retry";

/**
 * RPC connection to the Solana blockchain.
 * Configured with the RPC URL provided in the environment variables.
 */
export const rpcConnection = new Connection(
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL
);

/**
 * Arguments for sending and confirming a transaction.
 *
 * @typedef {object} TransactionSenderAndConfirmationWaiterArgs
 * @property {Connection} connection - The Solana RPC connection instance.
 * @property {Buffer} serializedTransaction - The serialized transaction to send.
 * @property {BlockhashWithExpiryBlockHeight} blockhashWithExpiryBlockHeight - Blockhash and expiry height for the transaction.
 */
type TransactionSenderAndConfirmationWaiterArgs = {
  connection: Connection;
  serializedTransaction: Buffer;
  blockhashWithExpiryBlockHeight: BlockhashWithExpiryBlockHeight;
};

/**
 * Options for sending transactions to the Solana network.
 */
const SEND_OPTIONS = {
  skipPreflight: true, // Skips the preflight transaction simulation.
};

/**
 * Utility function to wait for a specified amount of time.
 *
 * @param {number} time - Time to wait in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified time.
 */
const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

/**
 * Extracts the signature from a transaction.
 *
 * @param {Transaction | VersionedTransaction} transaction - The transaction object.
 * @returns {string} The base58-encoded transaction signature.
 * @throws {Error} Throws an error if the transaction signature is missing.
 */
export function getSignature(
  transaction: Transaction | VersionedTransaction
): string {
  const signature =
    "signature" in transaction
      ? transaction.signature
      : transaction.signatures[0];

  if (!signature) {
    throw new Error(
      "Missing transaction signature, the transaction was not signed by the fee payer"
    );
  }

  return bs58.encode(signature);
}

/**
 * Sends a serialized transaction to the Solana network and waits for confirmation.
 *
 * @async
 * @param {TransactionSenderAndConfirmationWaiterArgs} args - The transaction details.
 * @returns {Promise<VersionedTransactionResponse | null>} The confirmed transaction response or null if the transaction expired.
 * @throws {Error} Throws an error if the transaction fails to confirm due to reasons other than expiry.
 */
export async function transactionSenderAndConfirmationWaiter({
  connection,
  serializedTransaction,
  blockhashWithExpiryBlockHeight,
}: TransactionSenderAndConfirmationWaiterArgs): Promise<VersionedTransactionResponse | null> {
  // Send the raw transaction
  const txid = await connection.sendRawTransaction(
    serializedTransaction,
    SEND_OPTIONS
  );

  try {
    // Wait for confirmation
    await connection.confirmTransaction(
      {
        signature: txid,
        ...blockhashWithExpiryBlockHeight,
      },
      "confirmed"
    );

    // Periodically check the transaction confirmation status
    await new Promise(async (resolve) => {
      for (let index = 0; index < 20; index++) {
        await wait(1000);

        const tx = await connection.getSignatureStatus(txid, {
          searchTransactionHistory: true,
        });

        if (
          tx?.value?.confirmationStatus === "confirmed" ||
          tx?.value?.confirmationStatus === "finalized"
        ) {
          resolve(tx);
          return;
        }
      }
    });
  } catch (e) {
    console.error(e);
    if (e instanceof TransactionExpiredBlockheightExceededError) {
      console.warn("Transaction expired before confirmation:", e);
      return null;
    } else {
      throw e; // Re-throw other errors
    }
  }

  // Retry fetching the transaction from RPC if not found
  const response = await promiseRetry(
    async (retry) => {
      const tx = await connection.getTransaction(txid, {
        commitment: "confirmed",
        maxSupportedTransactionVersion: 0,
      });

      if (!tx) {
        retry(tx);
      }

      return tx;
    },
    {
      retries: 60, // Retry up to 60 times
      minTimeout: 1000, // Wait 1 second between retries
    }
  );

  return response;
}
