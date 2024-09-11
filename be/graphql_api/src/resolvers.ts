import { getProjectByProjectId } from "./resolvers/getProjectByProjectId";
import { getProjectList } from "./resolvers/getProjectList";
import { getProjectListByAllTagIds } from "./resolvers/getProjectListByAllTagIds";
import { getProjectListBySomeTagIds } from "./resolvers/getProjectListBySomeTagIds";
import { getTagList } from "./resolvers/getTagList";

export const resolvers = {
	Query: {
		getProjectList,
		getProjectListBySomeTagIds,
		getProjectListByAllTagIds,
		getProjectByProjectId,
		getTagList,
	},
};
