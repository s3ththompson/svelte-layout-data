<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div>
	<h1>Settings</h1>
	<nav style="display: flex; gap: 1ch;">
		{#each data.menu as item (item.slug)}
			<a href="/settings/{item.slug}">{item.title}</a>
		{/each}
		<span>Rendered {new Date().toLocaleTimeString()}</span>
	</nav>
	<slot />
</div>
