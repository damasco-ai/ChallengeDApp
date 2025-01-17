/* eslint-disable @typescript-eslint/no-explicit-any */
import { deleteCookie, getCookie, setCookie } from "cookies-next";

/**
 * Creates a storage utility using cookies.
 * This utility provides methods to get, set, and remove items,
 * leveraging the `cookies-next` library for cookie management.
 *
 * @returns {object} An object with `getItem`, `setItem`, and `removeItem` methods.
 */
export const createNextStorage = () => ({
  /**
   * Retrieves an item from the storage.
   *
   * @param {string} key - The key of the item to retrieve. Keys with colons (`:`) are converted to underscores (`_`).
   * @returns {Promise<string | null>} A promise that resolves with the item's value or `null` if it doesn't exist.
   */
  getItem(key: string) {
    const value = getCookie(key.split(":").join("_")); // Replace `:` with `_` for compatibility with cookies.
    return Promise.resolve(value || null); // Return the value or `null` if not found.
  },

  /**
   * Stores an item in the storage.
   *
   * @param {string} key - The key of the item to store. Keys with colons (`:`) are converted to underscores (`_`).
   * @param {any} value - The value to store. The value is serialized automatically by the `cookies-next` library.
   * @returns {Promise<any>} A promise that resolves with the stored value.
   */
  setItem(key: string, value: any) {
    setCookie(key.split(":").join("_"), value, {
      path: "/", // Set the cookie for the entire site.
      httpOnly: false, // The cookie is accessible via JavaScript.
    });
    return Promise.resolve(value); // Return the stored value.
  },

  /**
   * Removes an item from the storage.
   *
   * @param {string} key - The key of the item to remove. Keys with colons (`:`) are converted to underscores (`_`).
   * @returns {Promise<void>} A promise that resolves when the item is removed.
   */
  removeItem(key: string) {
    deleteCookie(key.split(":").join("_")); // Delete the cookie corresponding to the key.
    return Promise.resolve(); // Indicate completion.
  },
});
