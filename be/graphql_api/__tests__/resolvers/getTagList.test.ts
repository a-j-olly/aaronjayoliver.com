import { describe, it, expect, vi } from "vitest";
import { getTagList } from "../../src/lib/getTagList";
import prisma from "../../src/prisma_client/__mocks__/prisma";

vi.mock("../../src/prisma_client/prisma");

describe("getTagList", () => {
	it("should return a list of tags", async () => {
		// Mock data returned by Prisma
		const mockTags = [
			{ id: 1, name: "Tag 1" },
			{ id: 2, name: "Tag 2" },
		];

		// Mock the Prisma response
		prisma.tags.findMany.mockResolvedValue(mockTags);

		// Call the function
		const result = await getTagList();

		// Assert that the result matches the mock data
		expect(result).toEqual(mockTags);

		// Ensure Prisma was called
		expect(prisma.tags.findMany).toHaveBeenCalledTimes(1);
	});

	it("should return an empty list when no tags are found", async () => {
		// Mock the Prisma response to return an empty array
		prisma.tags.findMany.mockResolvedValue([]);

		// Call the function
		const result = await getTagList();

		// Assert that the result is an empty array
		expect(result).toEqual([]);

		// Ensure Prisma was called
		expect(prisma.tags.findMany).toHaveBeenCalledTimes(1);
	});
});
