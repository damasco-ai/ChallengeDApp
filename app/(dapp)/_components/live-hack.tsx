"use client";

import React from "react";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utcPlugin from "dayjs/plugin/utc";

import { GlobeIcon } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";

import { useLiveHackQuery } from "@/store/reducers/live/live.api";

dayjs.extend(relativeTime);
dayjs.extend(utcPlugin);

type BroadcastMessage = {
  address: string;
  content: string;
  timestamp: string;
};

const LiveHack: React.FC = () => {
  const { data, isLoading } = useLiveHackQuery(
    {},
    { refetchOnFocus: true, refetchOnReconnect: true, pollingInterval: 5000 }
  );

  const messages = data ? (data.messages as BroadcastMessage[]) : [];

  return (
    <section className="flex flex-col items-stretch  p-6 border-2 border-black shadow-[4px_4px_0_0_black]">
      <header className="flex flex-row items-center gap-2 mb-4">
        <GlobeIcon className="stroke-2 text-primary" />
        <span className="font-bold text-lg font-display">
          Live Hack Attempts
        </span>
      </header>
      <ScrollArea className="relative flex-1 max-h-[352px]">
        <div className="pr-2 pb-4 space-y-3">
          {isLoading ? (
            <div className="text-centet text-sm">Loading...</div>
          ) : (
            messages.map((msg, i) => <Item key={i} message={msg} />)
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </ScrollArea>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

const Item = ({ message: msg }: { message: BroadcastMessage }) => {
  const formatAddress = (address: string) =>
    `${address.slice(0, 4)}...${address.slice(-4)}`;

  const formatDate = (date: string) => dayjs(date).utc().local().fromNow();

  const maskMessage = (content: string) => {
    const visibleLength = Math.floor(content.length * 0.6);
    const visiblePart = content.slice(0, visibleLength);
    const maskedPart = content.slice(visibleLength);

    return (
      <span>
        {visiblePart}
        <span className="font-mono text-primary/50 blur-[1px] select-none">
          {maskedPart.replace(/[a-zA-Z0-9]/g, "X")}
        </span>
      </span>
    );
  };

  return (
    <div className="text-sm space-y-1 animate-fade-in">
      <div className="flex items-center gap-2">
        <span className="font-mono text-primary">
          {formatAddress(msg.address)}
        </span>
        <span className="text-xs text-muted-foreground">
          {formatDate(msg.timestamp)}
        </span>
      </div>
      <p className="font-mono">{maskMessage(msg.content)}</p>
    </div>
  );
};

export default LiveHack;
