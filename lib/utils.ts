import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names.
 * Combines multiple class names using `clsx` and resolves Tailwind CSS conflicts with `twMerge`.
 * This is useful when dynamically applying Tailwind classes while avoiding duplication or conflicts.
 *
 * @param {...ClassValue[]} inputs - A list of class names or class name expressions to merge.
 * @returns {string} A single string containing the merged and resolved class names.
 * @example
 * // Basic usage
 * cn("text-center", "font-bold"); // Returns "text-center font-bold"
 *
 * // Handling conditional classes
 * cn("bg-red-500", { "text-white": true, "text-black": false }); // Returns "bg-red-500 text-white"
 *
 * // Resolving Tailwind conflicts
 * cn("p-4", "p-2"); // Returns "p-2" (Tailwind conflict resolved by `twMerge`)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs)); // Combine class names and resolve conflicts.
}
