"use client";

import React from "react";

import Marquee from "react-fast-marquee";

import { useDexScreener } from "@/hooks/use-dexscreener";
import { useSolPrice } from "@/hooks/use-solana-price";

import { formatNumber } from "@/lib/number";

const DEXMarquee: React.FC = () => {
  const { data, isLoading } = useDexScreener(
    process.env.NEXT_PUBLIC_DEX_PAIR_TOKEN
  );

  const { solPrice, isLoading: isSolLoading } = useSolPrice();

  return (
    <div className="bg-black p-2 text-white">
      <div className="relative container mx-auto">
        <div className="absolute top-0 left-0 w-10 bg-gradient-to-r from-black to-transparent h-full z-10" />
        <div className="absolute top-0 right-0 w-10 bg-gradient-to-l from-black to-transparent h-full z-10" />
        <Marquee autoFill className="h-6">
          <div className="flex flex-row items-center text-sm font-semibold gap-8 mr-8">
            <div>
              <span>
                SOL:{" "}
                <span className="text-primary font-normal ml-1">
                  {isSolLoading
                    ? "..."
                    : solPrice
                    ? "$" + solPrice.toFixed(2)
                    : 0}
                </span>
              </span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div>
              <span>
                $MASCO:{" "}
                <span className="text-primary font-normal ml-1">
                  {isLoading
                    ? "..."
                    : "$" +
                      formatNumber(data.priceUsd ?? 0) +
                      " ~ " +
                      data.priceSol +
                      " SOL"}
                </span>
              </span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div>
              <span>
                Liquidity:{" "}
                <span className="text-primary font-normal ml-1">
                  {isLoading ? "..." : "$" + formatNumber(data.liquidity ?? 0)}
                </span>
              </span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div>
              <span>
                FDV:{" "}
                <span className="text-primary font-normal ml-1">
                  {isLoading ? "..." : "$" + formatNumber(data.fdv ?? 0)}
                </span>
              </span>
            </div>
            <div className="text-muted-foreground">|</div>
            <div>
              <span>
                MKT Cap:{" "}
                <span className="text-primary font-normal ml-1">
                  {isLoading ? "..." : "$" + formatNumber(data.marketCap ?? 0)}
                </span>
              </span>
            </div>
            <div className="text-muted-foreground">|</div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default DEXMarquee;
