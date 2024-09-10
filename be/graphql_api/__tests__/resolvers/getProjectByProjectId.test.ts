import { describe, it, expect, vi } from "vitest";

import { getProjectByProjectId } from "../../src/resolvers/getProjectByProjectId";

vi.mock("../../src/prisma_client/prisma");

describe("getProjectByProjectId", {}, () => {
	it("should return a project with associated tags when a valid projectId is provided", async () => {
		// Mock data returned by Prisma
		const mockProject = {
			id: 1,
			name: "Project Alpha",
			description: "Test project",
			release_date: "2023-01-01" as unknown as Date,
			repository_url: "https://github.com/example/project-alpha",
			presentation_url: "https://example.com/project-alpha",
			project_tags: [
				{ id: 1, name: "JavaScript" },
				{ id: 2, name: "GraphQL" },
			],
		};

		// Mock the Prisma call
		prisma.projects.findUnique.mockResolvedValue(mockProject);

		// Call the function
		const result = await getProjectByProjectId("1");

		// Assert that the result matches the mock data
		expect(result).toEqual(mockProject);

		// Verify the Prisma client was called with the correct parameters
		expect(prisma.projects.findUnique).toHaveBeenCalledWith({
			where: { id: 1 },
			include: { project_tags: true },
		});
	});

	it("should return null when a project is not found", async () => {
		// Mock Prisma to return null when the project isn't found
		(prisma.projects.findUnique as any).mockResolvedValue(null);

		// Call the function with a non-existing projectId
		const result = await getProjectByProjectId("999");

		// Assert the result is null
		expect(result).toBeNull();

		// Verify the Prisma client was called with the correct parameters
		expect(prisma.projects.findUnique).toHaveBeenCalledWith({
			where: { id: 999 },
			include: { project_tags: true },
		});
	});
});
