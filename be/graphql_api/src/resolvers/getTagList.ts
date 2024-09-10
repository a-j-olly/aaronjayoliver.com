import { TagItem } from "shared_types";
import { client } from "../lib/db";

export async function getTagList(): Promise<TagItem[]> {
	await client.connect();

	const result = await client.query(`SELECT * FROM tags`);

	client.end();

	return result.rows;
}
