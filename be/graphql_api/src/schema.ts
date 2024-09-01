export const typeDefs = `#graphql
type Project {
	id: ID!
	name: String!
	description: String!
	releaseDate: String!
	repositoryURL: String!
	siteURL: String
	tags: [Tag]!
}

type Tag {
	id: ID!
	name: String!
}

type Query {
	getProjectList: [Project]!
    getProjectListByTagIds(tagIds: [ID]!): [Project]!
    getProjectByProjectId(projectId: ID!): Project
	hello: String
}
`;
