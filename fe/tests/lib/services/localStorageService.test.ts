import { describe, it, expect, beforeEach, vi } from 'vitest';
import { getStoredValue, setStoredValue, STORAGE_KEYS } from '../../../src/lib/services/localStorageService';

describe('localStorageService', () => {
	// Mock localStorage
	const localStorageMock = {
		store: {} as Record<string, string>,
		getItem: vi.fn(),
		setItem: vi.fn(),
		clear: vi.fn()
	};

	// Setup localStorage mock before each test
	beforeEach(() => {
		// Reset the store
		localStorageMock.store = {};

		// Setup mock implementations
		localStorageMock.getItem.mockImplementation((key: string) => localStorageMock.store[key] || null);
		localStorageMock.setItem.mockImplementation((key: string, value: string) => {
			localStorageMock.store[key] = value;
		});
		localStorageMock.clear.mockImplementation(() => {
			localStorageMock.store = {};
		});

		// Reset all mock function calls
		vi.clearAllMocks();

		// Replace global localStorage with mock
		global.localStorage = localStorageMock as unknown as Storage;
	});

	describe('getStoredValue', () => {
		it('returns the stored value when it exists', () => {
			// Arrange
			const testKey = STORAGE_KEYS.SHOW_TAGS;
			const testValue = true;
			localStorage.setItem(testKey, JSON.stringify(testValue));

			// Act
			const result = getStoredValue(testKey, false);

			// Assert
			expect(result).toBe(testValue);
			expect(localStorage.getItem).toHaveBeenCalledWith(testKey);
			expect(localStorage.getItem).toHaveBeenCalledTimes(1);
		});

		it('returns the default value when key does not exist', () => {
			// Arrange
			const testKey = STORAGE_KEYS.SHOW_TAGS;
			const defaultValue = false;

			// Act
			const result = getStoredValue(testKey, defaultValue);

			// Assert
			expect(result).toBe(defaultValue);
			expect(localStorage.getItem).toHaveBeenCalledWith(testKey);
			expect(localStorage.getItem).toHaveBeenCalledTimes(1);
		});

		it('returns the default value when localStorage throws an error', () => {
			// Arrange
			const testKey = STORAGE_KEYS.SHOW_TAGS;
			const defaultValue = false;
			vi.spyOn(localStorage, 'getItem').mockImplementationOnce(() => {
				throw new Error('localStorage error');
			});

			// Act
			const result = getStoredValue(testKey, defaultValue);

			// Assert
			expect(result).toBe(defaultValue);
			expect(localStorage.getItem).toHaveBeenCalledWith(testKey);
			expect(localStorage.getItem).toHaveBeenCalledTimes(1);
		});

		it('handles different types of stored values', () => {
			// Arrange
			const testKey = 'test_key';
			const testObject = { name: 'test', value: 42 };
			localStorage.setItem(testKey, JSON.stringify(testObject));

			// Act
			const result = getStoredValue<typeof testObject>(testKey, { name: 'default', value: 111 });

			// Assert
			expect(result).toEqual(testObject);
			expect(localStorage.getItem).toHaveBeenCalledWith(testKey);
			expect(localStorage.getItem).toHaveBeenCalledTimes(1);
		});
	});

	describe('setStoredValue', () => {
		it('successfully stores a value', () => {
			// Arrange
			const testKey = STORAGE_KEYS.SHOW_TAGS;
			const testValue = true;

			// Act
			setStoredValue(testKey, testValue);

			// Assert
			expect(localStorage.setItem).toHaveBeenCalledWith(testKey, JSON.stringify(testValue));
			expect(localStorage.setItem).toHaveBeenCalledTimes(1);
			expect(JSON.parse(localStorage.getItem(testKey)!)).toBe(testValue);
		});

		it('silently fails when localStorage throws an error', () => {
			// Arrange
			const testKey = STORAGE_KEYS.SHOW_TAGS;
			const testValue = true;
			vi.spyOn(localStorage, 'setItem').mockImplementationOnce(() => {
				throw new Error('localStorage error');
			});

			// Act & Assert
			expect(() => setStoredValue(testKey, testValue)).not.toThrow();
			expect(localStorage.setItem).toHaveBeenCalledWith(testKey, JSON.stringify(testValue));
			expect(localStorage.setItem).toHaveBeenCalledTimes(1);
		});

		it('handles different types of values to store', () => {
			// Arrange
			const testKey = 'test_key';
			const testObject = { name: 'test', value: 42 };

			// Act
			setStoredValue(testKey, testObject);

			// Assert
			expect(localStorage.setItem).toHaveBeenCalledWith(testKey, JSON.stringify(testObject));
			expect(localStorage.setItem).toHaveBeenCalledTimes(1);
			expect(JSON.parse(localStorage.getItem(testKey)!)).toEqual(testObject);
		});
	});
}); 