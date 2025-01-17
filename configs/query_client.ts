import { DefaultOptions, QueryClient } from "@tanstack/react-query";

/**
 * Default configuration options for React Query.
 * These options control the behavior of queries, including caching, refetching, and retry policies.
 *
 * @type {DefaultOptions}
 * @property {object} queries - Configuration for all queries.
 * @property {number} queries.staleTime - Time in milliseconds before a query is considered stale. (Default: 5000ms)
 * @property {number} queries.gcTime - Time in milliseconds before unused query data is garbage collected. (Default: 10000ms)
 * @property {number} queries.refetchInterval - Time in milliseconds to refetch the query periodically. (Default: 30000ms)
 * @property {boolean} queries.refetchIntervalInBackground - Whether to refetch the query in the background. (Default: false)
 * @property {boolean} queries.refetchOnWindowFocus - Whether to refetch the query when the window regains focus. (Default: true)
 * @property {boolean} queries.refetchOnReconnect - Whether to refetch the query when the network reconnects. (Default: true)
 * @property {number} queries.retry - The number of retry attempts for a failed query. (Default: 3)
 */
const defaultQueryOptions: DefaultOptions = {
  queries: {
    staleTime: 5000, // Data remains fresh for 5 seconds.
    gcTime: 10000, // Unused query data is garbage collected after 10 seconds.

    refetchInterval: 30000, // Refetch the query every 30 seconds.
    refetchIntervalInBackground: false, // Do not refetch while the application is in the background.

    refetchOnWindowFocus: true, // Refetch the query when the window regains focus.

    refetchOnReconnect: true, // Refetch the query when the network reconnects.

    retry: 3, // Retry failed queries up to 3 times.
  },
};

/**
 * QueryClient instance for React Query.
 * It is configured with the default options defined above.
 *
 * @type {QueryClient}
 * @example
 * import { queryClient } from "@/configs/query_client";
 * import { QueryClientProvider } from "@tanstack/react-query";
 *
 * <QueryClientProvider client={queryClient}>
 *   <App />
 * </QueryClientProvider>
 */
export const queryClient = new QueryClient({
  defaultOptions: defaultQueryOptions,
});
