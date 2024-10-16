export function load() {
	// load all tags and projects

	return {
		pageTitle: 'Portfolio',
		tagData: [
			{ id: 1, name: 'JavaScript' },
			{ id: 2, name: 'Angular' },
			{ id: 3, name: 'Svelte' },
			{ id: 4, name: 'Nodejs' },
			{ id: 5, name: 'Python' },
			{ id: 6, name: 'React' },
			{ id: 7, name: 'AWS' },
			{ id: 8, name: 'Azure' },
			{ id: 9, name: 'C#' },
			{ id: 10, name: 'Serverless' },
			{ id: 11, name: 'Terraform' }
		],
		projectData: [
			{ name: 'Project 1', presentationURL: 'https://picsum.photos/id/1/640/360' },
			{ name: 'Project 2', presentationURL: 'https://picsum.photos/id/2/640/360' },
			{ name: 'Project 3', presentationURL: 'https://picsum.photos/id/3/640/360' },
			{ name: 'Project 4', presentationURL: 'https://picsum.photos/id/4/640/360' },
			{ name: 'Project 5', presentationURL: 'https://picsum.photos/id/5/640/360' },
			{ name: 'Project 6', presentationURL: 'https://picsum.photos/id/6/640/360' },
			{ name: 'Project 7', presentationURL: 'https://picsum.photos/id/7/640/360' },
			{ name: 'Project 8', presentationURL: 'https://picsum.photos/id/8/640/360' }
		]
	};
}
