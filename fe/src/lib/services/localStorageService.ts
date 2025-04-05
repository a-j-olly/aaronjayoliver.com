/**
 * Storage keys used throughout the application
 */
export const STORAGE_KEYS = {
	SHOW_TAGS: 'portfolio_show_tags'
} as const;

/**
 * Get a value from localStorage with type safety and error handling
 * @param key - The key to retrieve from localStorage
 * @param defaultValue - The default value to return if the key doesn't exist or if there's an error
 * @returns The stored value or the default value
 */
export function getStoredValue<T>(key: string, defaultValue: T): T {
	try {
		const stored = localStorage.getItem(key);
		return stored ? JSON.parse(stored) : defaultValue;
	} catch {
		return defaultValue;
	}
}

/**
 * Save a value to localStorage with error handling
 * @param key - The key to store the value under
 * @param value - The value to store
 */
export function setStoredValue<T>(key: string, value: T): void {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {
		// Silently fail if localStorage is not available
	}
} 