import { describe, it, expect, vi, beforeEach } from "vitest";
import { getProjectByProjectId } from "../../src/resolvers/getProjectByProjectId";
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

describe("getProjectByProjectId", {}, () => {
	it("should return a project with associated tags when a valid projectId is provided", async () => {
		const mockProjectRows = {
			rows: [
				{
					id: 1,
					name: "Project Alpha",
					description: "Test project",
					release_date: "2023-01-01" as unknown as Date,
					repository_url: "https://github.com/example/project-alpha",
					presentation_url: "https://example.com/project-alpha",
					tag_id: 1,
					tag_name: "JavaScript",
				},
				{
					id: 1,
					name: "Project Alpha",
					description: "Test project",
					release_date: "2023-01-01" as unknown as Date,
					repository_url: "https://github.com/example/project-alpha",
					presentation_url: "https://example.com/project-alpha",
					tag_id: 2,
					tag_name: "GraphQL",
				},
			],
		};

		const expectedResults = {
			id: 1,
			name: "Project Alpha",
			description: "Test project",
			releaseDate: "2023-01-01",
			repositoryURL: "https://github.com/example/project-alpha",
			presentationURL: "https://example.com/project-alpha",
			tags: [
				{ id: 1, name: "JavaScript" },
				{ id: 2, name: "GraphQL" },
			],
		};

		vi.mocked(executeQuery).mockResolvedValue(mockProjectRows as any);

		vi.mocked(mapProjectResponse).mockReturnValue([expectedResults]);

		// Call the function
		const result = await getProjectByProjectId("1");

		// Assert that the result matches the mock data
		expect(result).toEqual(expectedResults);

		expect(executeQuery).toHaveBeenCalledWith(
			expect.stringContaining("SELECT p.*, t.id AS tag_id, t.name AS tag_name"),
			"1"
		);
	});

	it("should return project without tags when project exists but has no associated tags", async () => {
		const projectId = "2";
		const mockResult = {
			rows: [
				{
					id: 2,
					name: "Project 2",
					description: "Desc 2",
					tag_id: null,
					tag_name: null,
				},
			],
		};

		vi.mocked(executeQuery).mockResolvedValue(mockResult as any);
		vi.mocked(mapProjectResponse).mockReturnValue([
			{
				id: 2,
				name: "Project 2",
				description: "Desc 2",
				tags: [],
			},
		] as any);

		const result = await getProjectByProjectId(projectId);

		expect(result).toEqual({
			id: 2,
			name: "Project 2",
			description: "Desc 2",
			tags: [],
		});

		expect(executeQuery).toHaveBeenCalledWith(
			expect.stringContaining("SELECT p.*, t.id AS tag_id, t.name AS tag_name"),
			projectId
		);
	});

	it("should return null when a project is not found", async () => {
		const projectId = "999";
		const mockResult = {
			rows: [],
		};

		vi.mocked(executeQuery).mockResolvedValue(mockResult as any);
		vi.mocked(mapProjectResponse).mockReturnValue([]);

		const result = await getProjectByProjectId(projectId);

		expect(result).toBeNull();
		expect(executeQuery).toHaveBeenCalledWith(
			expect.stringContaining("SELECT p.*, t.id AS tag_id, t.name AS tag_name"),
			projectId
		);
	});
});
