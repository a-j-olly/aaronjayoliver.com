import { ProjectItem } from "shared_types";
import { client } from "../lib/db";
import { mapProjectResponse } from "../lib/response_mapper";

export async function getProjectList(): Promise<ProjectItem[]> {
	let projects: ProjectItem[] = [];
	await client.connect();

	const result = await client.query(`
		SELECT p.*, t.id AS tag_id, t.name AS tag_name
		FROM projects p
		LEFT JOIN project_tags pt ON pt.project_id = p.id
		LEFT JOIN tags t ON t.id = pt.tag_id
	`);

	projects = mapProjectResponse(result.rows);

	client.end();

	return projects;
}

export async function getProjectListBySomeTagIds(
	tagIds: string[]
): Promise<ProjectItem[]> {
	let projects: ProjectItem[] = [];

	await client.connect();
	const tags = [...tagIds.map((tagId) => parseInt(tagId))];

	projects = await getProjectListByTagIds(tags);

	client.end();

	return projects;
}

export async function getProjectListByAllTagIds(
	tagIds: string[]
): Promise<ProjectItem[]> {
	let projects: ProjectItem[] = [];
	await client.connect();
	const tags = [...tagIds.map((tagId) => parseInt(tagId))];

	const result = await getProjectListByTagIds(tags);

	projects = result.filter((project) => {
		const matchedTagIds = project.tags.map((pt) => pt.id);
		return tags.every((tagId) => matchedTagIds.includes(tagId));
	});

	client.end();

	return projects;
}

async function getProjectListByTagIds(tags: number[]): Promise<ProjectItem[]> {
	const sql = `
		SELECT p.*, t.id AS tag_id, t.name AS tag_name
		FROM projects p
		JOIN project_tags pt ON pt.project_id = p.id
		JOIN tags t ON t.id = pt.tag_id
		WHERE p.id IN (
			SELECT project_id 
			FROM project_tags 
			WHERE tag_id = ANY($1::int[])
		)
		ORDER BY p.id, t.id;
	`;
	return mapProjectResponse((await client.query(sql, [tags])).rows);
}
