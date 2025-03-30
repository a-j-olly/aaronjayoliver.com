import { describe, it, expect, vi, beforeEach } from 'vitest';
import { get } from 'svelte/store';
import {
	selectedTagIds,
	selectedTags,
	displayedProjects,
	allTags,
	toggleTag,
	clearTags,
	isTagSelected,
	getProjectBySlug,
	sortMethod,
	toggleSort
} from '$lib/services/projectStore';

// Mock the projectService
vi.mock('$lib/services/projectService', () => {
	return {
		getAllProjectDetails: vi.fn(() => [
			{
				id: '1',
				name: 'Project 1',
				slug: 'project-1',
				description: 'Description 1',
				releaseDate: '2023-01-01',
				updatedDate: '2023-02-01',
				image: 'image1',
				repositoryURL: 'https://github.com/test/project1',
				tags: [
					{ id: '1', name: 'Tag 1' },
					{ id: '2', name: 'Tag 2' }
				]
			},
			{
				id: '2',
				name: 'Project 2',
				slug: 'project-2',
				description: 'Description 2',
				releaseDate: '2023-03-01',
				updatedDate: '2023-04-01',
				image: 'image2',
				repositoryURL: 'https://github.com/test/project2',
				tags: [
					{ id: '2', name: 'Tag 2' },
					{ id: '3', name: 'Tag 3' }
				]
			}
		]),
		getAllTags: vi.fn(() => [
			{ id: '1', name: 'Tag 1', url: 'https://tag1.com', image: 'image1' },
			{ id: '2', name: 'Tag 2', url: 'https://tag2.com', image: 'image2' },
			{ id: '3', name: 'Tag 3', url: 'https://tag3.com', image: 'image3' }
		]),
		filterProjectsByTags: vi.fn((tagIds) => {
			const projects = [
				{
					id: '1',
					name: 'Project 1',
					slug: 'project-1',
					description: 'Description 1',
					releaseDate: '2023-01-01',
					updatedDate: '2023-02-01',
					image: 'image1',
					repositoryURL: 'https://github.com/test/project1',
					tags: [
						{ id: '1', name: 'Tag 1' },
						{ id: '2', name: 'Tag 2' }
					]
				},
				{
					id: '2',
					name: 'Project 2',
					slug: 'project-2',
					description: 'Description 2',
					releaseDate: '2023-03-01',
					updatedDate: '2023-04-01',
					image: 'image2',
					repositoryURL: 'https://github.com/test/project2',
					tags: [
						{ id: '2', name: 'Tag 2' },
						{ id: '3', name: 'Tag 3' }
					]
				}
			];

			if (tagIds.length === 0) return projects;

			return projects.filter((project) =>
				tagIds.every((tagId: string) => project.tags.some((tag) => tag.id === tagId))
			);
		})
	};
});

describe('projectStore', () => {
	beforeEach(() => {
		// Reset the store state before each test
		clearTags();
		vi.clearAllMocks();
	});

	describe('allTags', () => {
		it('should return all available tags', () => {
			const tags = get(allTags);

			expect(tags).toHaveLength(3);
			expect(tags[0].name).toBe('Tag 1');
		});
	});

	describe('selectedTags', () => {
		it('should initially be empty', () => {
			const tags = get(selectedTags);
			expect(tags).toHaveLength(0);
		});

		it('should reflect the selected tag IDs', () => {
			// Set some selected tags
			selectedTagIds.set(['1', '2']);

			const tags = get(selectedTags);

			expect(tags).toHaveLength(2);
			expect(tags[0].id).toBe('1');
			expect(tags[1].id).toBe('2');
		});

		it('should handle unknown tag IDs gracefully', () => {
			// Set an unknown tag ID
			selectedTagIds.set(['999']);

			const tags = get(selectedTags);

			expect(tags).toHaveLength(1);
			expect(tags[0].id).toBe('999');
			expect(tags[0].name).toBe('Unknown');
		});
	});

	describe('displayedProjects', () => {
		it('should initially display all projects', () => {
			const projects = get(displayedProjects);

			expect(projects).toHaveLength(2);
		});

		it('should filter projects based on selected tags', () => {
			// Select tag 1
			selectedTagIds.set(['1']);

			// Should only show projects with tag 1
			const projects = get(displayedProjects);

			expect(projects).toHaveLength(1);
			expect(projects[0].id).toBe('1');
		});

		it('should handle multiple selected tags (AND logic)', () => {
			// Select tags 1 and 2
			selectedTagIds.set(['2']);

			// Should show projects with both tag 1 AND tag 2
			const projects = get(displayedProjects);

			expect(projects).toHaveLength(2);
		});

		it('should show no projects if no project matches all selected tags', () => {
			// Select tags 1 and 3 (no project has both)
			selectedTagIds.set(['1', '3']);

			const projects = get(displayedProjects);

			expect(projects).toHaveLength(0);
		});

		it('should sort projects by updatedDate in descending order by default', () => {
			const projects = get(displayedProjects);
			expect(projects[0].id).toBe('2');
			expect(projects[1].id).toBe('1');
		});

		it('should sort projects by updatedDate in ascending order when sortMethod is asc', () => {
			sortMethod.set('asc');
			const projects = get(displayedProjects);
			expect(projects[0].id).toBe('1');
			expect(projects[1].id).toBe('2');
		});
	});

	describe('toggleTag', () => {
		it('should add a tag when not already selected', () => {
			toggleTag('1');

			const tagIds = get(selectedTagIds);
			expect(tagIds).toContain('1');
		});

		it('should remove a tag when already selected', () => {
			// First add a tag
			toggleTag('1');
			// Then toggle it again
			toggleTag('1');

			const tagIds = get(selectedTagIds);
			expect(tagIds).not.toContain('1');
		});

		it('should maintain other selected tags when toggling', () => {
			// Add two tags
			toggleTag('1');
			toggleTag('2');

			// Remove one
			toggleTag('1');

			const tagIds = get(selectedTagIds);
			expect(tagIds).not.toContain('1');
			expect(tagIds).toContain('2');
		});
	});

	describe('toggleSort', () => {
		it('should toggle between asc and desc sort methods', () => {
			// Initial state should be desc
			sortMethod.set('desc');

			toggleSort();
			expect(get(sortMethod)).toBe('asc');

			toggleSort();
			expect(get(sortMethod)).toBe('desc');
		});
	});

	describe('clearTags', () => {
		it('should remove all selected tags', () => {
			// Add some tags
			toggleTag('1');
			toggleTag('2');

			// Clear all tags
			clearTags();

			const tagIds = get(selectedTagIds);
			expect(tagIds).toHaveLength(0);
		});
	});

	describe('isTagSelected', () => {
		it('should return true for a selected tag', () => {
			toggleTag('1');

			const selected = isTagSelected('1');
			expect(selected).toBe(true);
		});

		it('should return false for a non-selected tag', () => {
			const selected = isTagSelected('999');
			expect(selected).toBe(false);
		});
	});

	describe('getProjectBySlug', () => {
		it('should return the project with matching slug', () => {
			const project = getProjectBySlug('project-1');

			expect(project).toBeDefined();
			expect(project?.name).toBe('Project 1');
		});

		it('should return undefined for a non-existent slug', () => {
			const project = getProjectBySlug('non-existent');

			expect(project).toBeUndefined();
		});
	});
});
