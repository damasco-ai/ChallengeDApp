/**
 * Formats a number into a more human-readable string using abbreviations for thousands (K) and millions (M).
 *
 * @param {number} num - The number to format.
 * @returns {string} A string representing the formatted number.
 * @example
 * formatNumber(1500); // Returns "1.5K"
 * formatNumber(2000000); // Returns "2.0M"
 * formatNumber(999); // Returns "999"
 */
export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M"; // Format numbers in millions with one decimal place.
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K"; // Format numbers in thousands with one decimal place.
  }
  return num.toString(); // Return the number as a string if below 1,000.
}

/**
 * Converts an amount from SOL (Solana's native token) to lamports.
 * One SOL equals 1e9 lamports.
 *
 * @param {number} amount - The amount in SOL to convert to lamports.
 * @returns {number} The equivalent amount in lamports.
 * @example
 * convertToLamports(1.5); // Returns 1500000000
 * convertToLamports(0.000001); // Returns 1
 */
export const convertToLamports = (amount: number): number => {
  return Math.round(amount * 1e9); // Convert SOL to lamports by multiplying by 1e9 and rounding to the nearest integer.
};
