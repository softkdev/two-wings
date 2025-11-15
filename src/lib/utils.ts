/**
 * Utility Functions
 *
 * Common helper functions used throughout the application.
 */

/**
 * Conditionally join classNames together
 * Useful for combining Tailwind classes with conditional logic
 *
 * @example
 * cn('base-class', isActive && 'active-class', 'another-class')
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a date to a readable string
 *
 * @example
 * formatDate(new Date()) // "January 1, 2024"
 */
export function formatDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  }).format(date);
}

/**
 * Truncate text to a specific length
 *
 * @example
 * truncate('Hello World', 5) // "Hello..."
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

/**
 * Debounce function calls
 *
 * @example
 * const debouncedSearch = debounce((value) => search(value), 300);
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
