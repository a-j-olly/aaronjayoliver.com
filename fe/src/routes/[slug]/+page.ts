import type { PageLoad } from './$types';
export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const slugName = decodeURI(params.slug).toLowerCase();
	return {
		slugName: slugName
	};
};
