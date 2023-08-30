import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
	if (locals?.user) {
		throw redirect(302, '/chat');
	}
};

/** @type {import('./$types').Actions} */
export const actions = {
	addUser: async ({ cookies, request }) => {
		const data = await request.formData();
		const name = data.get('name');

		if (typeof name !== 'string') {
			return fail(400, { invalid: true });
		}

		cookies.set('username', name);
		throw redirect(302, '/chat');
	}
};
