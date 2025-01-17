"use client";

import React, { useReducer } from "react";

import { TrophyIcon } from "lucide-react";

import { formatNumber } from "@/lib/number";
import { formatAddress } from "@/lib/strings";

import { Button } from "@/components/ui/button";
import { useTopScoreQuery } from "@/store/reducers/live/live.api";

type Winner = {
  sum: number;
  count: number;
  wallet__address: string;
};

const TopHolders: React.FC = () => {
  const { data } = useTopScoreQuery(
    {},
    {
      pollingInterval: 10000,
    }
  );

  const [showAll, toggleShowAll] = useReducer((dirt) => !dirt, false);

  const displayCount = showAll ? 10 : 3;

  const winners = data ? (data as Winner[]) : ([] as Winner[]);

  return (
    <section className="p-6 border-2 border-black shadow-[4px_4px_0_0_black]">
      <header className="flex flex-row items-center gap-2 mb-4">
        <TrophyIcon className="stroke-2 text-primary" />
        <span className="font-bold text-lg font-display">TOP 10 Hackers</span>
      </header>
      <div className="space-y-4 relative">
        {winners.slice(0, displayCount).map((winner, index) => (
          <div
            key={winner.wallet__address}
            className="flex items-center justify-between py-3 border-b-2 border-black last:border-0"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold font-mono text-primary">
                #{index + 1}
              </span>
              <div className="space-y-1">
                <span className="text-sm font-mono">
                  {formatAddress(winner.wallet__address)}
                </span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{Math.round(Number(winner.count) / 2)} attempts</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-primary">
                {formatNumber(winner.sum)}
              </div>
              <div className="text-xs text-muted-foreground">
                {/* ${formatNumber(winner.mascoEarned * MASCO_PRICE)} */}SCORE
              </div>
            </div>
          </div>
        ))}
        {/* <div className="absolute -top-2 -left-2 -right-2 -bottom-2 backdrop-blur-sm bg-white/20" /> */}
      </div>
      <Button
        className="w-full font-body border-2 border-black mt-4"
        variant="outline"
        // disabled
        onClick={toggleShowAll}
      >
        {showAll ? "Show Less" : "Show More"}
        {/* COMING SOON */}
      </Button>
    </section>
  );
};

export default TopHolders;
