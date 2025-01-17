"use client";

import React from "react";

import { usePrivy, useSolanaWallets } from "@privy-io/react-auth";

import GuestConnector from "./_components/guest";
import LoggedConnector from "./_components/logged";

const Connector: React.FC = () => {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useSolanaWallets();

  if (wallets.length === 0) {
    return <GuestConnector />;
  }

  if (ready && authenticated) {
    return <LoggedConnector />;
  }

  return <GuestConnector />;
};

export default Connector;
