import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./base-query";
import { CacheTags } from "./enums";

/**
 * API service configuration using Redux Toolkit Query.
 * This service defines the base query and sets up caching tags for better state management.
 */
export const api = createApi({
  /**
   * The reducer path in the Redux store where this API's state will be managed.
   * @type {string}
   */
  reducerPath: "api",

  /**
   * The base query function used for all API requests.
   * This is a customized query function that handles authentication and base URL setup.
   * @see baseQuery
   */
  baseQuery,

  /**
   * Tag types used for caching and invalidation purposes.
   * These tags help manage state consistency across components.
   * @type {string[]}
   */
  tagTypes: [CacheTags.USER_STATS],

  /**
   * Defines the endpoints for this API service.
   * Currently, no endpoints are defined, but this can be expanded as needed.
   * @returns {object} An empty object, indicating no endpoints are set up yet.
   */
  endpoints: () => ({}),
});
