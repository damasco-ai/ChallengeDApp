/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useCallback, useEffect, useState } from "react";

import { useUserStatsQuery } from "@/store/reducers/user/user.api";
import { usePrivy } from "@privy-io/react-auth";
import { io, Socket } from "socket.io-client";

let socket: Socket;

/**
 * Custom hook to handle WebSocket connections using `socket.io-client`.
 * Manages connection state, messages, and interactions with the server.
 *
 * @param {string} channel - The WebSocket channel to connect to.
 * @returns {object} An object containing connection status, messages, and methods for interacting with the socket.
 */
export const useSocket = (channel: string) => {
  const { authenticated, getAccessToken } = usePrivy(); // Authentication context from Privy.
  const { refetch: refetchStats } = useUserStatsQuery(
    {},
    { skip: !authenticated }
  );

  const [isConnected, setIsConnected] = useState(false); // Tracks WebSocket connection status.
  const [isWaiting, setIsWaiting] = useState(false); // Tracks if a response is awaited.
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content: "Good luck, treasure hunter! 🍀 Let the guessing game begin!",
    },
  ]);

  useEffect(() => {
    if (!authenticated) {
      return;
    }

    (async () => {
      const token = await getAccessToken(); // Fetch access token for authorization.

      // Initialize WebSocket connection.
      socket = io(`${process.env.NEXT_PUBLIC_WEBHOOK_URL}/${channel}`, {
        extraHeaders: {
          authorization: token as string,
        },
      });

      // Handle socket connection event.
      socket.on("connect", () => {
        setIsConnected(true);
      });

      // Handle incoming messages from the server.
      socket.on("reply", (data) => {
        setIsWaiting(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.message,
          },
        ]);
        refetchStats(); // Refetch user stats upon receiving a message.
      });

      // Handle socket disconnection event.
      socket.on("disconnect", () => {
        setIsConnected(false);
        setIsWaiting(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Oops! 😅 It looks like something went wrong. Please try again in a moment!",
          },
        ]);
      });
    })();

    // Cleanup: disconnect the socket on unmount or channel change.
    return () => {
      socket.disconnect();
    };
  }, [channel, authenticated]);

  /**
   * Sends a message to the server via the WebSocket connection.
   *
   * @param {string} message - The message content to send.
   */
  const sendMessage = useCallback((message: string) => {
    socket.emit("message", { message }); // Emit message to the server.
    setIsWaiting(true); // Set waiting state to true.

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);
  }, []);

  return { isConnected, socket, isWaiting, messages, sendMessage };
};
