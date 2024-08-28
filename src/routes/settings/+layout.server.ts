import type { LayoutServerLoad } from './$types';
import timers from 'timers/promises';

async function getMenuFromCMS() {
	await timers.setTimeout(1000);
	return [
		{ title: 'Account', slug: 'account' },
		{ title: 'Profile', slug: 'profile' },
		{ title: 'Billing', slug: 'billing' }
	];
}

export const load: LayoutServerLoad = async () => {
	return {
		menu: await getMenuFromCMS()
	};
};
