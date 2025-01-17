/* eslint-disable @typescript-eslint/no-empty-object-type */
// env.d.ts

// This file provides a type definition for the environment variables
// used in the project. It can also be extended to include specific
// validations for client and server variables.

// Exports an interface that defines all expected environment variables.
// Use the `NEXT_PUBLIC_` prefix for variables available on the client.
interface ClientEnv {
  // General variables
  NEXT_PUBLIC_DOCUMENT_TITLE: string; // Default document title
  NEXT_PUBLIC_DOCUMENT_DESCRIPTION: string; // Default document description

  // Privy settings
  NEXT_PUBLIC_PRIVY_APP_ID: string; // Privy application ID
  NEXT_PUBLIC_PRIVY_CLIENT_ID: string; // Privy client ID
  NEXT_PUBLIC_PRIVY_ACCENT_COLOR: string; // Highlight color (hexadecimal)
  NEXT_PUBLIC_PRIVY_THEME_COLOR: "light" | "dark"; // Theme: light or dark. Ensure the application handles invalid values appropriately.
  NEXT_PUBLIC_PRIVY_WALLET_CHAIN_TYPE:
    | "solana-only"
    | "ethereum-and-solana"
    | "ethereum-only"; // Wallet type

  // Token addresses
  NEXT_PUBLIC_MINT_TOKEN_ADDRESS: string; // Mint token address
  NEXT_PUBLIC_DEX_PAIR_TOKEN: string; // Token pair on DEX

  // URLs
  NEXT_PUBLIC_SOLANA_RPC_URL: string; // Solana RPC URL
  NEXT_PUBLIC_API_URL: string; // API endpoint URL
  NEXT_PUBLIC_WEBHOOK_URL: string; // Webhook URL

  // GTM (Google Tag Manager)
  NEXT_PUBLIC_GTM_TAG: string; // Google Tag Manager tag

  // Others (add as needed)
  NEXT_PUBLIC_JUP_REFERRAL_ACCOUNT_TOKEN: string; // Referral account token address on Jup
}

// Makes the interface accessible through a global namespace.
declare global {
  namespace NodeJS {
    interface ProcessEnv extends ClientEnv {}
  }
}

// Add this line to avoid issues with empty modules
export {};
