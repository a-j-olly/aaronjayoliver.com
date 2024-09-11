import { describe, it, expect, vi, beforeEach } from "vitest";
import { executeQuery } from "../../src/lib/db";
import { mapProjectResponse } from "../../src/lib/response_mapper";
import { getProjectListBySomeTagIds } from "../../src/resolvers/getProjectListBySomeTagIds";

// Mock the client.query method
vi.mock("../../src/lib/db", () => ({
	executeQuery: vi.fn(),
}));

// Mock the mapProjectResponse function
vi.mock("../../src/lib/response_mapper", () => ({
	mapProjectResponse: vi.fn(),
}));

beforeEach(() => {
	vi.mocked(executeQuery).mockReset();
	vi.mocked(mapProjectResponse).mockReset();
});

describe("getProjectListBySomeTagIds", {}, () => {
	it("should return projects associated with given tag IDs", async () => {
		const mockProjectRows = {
			rows: [
				{
					id: 1,
					name: "Project Alpha",
					description: "First project",
					releaseDate: "2023-01-01",
					tag_id: 1,
					tag_name: "JavaScript",
				},
				{
					id: 1,
					name: "Project Alpha",
					description: "First project",
					releaseDate: "2023-01-01",
					tag_id: 2,
					tag_name: "GraphQL",
				},
				{
					id: 2,
					name: "Project Beta",
					description: "Second project",
					releaseDate: "2023-02-01",
					tag_id: 1,
					tag_name: "JavaScript",
				},
			],
		};

		const expectedProjects = [
			{
				id: 1,
				name: "Project Alpha",
				description: "First project",
				releaseDate: "2023-01-01",
				tags: [
					{ id: 1, name: "JavaScript" },
					{ id: 2, name: "GraphQL" },
				],
			},
			{
				id: 2,
				name: "Project Beta",
				description: "Second project",
				releaseDate: "2023-02-01",
				tags: [{ id: 1, name: "JavaScript" }],
			},
		];

		vi.mocked(executeQuery).mockResolvedValue(mockProjectRows as any);
		vi.mocked(mapProjectResponse).mockResolvedValue(expectedProjects);

		// Call the function with valid tag IDs
		const result = await getProjectListBySomeTagIds(["1", "2"]);

		// Assert that the result matches the mock data
		expect(result).toEqual(expectedProjects);

		expect(executeQuery).toHaveBeenCalledOnce();
	});

	it("should return an empty list when no projects match the tag IDs", async () => {
		vi.mocked(executeQuery).mockResolvedValue({ rows: [] } as any);
		vi.mocked(mapProjectResponse).mockResolvedValue([]);

		// Call the function with tag IDs
		const result = await getProjectListBySomeTagIds(["999"]);

		// Assert that the result is an empty array
		expect(result).toEqual([]);

		expect(executeQuery).toHaveBeenCalledOnce();
	});
});
