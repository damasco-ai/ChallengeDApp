import { api } from "@/store/api";

/**
 * User API service that extends the base API configuration.
 * This service adds endpoints for fetching live hack data and top scores.
 */
export const liveApi = api.injectEndpoints({
  /**
   * Defines the endpoints for the `userApi` service.
   *
   * @param {object} builder - The builder object used to define queries and mutations.
   * @returns {object} An object containing the defined endpoints.
   */
  endpoints: (builder) => ({
    /**
     * Endpoint to fetch live hack data.
     *
     * @property {function} liveHack.query - The query configuration for fetching live hack data.
     * @returns {object} The query parameters for the API request.
     * @example
     * const { data, error, isLoading } = useLiveHackQuery();
     */
    liveHack: builder.query({
      query: () => ({
        url: "live-hack", // The API endpoint for fetching live hack data.
        method: "GET", // HTTP method for the request.
      }),
    }),

    /**
     * Endpoint to fetch the top scores.
     *
     * @property {function} topScore.query - The query configuration for fetching top scores.
     * @returns {object} The query parameters for the API request.
     * @example
     * const { data, error, isLoading } = useTopScoreQuery();
     */
    topScore: builder.query({
      query: () => ({
        url: "top-score", // The API endpoint for fetching top scores.
        method: "GET", // HTTP method for the request.
      }),
    }),
  }),

  /**
   * Overrides existing endpoints if they are already defined.
   * Useful for extending or modifying existing API services.
   * @type {boolean}
   */
  overrideExisting: true,
});

/**
 * Hooks to fetch data using the `liveHack` and `topScore` queries.
 *
 * @example
 * // Fetch live hack data:
 * const { data: liveHackData, error, isLoading } = useLiveHackQuery();
 *
 * // Fetch top scores:
 * const { data: topScoreData, error, isLoading } = useTopScoreQuery();
 */
export const { useLiveHackQuery, useTopScoreQuery } = liveApi;
