"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { ThreeDot } from "react-loading-indicators";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSocket } from "@/hooks/use-socket";
import { usePrivy } from "@privy-io/react-auth";

const ChatView: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { authenticated } = usePrivy();
  const { messages, sendMessage, isWaiting } = useSocket("challenge");

  const [input, setInput] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!authenticated) {
        return;
      }

      if (input.trim()) {
        setInput("");
        sendMessage(input);
      }
    },
    [input, authenticated, sendMessage]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="border-2 border-black shadow-[4px_4px_0_0_black]">
      <ScrollArea className="flex-1 h-96 p-4" ref={scrollRef}>
        <div className="space-y-4">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 border-2 border-black ${
                  message.role === "user"
                    ? "bg-[#FF5722] text-white"
                    : "bg-white"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="">
        {isWaiting && (
          <div className="flex flex-row px-4 py-2 items-center">
            <ThreeDot color="#FF5821" size="small" text="" textColor="" />
            <span className="ml-4 font-body">typing...</span>
          </div>
        )}
        <div className="border-t-2 border-black p-4 gap-4 flex flex-row">
          <Input
            className="border-2 border-black focus-visible:ring-0"
            placeholder="Try to hack me..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className="border-2 border-black text-primary hover:bg-black hover:text-white"
            variant="outline"
            disabled={!authenticated || isWaiting}
          >
            {!authenticated ? "Please, connect wallet" : "Send"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ChatView;
