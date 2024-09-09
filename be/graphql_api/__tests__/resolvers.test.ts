import { describe, it, expect, vi } from "vitest";
import * as getProjectByProjectIdLib from "../src/lib/getProjectByProjectId";
import * as getProjectListLib from "../src/lib/getProjectList";
import * as getTagListLib from "../src/lib/getTagList";
import { resolvers } from "../src/resolvers"; // Update with the actual path

vi.mock("../src/prisma_client/prisma");

describe("resolvers", () => {
	it("should have the correct resolver functions for Query", () => {
		// Check that each query is defined and mapped correctly
		expect(resolvers.Query.getProjectList).toBe(
			getProjectListLib.getProjectList
		);
		expect(resolvers.Query.getProjectListBySomeTagIds).toBe(
			getProjectListLib.getProjectListBySomeTagIds
		);
		expect(resolvers.Query.getProjectListByAllTagIds).toBe(
			getProjectListLib.getProjectListByAllTagIds
		);
		expect(resolvers.Query.getProjectByProjectId).toBe(
			getProjectByProjectIdLib.getProjectByProjectId
		);
		expect(resolvers.Query.getTagList).toBe(getTagListLib.getTagList);
	});
});
