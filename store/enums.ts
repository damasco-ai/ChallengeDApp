/**
 * Enum representing cache tags used in the API service.
 * These tags are useful for managing cache invalidation and updates in Redux Toolkit Query.
 */
export enum CacheTags {
  /**
   * Cache tag for user statistics.
   * This tag can be used to invalidate or refetch data related to user statistics.
   * @type {string}
   */
  USER_STATS = "USER_STATS",
}
