import { getProjectByProjectId } from "./resolvers/getProjectByProjectId";
import {
	getProjectList,
	getProjectListBySomeTagIds,
	getProjectListByAllTagIds,
} from "./resolvers/getProjectList";
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
