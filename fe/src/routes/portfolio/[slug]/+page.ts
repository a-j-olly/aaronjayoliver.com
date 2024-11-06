import type { PageLoad } from './$types';
export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const projectName = decodeURI(params.slug);
	return {
		pageTitle: projectName
	};
};
