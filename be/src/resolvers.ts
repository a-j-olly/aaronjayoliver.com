export const resolvers = {
	Query: {
		hello: async function (_) {
			return "world";
		},
		getProjectList: async function (_) {
            return [];
        },
		getProjectListByTagIds: async function (_, { tagIds: [string] }) {
			return [];
		},
		getProjectByProjectId: async function (_, { projectId: string }) {
			return;
		},
	},
};
