import { describe, it, expect, vi } from 'vitest';
import { getProjectImage, getTagImage } from '$lib/services/imageService';

// Mock the image imports
vi.mock('$lib/images/projects/neutrify.webp?enhanced', () => {
  return { default: 'mocked-neutrify-image' };
});

vi.mock('$lib/images/icons/tags/typescript.svg', () => {
  return { default: 'mocked-typescript-icon' };
});

describe('imageService', () => {
  describe('getProjectImage', () => {
    it('should return the correct image for a valid key', () => {
      // We're testing against our mock
      const result = getProjectImage('neutrify');
      expect(result).toBe('mocked-neutrify-image');
    });

    it('should return a placeholder for an invalid key', () => {
      // Test with a key that definitely doesn't exist
      const result = getProjectImage('non-existent-project');
      expect(result).toBe('/placeholder-project.webp');
    });

    it('should log a warning for an invalid key', () => {
      // Spy on console.warn
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      
      getProjectImage('non-existent-project');
      
      expect(consoleSpy).toHaveBeenCalledWith('Project image not found: non-existent-project');
      
      // Restore console.warn
      consoleSpy.mockRestore();
    });
  });

  describe('getTagImage', () => {
    it('should return the correct image for a valid key', () => {
      // We're testing against our mock
      const result = getTagImage('typescript');
      expect(result).toBe('mocked-typescript-icon');
    });

    it('should return a placeholder for an invalid key', () => {
      // Test with a key that definitely doesn't exist
      const result = getTagImage('non-existent-tag');
      expect(result).toBe('/placeholder-tag.svg');
    });

    it('should log a warning for an invalid key', () => {
      // Spy on console.warn
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      
      getTagImage('non-existent-tag');
      
      expect(consoleSpy).toHaveBeenCalledWith('Tag image not found: non-existent-tag');
      
      // Restore console.warn
      consoleSpy.mockRestore();
    });
  });
});
