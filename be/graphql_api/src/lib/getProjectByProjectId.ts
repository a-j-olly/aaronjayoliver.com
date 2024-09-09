import prisma from "../prisma_client/prisma";

export async function getProjectByProjectId(projectId: string) {
	return await prisma.projects.findUnique({
		where: { id: parseInt(projectId) },
		include: { project_tags: true },
	});
}
