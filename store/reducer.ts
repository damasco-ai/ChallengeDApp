import { combineReducers } from "@reduxjs/toolkit";
import { api } from "./api";

/**
 * Root reducer for the Redux store.
 * Combines all slice reducers, including the API service reducer.
 *
 * @example
 * // Usage in the store configuration:
 * const store = configureStore({
 *   reducer,
 * });
 */
export const reducer = combineReducers({
  /**
   * Adds the API service reducer to the root reducer.
   * This reducer handles all the caching, queries, and mutations from the `api` service.
   *
   * @property {Reducer} [api.reducerPath] - The reducer associated with the API service.
   */
  [api.reducerPath]: api.reducer,
});
