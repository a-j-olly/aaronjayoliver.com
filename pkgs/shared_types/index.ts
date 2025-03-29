export type SortMethod = 'release' | 'updated';

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
  
  // Base JSON data structures (matching JSON files)
  export type ProjectJson = {
	id: string;
	name: string;
	slug: string;
	description: string;
	updatedDate: string;
	releaseDate: string;
	image: string;
	repositoryURL: string;
	presentationURL?: string;
	tagIds: string[];
  };
  
  export type TagJson = {
	id: string;
	name: string;
	url: string;
	image: string;
  };
  
  // Processed data structures (for components)
  export type TagItem = {
	id: string;
	name: string;
  };
  
  export type TagDetail = TagItem & {
	image: string | Picture;
	url: string;
  };
  
  export type ProjectItem = {
	id: string;
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
