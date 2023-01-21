import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		// destructure password from request formData
		const { password } = Object.fromEntries(await request.formData());

		// check if password does not match
		if (password !== '1234')
			return fail(404, { message: 'Incorrect password passed.  Use "1234".' });

		redirect(301, '/dashboard');
	}
};
