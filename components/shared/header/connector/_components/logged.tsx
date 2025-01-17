"use client";

import React, { useCallback, useState } from "react";

import { usePrivy, useSolanaWallets } from "@privy-io/react-auth";

import { formatAddress } from "@/lib/strings";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useSolanaBalance } from "@/hooks/use-solana-balance";
import { useTokenBalance } from "@/hooks/use-token-balance";
import { useWalletUsdBalance } from "@/hooks/use-wallet-balance";
import { ChevronDownIcon, CopyIcon } from "lucide-react";

const LoggedConnector: React.FC = () => {
  const { logout } = usePrivy();
  const { wallets } = useSolanaWallets();

  const { balance: solBalance } = useSolanaBalance();
  const { balance: tokenBalance } = useTokenBalance();
  const { totalUsd } = useWalletUsdBalance();

  const [isLogoutLoading, setLogoutLoading] = useState(false);

  const wallet = wallets[0];

  const onDisconnect = useCallback(() => {
    setLogoutLoading(true);

    logout().finally(() => {
      setLogoutLoading(false);
    });
  }, [logout]);

  if (!wallet) {
    return null;
  }

  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger asChild>
        <div className="flex flex-row items-center w-full max-w-[280px] border-2 border-black shadow-[4px_4px_0_0_#22c55e] py-2 px-3">
          <Avatar className="relative bg-neutral-200 ring-2 ring-black">
            {wallet.meta && wallet.meta.icon && (
              <AvatarImage
                src={wallet.meta.icon}
                alt="Damasco AI - Wallet"
                className="absolute top-0 left-0 w-full h-full object-scale-down"
              />
            )}
            {!wallet.meta.icon && (
              <AvatarFallback className="text-primary font-bold">
                {wallet.meta.name.split("")[0]}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-col ml-4 mr-auto">
            <div className="flex space-x-2">
              <span className="font-light">
                {formatAddress(wallet.address)}
              </span>
              <button className="transition-all ease-in-out hover:scale-110">
                <CopyIcon className="w-4 h-4" />
              </button>
            </div>
            <span className="text-xs font-bold">${totalUsd}</span>
          </div>
          <ChevronDownIcon />
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        className="w-80 p-4 bg-background border-2 border-black rounded-none"
        align="end"
        sideOffset={12}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Address</span>
              <span className="font-mono text-sm">
                {formatAddress(wallet.address)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">SOL Balance</span>
              <span className="font-mono text-sm">{solBalance} SOL</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                $MASCO Balance
              </span>
              <span className="font-mono text-sm">{tokenBalance} $MASCO</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors rounded-none"
            onClick={onDisconnect}
            disabled={isLogoutLoading}
          >
            {isLogoutLoading ? "Disconnecting..." : "Disconnect"}
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LoggedConnector;
