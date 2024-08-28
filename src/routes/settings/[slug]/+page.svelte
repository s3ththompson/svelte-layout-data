<script>
	import { page } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	$: title = data.menu.find((item) => item.slug === $page.params.slug)?.title;
</script>

<h2>{title}</h2>
