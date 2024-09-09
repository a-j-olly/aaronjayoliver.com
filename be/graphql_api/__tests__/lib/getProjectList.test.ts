import { describe, it, expect, vi } from "vitest";
import {
	getProjectList,
	getProjectListByAllTagIds,
	getProjectListBySomeTagIds,
} from "../../src/lib/getProjectList";
import prisma from "../../src/prisma_client/__mocks__/prisma";

vi.mock("../../src/prisma_client/prisma");

describe("getProjectList", {}, () => {
	it("should return a list of projects", async () => {
		// Mock data returned by Prisma
		const mockProjects = [
			{
				id: 1,
				name: "Project Alpha",
				description: "First project",
				releaseDate: "2023-01-01",
			},
			{
				id: 2,
				name: "Project Beta",
				description: "Second project",
				releaseDate: "2023-02-01",
			},
		];

		// Mock the Prisma call
		(prisma.projects.findMany as any).mockResolvedValue(mockProjects);

		// Call the function
		const result = await getProjectList();

		// Assert that the result matches the mock data
		expect(result).toEqual(mockProjects);

		// Verify the Prisma client was called
		expect(prisma.projects.findMany).toHaveBeenCalledTimes(1);
	});

	it("should return an empty list when no projects are found", async () => {
		// Mock the Prisma call to return an empty list
		(prisma.projects.findMany as any).mockResolvedValue([]);

		// Call the function
		const result = await getProjectList();

		// Assert that the result is an empty array
		expect(result).toEqual([]);

		// Verify the Prisma client was called
		expect(prisma.projects.findMany).toHaveBeenCalledTimes(1);
	});
});

describe("getProjectListBySomeTagIds", {}, () => {
	it("should return projects associated with given tag IDs", async () => {
		// Mock data returned by Prisma
		const mockProjects = [
			{
				id: 1,
				name: "Project Alpha",
				description: "First project",
				project_tags: [{ tag_id: 1 }],
			},
			{
				id: 2,
				name: "Project Beta",
				description: "Second project",
				project_tags: [{ tag_id: 2 }],
			},
		];

		// Mock the Prisma call
		(prisma.projects.findMany as any).mockResolvedValue(mockProjects);

		// Call the function with valid tag IDs
		const result = await getProjectListBySomeTagIds(["1", "2"]);

		// Assert that the result matches the mock data
		expect(result).toEqual(mockProjects);

		// Verify the Prisma client was called with correct parameters
		expect(prisma.projects.findMany).toHaveBeenCalledWith({
			where: {
				project_tags: {
					some: {
						tag_id: {
							in: [1, 2],
						},
					},
				},
			},
			include: { project_tags: true },
		});
	});

	it("should return an empty list when no projects match the tag IDs", async () => {
		// Mock the Prisma call to return an empty list
		(prisma.projects.findMany as any).mockResolvedValue([]);

		// Call the function with tag IDs
		const result = await getProjectListBySomeTagIds(["999"]);

		// Assert that the result is an empty array
		expect(result).toEqual([]);

		// Verify the Prisma client was called with correct parameters
		expect(prisma.projects.findMany).toHaveBeenCalledWith({
			where: {
				project_tags: {
					some: {
						tag_id: {
							in: [999],
						},
					},
				},
			},
			include: { project_tags: true },
		});
	});
});

describe("getProjectListByAllTagIds", {}, () => {
	it("should return projects that contain all the specified tag IDs", async () => {
		// Mock data returned by Prisma
		const mockProjects = [
			{
				id: 1,
				name: "Project A",
				project_tags: [{ tag_id: 1 }, { tag_id: 2 }, { tag_id: 3 }],
			},
			{
				id: 2,
				name: "Project B",
				project_tags: [{ tag_id: 1 }, { tag_id: 2 }],
			},
			{
				id: 3,
				name: "Project C",
				project_tags: [{ tag_id: 3 }],
			},
		];

		// Mock the Prisma response
		(prisma.projects.findMany as any).mockResolvedValue(mockProjects);

		// Call the function with tag IDs [1, 2, 3]
		const result = await getProjectListByAllTagIds(["1", "2", "3"]);

		// Expected result should only contain 'Project A' because it contains all 3 tags
		expect(result).toEqual([
			{
				id: 1,
				name: "Project A",
				project_tags: [{ tag_id: 1 }, { tag_id: 2 }, { tag_id: 3 }],
			},
		]);

		// Ensure Prisma was called with the correct parameters
		expect(prisma.projects.findMany).toHaveBeenCalledWith({
			where: {
				project_tags: {
					some: {
						tag_id: {
							in: [1, 2, 3],
						},
					},
				},
			},
			include: {
				project_tags: true,
			},
		});
	});

	it("should return an empty array when no projects match the provided tag IDs", async () => {
		// Mock the Prisma response to return no projects
		(prisma.projects.findMany as any).mockResolvedValue([]);

		// Call the function with tag IDs [999] (assuming no projects have this tag)
		const result = await getProjectListByAllTagIds(["999"]);

		// Assert the result is an empty array
		expect(result).toEqual([]);

		// Ensure Prisma was called with the correct parameters
		expect(prisma.projects.findMany).toHaveBeenCalledWith({
			where: {
				project_tags: {
					some: {
						tag_id: {
							in: [999],
						},
					},
				},
			},
			include: {
				project_tags: true,
			},
		});
	});

	it("should return projects that match only part of the tag IDs and exclude those missing tags", async () => {
		// Mock data returned by Prisma
		const mockProjects = [
			{
				id: 1,
				name: "Project A",
				project_tags: [{ tag_id: 1 }, { tag_id: 2 }],
			},
			{
				id: 2,
				name: "Project B",
				project_tags: [{ tag_id: 2 }],
			},
		];

		// Mock the Prisma response
		(prisma.projects.findMany as any).mockResolvedValue(mockProjects);

		// Call the function with tag IDs [1, 2]
		const result = await getProjectListByAllTagIds(["1", "2"]);

		// Only 'Project A' should be returned because it contains both tag_id 1 and 2
		expect(result).toEqual([
			{
				id: 1,
				name: "Project A",
				project_tags: [{ tag_id: 1 }, { tag_id: 2 }],
			},
		]);

		// Ensure Prisma was called with the correct parameters
		expect(prisma.projects.findMany).toHaveBeenCalledWith({
			where: {
				project_tags: {
					some: {
						tag_id: {
							in: [1, 2],
						},
					},
				},
			},
			include: {
				project_tags: true,
			},
		});
	});
});
