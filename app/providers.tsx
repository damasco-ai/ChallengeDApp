"use client";

import React, { PropsWithChildren, useEffect, useRef } from "react";

import { PrivyProvider } from "@privy-io/react-auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { privyConfig } from "@/configs/privy";
import { queryClient } from "@/configs/query_client";

import { AppStore, makeStore } from "@/store";

/**
 * Global providers wrapper for the application.
 * It combines multiple providers like Redux, React Query, NiceModal, and Privy authentication.
 *
 * @component
 * @param {PropsWithChildren} props - The props containing the children to be wrapped by the providers.
 * @returns {React.ReactElement} The component wrapped with all required providers.
 */
const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  /**
   * A reference to the Redux store instance.
   * Ensures that the store is created only once and persists throughout the app's lifecycle.
   * @type {React.MutableRefObject<AppStore | null>}
   */
  const storeRef = useRef<AppStore>(null);

  // Initialize the Redux store if it hasn't been created already.
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current != null) {
      /**
       * Sets up listeners for automatic refetching of queries on network reconnection and focus changes.
       *
       * @returns {function} A function to unsubscribe the listeners when the component unmounts.
       */
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return (
    /**
     * React Query's provider for managing query state and caching.
     */
    <QueryClientProvider client={queryClient}>
      {/**
       * Privy authentication provider for user authentication and secure access management.
       */}
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
        clientId={process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID as string}
        config={privyConfig}
      >
        {/**
         * Redux provider for global state management.
         */}
        <Provider store={storeRef.current}>{children}</Provider>
      </PrivyProvider>
    </QueryClientProvider>
  );
};

export default Providers;
