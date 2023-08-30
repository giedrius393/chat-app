import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
	if (!locals?.user) {
		throw redirect(302, '/');
	}
};
