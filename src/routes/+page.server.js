export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const octaves = url.searchParams.get('octaves') || '3';
	const from = url.searchParams.get('from') || '3';

	return { octaves, from };
}
