/**
 * Formats a blockchain address by truncating it and displaying only the first and last 4 characters.
 * Useful for improving readability when displaying long addresses in the UI.
 *
 * @param {string} address - The full blockchain address to format.
 * @returns {string} The formatted address with the middle part replaced by ellipsis (e.g., "abcd...1234").
 * @example
 * formatAddress("abcdefgh12345678ijklmnop"); // Returns "abcd...mnop"
 * formatAddress("1K9Q5T0BC9GH56JKL78MN9PQR"); // Returns "1K9Q...PQR"
 */
export const formatAddress = (address: string): string => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`; // Keep the first 4 and last 4 characters, truncate the middle.
};
