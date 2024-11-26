import { describe, it, expect } from 'vitest';
import { filterProjectListByTags } from '$lib/index';
import type { ProjectItem, TagItem } from 'shared_types';

describe('filterProjectListByTags', () => {
	const sampleTags: TagItem[] = [
		{ id: 1, name: 'JavaScript' },
		{ id: 2, name: 'React' }
	];

	const sampleProjects: ProjectItem[] = [
		{
			id: 101,
			name: 'Project One',
			slug: 'project-one',
			description: 'First project',
			updatedDate: '2023-01-01',
			releaseDate: '2023-01-01',
			image: 'image1.jpg',
			repositoryURL: 'https://repo.one',
			tags: [{ id: 1, name: 'JavaScript' }]
		},
		{
			id: 102,
			name: 'Project Two',
			slug: 'project-two',
			description: 'Second project',
			updatedDate: '2023-01-02',
			releaseDate: '2023-01-02',
			image: 'image2.jpg',
			repositoryURL: 'https://repo.two',
			tags: [
				{ id: 1, name: 'JavaScript' },
				{ id: 2, name: 'React' }
			]
		},
		{
			id: 103,
			name: 'Project Three',
			slug: 'project-three',
			description: 'Third project',
			updatedDate: '2023-01-03',
			releaseDate: '2023-01-03',
			image: 'image3.jpg',
			repositoryURL: 'https://repo.three',
			tags: [{ id: 3, name: 'Vue' }]
		}
	];

	it('returns all projects when no tags are provided', () => {
		const result = filterProjectListByTags(sampleProjects, []);
		expect(result).toEqual(sampleProjects);
	});

	it('returns no projects when project list is empty', () => {
		const result = filterProjectListByTags([], sampleTags);
		expect(result).toEqual([]);
	});

	it('returns projects that match all provided tags', () => {
		const result = filterProjectListByTags(sampleProjects, [
			{ id: 1, name: 'JavaScript' },
			{ id: 2, name: 'React' }
		]);
		expect(result).toEqual([
			{
				id: 102,
				name: 'Project Two',
				slug: 'project-two',
				description: 'Second project',
				updatedDate: '2023-01-02',
				releaseDate: '2023-01-02',
				image: 'image2.jpg',
				repositoryURL: 'https://repo.two',
				tags: [
					{ id: 1, name: 'JavaScript' },
					{ id: 2, name: 'React' }
				]
			}
		]);
	});

	it('returns no projects if no project matches all provided tags', () => {
		const result = filterProjectListByTags(sampleProjects, [
			{ id: 1, name: 'JavaScript' },
			{ id: 4, name: 'Angular' }
		]);
		expect(result).toEqual([]);
	});

	it('returns projects that match a single tag', () => {
		const result = filterProjectListByTags(sampleProjects, [{ id: 1, name: 'JavaScript' }]);
		expect(result).toEqual([
			{
				id: 101,
				name: 'Project One',
				slug: 'project-one',
				description: 'First project',
				updatedDate: '2023-01-01',
				releaseDate: '2023-01-01',
				image: 'image1.jpg',
				repositoryURL: 'https://repo.one',
				tags: [{ id: 1, name: 'JavaScript' }]
			},
			{
				id: 102,
				name: 'Project Two',
				slug: 'project-two',
				description: 'Second project',
				updatedDate: '2023-01-02',
				releaseDate: '2023-01-02',
				image: 'image2.jpg',
				repositoryURL: 'https://repo.two',
				tags: [
					{ id: 1, name: 'JavaScript' },
					{ id: 2, name: 'React' }
				]
			}
		]);
	});
});
