<main>
	<nav style="display: flex; gap: 1ch;">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/settings">Settings</a>
		<span>Rendered {new Date().toLocaleTimeString()}</span>
	</nav>
	<slot />
</main>
