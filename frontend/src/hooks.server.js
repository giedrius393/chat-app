/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const username = event.cookies.get('username');

	if (username) {
		event.locals.user = {
			name: username
		};
	}

	return resolve(event);
};
