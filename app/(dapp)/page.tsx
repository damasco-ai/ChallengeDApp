import React from "react";

import { type Metadata } from "next";

import ChatView from "./_components/chat-view";
import Instructions from "./_components/instructions";
import LiveHack from "./_components/live-hack";
import Stats from "./_components/stats";
import Swap from "./_components/swap";
import TopHolders from "./_components/top-holders";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_DOCUMENT_TITLE,
  description: process.env.NEXT_PUBLIC_DOCUMENT_DESCRIPTION,
};

const Page: React.FC = () => {
  return (
    <>
      <div className="relative z-10 my-10 container mx-auto">
        <Stats />
      </div>
      <div className="relative px-4 md:px-0 mb-10 container mx-auto grid grid-cols-12 gap-6">
        <div className="flex flex-col items-stretch col-span-12 md:col-span-3 space-y-6 order-2 md:order-none">
          <TopHolders />
          <LiveHack />
        </div>
        <div className="col-span-12 md:col-span-6 space-y-6 order-1 md:order-none">
          <Instructions />
          <ChatView />
        </div>
        <div className="col-span-12 md:col-span-3 space-y-6 order-3 md:order-none">
          <Swap />
        </div>
      </div>
    </>
  );
};

export default Page;
