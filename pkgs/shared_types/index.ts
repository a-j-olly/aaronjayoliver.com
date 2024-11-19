export type ProjectRow = {
	id: number;
	name: string;
	description: string;
	release_date: string;
	image: string;
	repository_url: string;
	presentation_url: string | null;
	tag_id: number | null;
	tag_name: string | null;
};

export type ProjectItem = {
	id: ID;
	name: string;
	description: string;
	updatedDate: string;
	releaseDate: string;
	image: string | Picture;
	repositoryURL: string;
	presentationURL?: string;
	tags: TagItem[];
};

export type ProjectDetail = ProjectItem & {
	tags: TagDetail[];
};

export type TagItem = {
	id: ID;
	name: string;
};

export type TagDetail = TagItem & {
	image: string;
	url: string;
};

export type Query = {
	getProjectList: ProjectItem[];
	getProjectListByTagIds(tagIds: ID[]): ProjectItem[];
	getProjectByProjectId(projectId: ID): ProjectItem | null;
	getTagList: TagItem[];
};

export type ID = string | number;

export type Picture = {
	/**
	 * Key is format. Value is srcset.
	 */
	sources: Record<string, string>;
	img: {
		src: string;
		w: number;
		h: number;
	};
};
