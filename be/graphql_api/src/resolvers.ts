import { getProjectByProjectId } from "./lib/getProjectByProjectId";
import {
	getProjectList,
	getProjectListBySomeTagIds,
	getProjectListByAllTagIds,
} from "./lib/getProjectList";
import { getTagList } from "./lib/getTagList";

export const resolvers = {
	Query: {
		getProjectList,
		getProjectListBySomeTagIds,
		getProjectListByAllTagIds,
		getProjectByProjectId,
		getTagList,
	},
};
