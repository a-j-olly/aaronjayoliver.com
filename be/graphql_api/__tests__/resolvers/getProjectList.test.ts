import { describe, it, expect, vi, beforeEach } from "vitest";
import { getProjectList } from "../../src/resolvers/getProjectList";
import { executeQuery } from "../../src/lib/db";
import { mapProjectResponse } from "../../src/lib/response_mapper";

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
})

describe("getProjectList", {}, () => {
	it("should return a list of projects", async () => {
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
				{
					id: 3,
					name: "Project Gamma",
					description: "Third project",
					releaseDate: "2023-02-01",
					tag_id: null,
					tag_name: null,
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
			{
				id: 3,
				name: "Project Gamma",
				description: "Third project",
				releaseDate: "2023-02-01",
				tags: [],
			},
		];

		vi.mocked(executeQuery).mockResolvedValue(mockProjectRows as any);
		vi.mocked(mapProjectResponse).mockReturnValue(expectedProjects);

		// Call the function
		const result = await getProjectList();

		// Assert that the result matches the mock data
		expect(result).toEqual(expectedProjects);

		expect(executeQuery).toHaveBeenCalledWith(
			expect.stringContaining(`SELECT p.*, t.id AS tag_id, t.name AS tag_name`)
		);
	});

	it("should return an empty list when no projects are found", async () => {
		vi.mocked(executeQuery).mockResolvedValue({ rows: [] } as any);
		vi.mocked(mapProjectResponse).mockReturnValue([]);

		// Call the function
		const result = await getProjectList();

		// Assert that the result is an empty array
		expect(result).toEqual([]);

		expect(executeQuery).toHaveBeenCalledWith(
			expect.stringContaining(`SELECT p.*, t.id AS tag_id, t.name AS tag_name`)
		);
	});
});
