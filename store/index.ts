import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector,
} from "react-redux";

import { api } from "./api";
import { reducer } from "./reducer";

/**
 * Creates and configures the Redux store for the application.
 * Includes reducers and middleware for the API service.
 *
 * @returns {ReturnType<typeof configureStore>} The configured Redux store.
 */
export const makeStore = () => {
  const store = configureStore({
    /**
     * The root reducer that combines all individual reducers.
     */
    reducer,

    /**
     * Middleware setup, including default middleware and API middleware for handling async operations.
     *
     * @param {function} getDefaultMiddleware - A function to retrieve the default middleware.
     * @returns {Middleware[]} An array of middleware including the API middleware.
     */
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(api.middleware),
  });

  return store;
};

/**
 * Type representing the application store.
 * @typedef {ReturnType<typeof makeStore>} AppStore
 */
export type AppStore = ReturnType<typeof makeStore>;

/**
 * Type representing the dispatch function of the application store.
 * @typedef {AppStore["dispatch"]} AppDispatch
 */
export type AppDispatch = AppStore["dispatch"];

/**
 * Type representing the root state of the application store.
 * @typedef {ReturnType<AppStore["getState"]>} RootState
 */
export type RootState = ReturnType<AppStore["getState"]>;

/**
 * Custom hook to access the dispatch function typed for the application store.
 *
 * @returns {AppDispatch} The dispatch function.
 */
export const useDispatch: () => AppDispatch = useReduxDispatch;

/**
 * Custom hook to access the state of the application store.
 * This hook is typed to match the application's root state.
 *
 * @type {TypedUseSelectorHook<RootState>}
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
