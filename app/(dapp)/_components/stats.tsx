"use client";

import React from "react";

import { usePrivy } from "@privy-io/react-auth";
import {
  AsteriskIcon,
  BoltIcon,
  DollarSignIcon,
  TrophyIcon,
} from "lucide-react";

import { useUserStatsQuery } from "@/store/reducers/user/user.api";

import StatsCard from "./stats-card";

const Stats: React.FC = () => {
  const { authenticated } = usePrivy();
  const { data, isLoading } = useUserStatsQuery(
    {},
    { skip: !authenticated, pollingInterval: 10000 }
  );

  return (
    <div className="grid px-4 md:px-0 md:grid-cols-4 gap-6">
      <StatsCard
        label="$MASCO Prize"
        value={500000}
        Icon={TrophyIcon}
        withFormat
      />
      <StatsCard
        label="Score"
        value={isLoading ? 0 : data ? data.data.score : 0}
        Icon={BoltIcon}
        withFormat
      />
      <StatsCard
        label="Attempts"
        value={isLoading ? 0 : data ? data.data.attempts : 0}
        Icon={AsteriskIcon}
      />
      <StatsCard
        label="$MASCO Earned"
        value={isLoading ? 0 : data ? data.data.tokenEarned : 0}
        Icon={DollarSignIcon}
        withFormat
      />
    </div>
  );
};

export default Stats;
