export type ProjectItem = {
	id: ID;
	name: string;
	slug: string;
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
