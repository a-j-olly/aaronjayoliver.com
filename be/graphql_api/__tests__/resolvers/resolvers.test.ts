import { describe, it, expect } from "vitest";
import { getProjectByProjectId } from "../../src/resolvers/getProjectByProjectId";
import { getProjectList } from "../../src/resolvers/getProjectList";
import { getTagList } from "../../src/resolvers/getTagList";
import { resolvers } from "../../src/resolvers"; // Update with the actual path
import { getProjectListBySomeTagIds } from "../../src/resolvers/getProjectListBySomeTagIds";
import { getProjectListByAllTagIds } from "../../src/resolvers/getProjectListByAllTagIds";

describe("resolvers", () => {
	it("should have the correct resolver functions for Query", () => {
		// Check that each query is defined and mapped correctly
		expect(resolvers.Query.getProjectList).toBe(getProjectList);
		expect(resolvers.Query.getProjectListBySomeTagIds).toBe(
			getProjectListBySomeTagIds
		);
		expect(resolvers.Query.getProjectListByAllTagIds).toBe(
			getProjectListByAllTagIds
		);
		expect(resolvers.Query.getProjectByProjectId).toBe(getProjectByProjectId);
		expect(resolvers.Query.getTagList).toBe(getTagList);
	});
});
