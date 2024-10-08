export type ProjectRow = {
	id: number;
	name: string;
	description: string;
	release_date: string;
	repository_url?: string;
	presentation_url?: string;
	tag_id: number;
	tag_name: string;
  }

export type ProjectItem = {
	id: ID;
	name: string;
	description: string;
	releaseDate: string;
	repositoryURL?: string;
	presentationURL?: string
	tags: TagItem[];
};

export type TagItem = {
	id: ID;
	name: string;
};

export type Query = {
	getProjectList: ProjectItem[];
	getProjectListByTagIds(tagIds: ID[]): ProjectItem[];
	getProjectByProjectId(projectId: ID): ProjectItem | null;
	getTagList: TagItem[];
};

type ID = string | number;
