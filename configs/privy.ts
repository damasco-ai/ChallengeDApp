import { type PrivyClientConfig } from "@privy-io/react-auth";
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana";

/**
 * Configures Solana wallet connectors for Privy.
 * This includes auto-connecting to supported Solana wallets.
 *
 * @type {object}
 * @property {boolean} shouldAutoConnect - Whether to auto-connect to the wallet on initialization.
 */
const solanaConnectors = toSolanaWalletConnectors({
  shouldAutoConnect: true,
});

/**
 * Configuration object for the Privy client.
 * This object defines settings for the appearance, embedded wallets, and external wallets.
 *
 * @type {PrivyClientConfig}
 * @property {object} appearance - Defines the visual settings for Privy.
 * @property {string} appearance.theme - The theme color for the Privy interface.
 * @property {string} appearance.accentColor - The accent color for buttons and highlights.
 * @property {string} appearance.walletChainType - Specifies the blockchain type for wallets (e.g., Solana).
 * @property {object} embeddedWallets - Settings for embedded wallets in Privy.
 * @property {boolean} embeddedWallets.showWalletUIs - Whether to show embedded wallet UIs.
 * @property {string} embeddedWallets.createOnLogin - Controls wallet creation behavior on login ("off" disables creation).
 * @property {object} externalWallets - Configuration for external wallets.
 * @property {object} externalWallets.solana - Configuration for Solana wallets.
 * @property {object} externalWallets.solana.connectors - Connectors for Solana wallets.
 */
export const privyConfig = {
  appearance: {
    theme: process.env.NEXT_PUBLIC_PRIVY_THEME_COLOR, // Theme color from environment variables.
    accentColor: process.env.NEXT_PUBLIC_PRIVY_ACCENT_COLOR, // Accent color for highlights and buttons.
    walletChainType: process.env.NEXT_PUBLIC_PRIVY_WALLET_CHAIN_TYPE, // Blockchain type (e.g., Solana) from environment variables.
  },
  embeddedWallets: {
    showWalletUIs: true, // Enable wallet UIs for embedded wallets.
    createOnLogin: "off", // Do not create a wallet automatically on login.
  },
  externalWallets: {
    solana: {
      connectors: solanaConnectors, // Solana wallet connectors configured above.
    },
  },
} as PrivyClientConfig;
