import prisma from "../prisma_client/prisma";

export async function getProjectList() {
	return await prisma.projects.findMany();
}

export async function getProjectListBySomeTagIds(tagIds: string[]) {
	return await getProjectListByTagIds([...tagIds.map((tagId) => parseInt(tagId))]);
}

export async function getProjectListByAllTagIds(tagIds: string[]) {
	const tags = [...tagIds.map((tagId) => parseInt(tagId))];
	const projectList = await getProjectListByTagIds(tags);

	// Filter projects that include all tags
	return projectList.filter((project) => {
		const matchedTagIds = project.project_tags.map((pt) => pt.tag_id);
		return tags.every((tagId) => matchedTagIds.includes(tagId));
	});
}

async function getProjectListByTagIds(tags: number[]) {
	return await prisma.projects.findMany({
		where: {
			project_tags: {
				some: {
					tag_id: {
						in: tags,
					},
				},
			},
		},
		include: {
			project_tags: true,
		},
	});
}
