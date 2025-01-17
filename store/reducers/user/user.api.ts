import { api } from "@/store/api";
import { CacheTags } from "@/store/enums";

/**
 * User API service that extends the base API configuration.
 * This service adds endpoints related to user operations.
 */
export const userApi = api.injectEndpoints({
  /**
   * Defines the endpoints for the `userApi` service.
   *
   * @param {object} builder - The builder object used to define queries and mutations.
   * @returns {object} An object containing the defined endpoints.
   */
  endpoints: (builder) => ({
    /**
     * Endpoint to fetch user statistics.
     *
     * @property {function} userStats.query - The query configuration for fetching user statistics.
     * @returns {object} An object containing the query parameters.
     * @example
     * const { data, error, isLoading } = useUserStatsQuery();
     */
    userStats: builder.query({
      query: () => ({
        url: "user", // The API endpoint to fetch user statistics.
        method: "GET", // HTTP method for the request.
      }),

      /**
       * Tags provided by this query to manage cache invalidation.
       * When data associated with `CacheTags.USER_STATS` changes, this query will be invalidated.
       */
      providesTags: [CacheTags.USER_STATS],
    }),
  }),

  /**
   * Overrides existing endpoints if they are already defined.
   * This is useful for extending or modifying existing API services.
   * @type {boolean}
   */
  overrideExisting: true,
});

/**
 * Hook to fetch user statistics using the `userStats` query.
 *
 * @returns {object} A hook containing the query's status and data.
 * @example
 * const { data, error, isLoading } = useUserStatsQuery();
 */
export const { useUserStatsQuery } = userApi;
