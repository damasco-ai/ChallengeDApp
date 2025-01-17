/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useCallback, useState } from "react";

import { useSolanaWallets } from "@privy-io/react-auth";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { ArrowDownUpIcon, LoaderIcon } from "lucide-react";
import { toast } from "sonner";

import { useJupiter } from "@/hooks/use-jup";
import { useSolanaBalance } from "@/hooks/use-solana-balance";

import { convertToLamports, formatNumber } from "@/lib/number";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Swap: React.FC = () => {
  const { wallets } = useSolanaWallets();
  const wallet = wallets[0];

  const walletAdapter = useWallet();

  const { balance } = useSolanaBalance();

  const { getQuote, executeSwap, loading, error } = useJupiter();

  const [amount, setAmount] = useState("0.01");
  const [quote, setQuote] = useState<any>(null);
  const [transactionStatus, setTransactionStatus] = useState<string | null>(
    null
  );

  const handleAmountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === "") {
        setAmount("");
        return;
      }
      const num = parseFloat(value);
      if (isNaN(num)) return;
      if (num < 0) return;
      setAmount(value);
    },
    []
  );

  const parsedAmount = parseFloat(amount || "0");
  const canAfford = balance >= parsedAmount;

  const handlePreviewSwap = useCallback(async () => {
    try {
      const inputMint = "So11111111111111111111111111111111111111112";
      const outputMint = process.env.NEXT_PUBLIC_MINT_TOKEN_ADDRESS;

      const lamports = convertToLamports(parsedAmount);

      const quote = await getQuote(inputMint, outputMint, lamports);
      setQuote(quote);
    } catch (err) {
      console.error("Failed to get quote:", err);
    }
  }, [getQuote, parsedAmount]);

  const handleExecuteSwap = useCallback(async () => {
    setTransactionStatus(null);

    try {
      const userPublicKey = new PublicKey(wallet.address);
      const signTransaction = async (transaction: any) => {
        if (!walletAdapter.signTransaction) {
          toast("Transaction error", {
            description: "Wallet does not support signing transactions",
          });
          throw new Error("Wallet does not support signing transactions.");
        }

        const signedTransaction = await wallet.signTransaction(transaction);

        return signedTransaction;
      };

      try {
        const txid = await executeSwap(quote, userPublicKey, signTransaction);

        toast("Transaction Successful", {
          description: "Swap executed successfully",
          action: {
            label: "Check",
            actionButtonStyle: {
              background: "#000",
              color: "#FFF",
              padding: "2px 4px",
            },
            onClick() {
              window.open(`https://solscan.io/tx/${txid}`, "_blank");
            },
          },
        });
      } catch {
        toast("Transaction failed.", {
          description: "Failed to signature",
        });
      }

      setTransactionStatus(null);
    } catch (err) {
      setTransactionStatus("Swap failed!");
      console.error(err);
    }
  }, [executeSwap, quote, wallet, walletAdapter]);

  function calcRewards(solanas: number): number {
    const unidades = Math.floor(solanas / 0.1);

    const rewards = unidades * 10;

    return rewards;
  }

  return (
    <section className="p-6 border-2 border-black shadow-[4px_4px_0_0_black]">
      <header className="flex flex-col mb-4">
        <h3 className="font-bold text-lg font-display">Swap for $MASCO</h3>
        <p className="font-body text-sm text-muted-foreground">
          Swap SOL for $MASCO to earn attempts
        </p>
      </header>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Amount (SOL):</label>
          <Input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            step="0.0001"
            min="0"
            placeholder="Enter amount"
            className="font-mono border-2 border-black focus-visible:ring-0"
          />
        </div>
        <div className="flex justify-center">
          <ArrowDownUpIcon className="text-primary" />
        </div>
        {quote && (
          <>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>You Get:</span>
                <span className="font-body">
                  {formatNumber(Number(quote.outAmount) / 1000000)} $MASCO
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Attempts:</span>
                <span className="font-body">
                  {calcRewards(Number(quote.inAmount) / 100000000)}
                </span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {Number(quote.priceImpactPct) > 0.1 && (
                <p>Price Impact: {quote.priceImpactPct}%</p>
              )}
            </div>
          </>
        )}
        <Button
          className="w-full font-body bg-white border-2 border-black text-[#FF5722] hover:bg-black hover:text-white transition-colors"
          onClick={canAfford ? handlePreviewSwap : undefined}
          disabled={!canAfford || loading}
        >
          {loading
            ? "Loading..."
            : canAfford
            ? "Preview Swap"
            : "Insufficient Balance"}
        </Button>
        {quote && (
          <Button
            className="w-full font-body bg-white border-2 border-black text-[#FF5722] hover:bg-black hover:text-white transition-colors"
            onClick={handleExecuteSwap}
            disabled={loading}
          >
            Execute Swap
          </Button>
        )}
        {loading && (
          <div className="flex flex-row items-center justify-center">
            <LoaderIcon className="animate animate-spin" />
          </div>
        )}
        {transactionStatus && (
          <p className="text-sm mt-4">{transactionStatus}</p>
        )}
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default Swap;
