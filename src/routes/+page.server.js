/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	const octaves = url.searchParams.get('octaves');
	const from = url.searchParams.get('from');

	return { octaves, from };
}
