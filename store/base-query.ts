import { getAccessToken } from "@privy-io/react-auth";
import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";

/**
 * Custom base query function to handle API requests with an Authorization header.
 * The base query includes a Bearer token obtained asynchronously from the authentication provider.
 */
export const customBaseQuery = fetchBaseQuery({
  /**
   * The base URL for API requests, defined in environment variables.
   */
  baseUrl: process.env.NEXT_PUBLIC_API_URL,

  /**
   * Prepares headers for the API request by adding an Authorization header if an access token is available.
   *
   * @param {Headers} headers - The headers object to be modified.
   * @returns {Promise<Headers>} The headers object with the Authorization header added (if applicable).
   */
  prepareHeaders: async (headers) => {
    const accessToken = await getAccessToken(); // Fetch the access token asynchronously.

    if (accessToken) {
      // If an access token exists, set it in the Authorization header.
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers; // Return the updated headers.
  },
});

/**
 * Base query function that uses the custom base query for API calls.
 * This function is compatible with Redux Toolkit Query's `BaseQueryFn`.
 *
 * @param {unknown} args - The arguments for the API request.
 * @param {object} api - The API object provided by Redux Toolkit Query.
 * @param {object} extraOptions - Additional options for the query.
 * @returns {Promise<unknown>} The result of the API request.
 */
export const baseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  // Perform the API request using the custom base query.
  const result = await customBaseQuery(args, api, extraOptions);

  return result; // Return the result of the query.
};
