"use client";

import React from "react";

import { useLogin, usePrivy } from "@privy-io/react-auth";

import { Button } from "@/components/ui/button";

const GuestConnector: React.FC = () => {
  const { ready } = usePrivy();

  const { login } = useLogin();

  return (
    <Button
      className="relative text-lg px-4 py-2 uppercase font-body font-medium h-fit border-2 border-black text-orange-500 bg-white shadow-[4px_4px_0_0_black] hover:shadow-[0px_0px_0_0_black] hover:bg-orange-500 hover:text-white transition-all"
      onClick={login}
      disabled={!ready}
    >
      Connect Wallet
    </Button>
  );
};

export default GuestConnector;
