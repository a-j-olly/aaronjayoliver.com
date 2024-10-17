import type { ID } from "shared_types";

export const getProjectListQuery = `
    query {
        getProjectList {
            id
            name
            imageURL
            tags {
                id
                name
            }
        }
    }
`;

export const getTagListQuery = `
    query {
        getTagList {
            id
            name
        }
    }
`;

export function getProjectByProjectIdQuery(projectId: string) {
	return `
    query {
        getProjectByProjectId(projectId: ${projectId}) {
            id
            name
            description
            releaseDate
            imageURL
            repositoryURL
            presentationURL
            tags {
                id
                name
            }
        }
    }`;
}

export function getProjectListByAllTagIdsQuery(tagIds: ID[]) {
	return `
    query {
        getProjectListByAllTagIds(tagIds: ${JSON.stringify(tagIds)}) {
            id
            name
            imageURL
            tags {
                id
                name
            }
        }
    }`;
}
