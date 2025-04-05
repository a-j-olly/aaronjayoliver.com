import { describe, it, expect, vi } from 'vitest';
import { 
  getTagItem, 
  getTagDetail, 
  getTagItems, 
  getTagDetails,
  getProjectItem,
  getProjectDetail,
  getAllProjectItems,
  getAllProjectDetails,
  findProjectBySlug,
  filterProjectsByTags,
  getAllTags
} from '$lib/services/projectService';
import { getProjectImage, getTagImage } from '$lib/services/imageService';

// Mock the imported modules
vi.mock('$lib/data/projects.json', () => {
  return {
    default: [
      {
        id: '1',
        name: 'Test Project 1',
        description: 'Test description 1',
        slug: 'test-project-1',
        releaseDate: '2023-01-01T00:00:00.000Z',
        updatedDate: '2023-02-01T00:00:00.000Z',
        image: 'testImage1',
        repositoryURL: 'https://github.com/test/project1',
        tagIds: ['1', '2']
      },
      {
        id: '2',
        name: 'Test Project 2',
        description: 'Test description 2',
        slug: 'test-project-2',
        releaseDate: '2023-03-01T00:00:00.000Z',
        updatedDate: '2023-04-01T00:00:00.000Z',
        image: 'testImage2',
        repositoryURL: 'https://github.com/test/project2',
        presentationURL: 'https://test-project-2.com',
        tagIds: ['2', '3']
      }
    ]
  };
});

vi.mock('$lib/data/tags.json', () => {
  return {
    default: [
      {
        id: '1',
        name: 'Tag 1',
        url: 'https://tag1.com',
        image: 'tag1Image'
      },
      {
        id: '2',
        name: 'Tag 2',
        url: 'https://tag2.com',
        image: 'tag2Image'
      },
      {
        id: '3',
        name: 'Tag 3',
        url: 'https://tag3.com',
        image: 'tag3Image'
      }
    ]
  };
});

vi.mock('$lib/services/imageService', () => {
  return {
    getProjectImage: vi.fn((key) => `resolved-project-image-${key}`),
    getTagImage: vi.fn((key) => `resolved-tag-image-${key}`)
  };
});

describe('projectService', () => {
  
  describe('getTagItem', () => {
    it('should return the correct tag item for a valid ID', () => {
      const result = getTagItem('1');
      expect(result).toEqual({
        id: '1',
        name: 'Tag 1'
      });
    });

    it('should throw an error for an invalid tag ID', () => {
      expect(() => getTagItem('999')).toThrow('Tag with id 999 not found');
    });
  });

  describe('getTagDetail', () => {
    it('should return the full tag details for a valid ID', () => {
      const result = getTagDetail('1');
      expect(result).toEqual({
        id: '1',
        name: 'Tag 1',
        url: 'https://tag1.com',
        image: 'resolved-tag-image-tag1Image'
      });
      expect(getTagImage).toHaveBeenCalledWith('tag1Image');
    });

    it('should throw an error for an invalid tag ID', () => {
      expect(() => getTagDetail('999')).toThrow('Tag with id 999 not found');
    });
  });

  describe('getTagItems', () => {
    it('should return an array of tag items for valid IDs', () => {
      const result = getTagItems(['1', '2']);
      expect(result).toEqual([
        { id: '1', name: 'Tag 1' },
        { id: '2', name: 'Tag 2' }
      ]);
    });

    it('should throw an error if any tag ID is invalid', () => {
      expect(() => getTagItems(['1', '999'])).toThrow('Tag with id 999 not found');
    });

    it('should return an empty array for an empty input array', () => {
      const result = getTagItems([]);
      expect(result).toEqual([]);
    });
  });

  describe('getTagDetails', () => {
    it('should return an array of tag details for valid IDs', () => {
      const result = getTagDetails(['1', '2']);
      expect(result).toEqual([
        { 
          id: '1', 
          name: 'Tag 1', 
          url: 'https://tag1.com', 
          image: 'resolved-tag-image-tag1Image' 
        },
        { 
          id: '2', 
          name: 'Tag 2', 
          url: 'https://tag2.com', 
          image: 'resolved-tag-image-tag2Image' 
        }
      ]);
    });

    it('should throw an error if any tag ID is invalid', () => {
      expect(() => getTagDetails(['1', '999'])).toThrow('Tag with id 999 not found');
    });

    it('should return an empty array for an empty input array', () => {
      const result = getTagDetails([]);
      expect(result).toEqual([]);
    });
  });

  describe('getProjectItem', () => {
    it('should convert a project JSON object to a ProjectItem', () => {
      const projectJson = {
        id: '1',
        name: 'Test Project 1',
        description: 'Test description 1',
        slug: 'test-project-1',
        releaseDate: '2023-01-01T00:00:00.000Z',
        updatedDate: '2023-02-01T00:00:00.000Z',
        image: 'testImage1',
        repositoryURL: 'https://github.com/test/project1',
        tagIds: ['1', '2']
      };

      const result = getProjectItem(projectJson);
      
      expect(result).toEqual({
        id: '1',
        name: 'Test Project 1',
        description: 'Test description 1',
        slug: 'test-project-1',
        releaseDate: '2023-01-01T00:00:00.000Z',
        updatedDate: '2023-02-01T00:00:00.000Z',
        image: 'resolved-project-image-testImage1',
        repositoryURL: 'https://github.com/test/project1',
        tags: [
          { id: '1', name: 'Tag 1' },
          { id: '2', name: 'Tag 2' }
        ]
      });
      
      expect(getProjectImage).toHaveBeenCalledWith('testImage1');
    });
  });

  describe('getProjectDetail', () => {
    it('should convert a project JSON object to a ProjectDetail', () => {
      const projectJson = {
        id: '1',
        name: 'Test Project 1',
        description: 'Test description 1',
        slug: 'test-project-1',
        releaseDate: '2023-01-01T00:00:00.000Z',
        updatedDate: '2023-02-01T00:00:00.000Z',
        image: 'testImage1',
        repositoryURL: 'https://github.com/test/project1',
        tagIds: ['1', '2']
      };

      const result = getProjectDetail(projectJson);
      
      expect(result).toEqual({
        id: '1',
        name: 'Test Project 1',
        description: 'Test description 1',
        slug: 'test-project-1',
        releaseDate: '2023-01-01T00:00:00.000Z',
        updatedDate: '2023-02-01T00:00:00.000Z',
        image: 'resolved-project-image-testImage1',
        repositoryURL: 'https://github.com/test/project1',
        tags: [
          { 
            id: '1', 
            name: 'Tag 1', 
            url: 'https://tag1.com', 
            image: 'resolved-tag-image-tag1Image' 
          },
          { 
            id: '2', 
            name: 'Tag 2', 
            url: 'https://tag2.com', 
            image: 'resolved-tag-image-tag2Image' 
          }
        ]
      });
    });
  });

  describe('getAllProjectItems', () => {
    it('should return all projects as ProjectItems', () => {
      const result = getAllProjectItems();
      
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Test Project 1');
      expect(result[1].name).toBe('Test Project 2');
      expect(result[0].tags).toHaveLength(2);
      expect(result[1].tags).toHaveLength(2);
    });
  });

  describe('getAllProjectDetails', () => {
    it('should return all projects as ProjectDetails', () => {
      const result = getAllProjectDetails();
      
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Test Project 1');
      expect(result[1].name).toBe('Test Project 2');
      expect(result[0].tags[0].url).toBe('https://tag1.com');
      expect(result[1].tags[0].url).toBe('https://tag2.com');
    });
  });

  describe('findProjectBySlug', () => {
    it('should return the project with the matching slug', () => {
      const result = findProjectBySlug('test-project-1');
      
      expect(result).toBeDefined();
      expect(result?.name).toBe('Test Project 1');
    });

    it('should return undefined for a non-existent slug', () => {
      const result = findProjectBySlug('non-existent-project');
      
      expect(result).toBeUndefined();
    });
  });

  describe('filterProjectsByTags', () => {
    it('should return projects that have all the specified tags', () => {
      const result = filterProjectsByTags(['2']);
      
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Test Project 1');
      expect(result[1].name).toBe('Test Project 2');
    });

    it('should return an empty array if no projects match the filter', () => {
      const result = filterProjectsByTags(['999']);
      
      expect(result).toHaveLength(0);
    });

    it('should return all projects if the tag array is empty', () => {
      const result = filterProjectsByTags([]);
      
      expect(result).toHaveLength(2);
    });
  });

  describe('getAllTags', () => {
    it('should return all tags as TagDetail objects', () => {
      const result = getAllTags();
      
      expect(result).toHaveLength(3);
      expect(result[0]).toEqual({
        id: '1',
        name: 'Tag 1',
        url: 'https://tag1.com',
        image: 'resolved-tag-image-tag1Image'
      });
    });
  });
});
