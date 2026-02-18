<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<nav>
	<a href="{base}/" class:active={$page.url.pathname === `${base}/`}>home</a>
	<a href="{base}/winners" class:active={$page.url.pathname === `${base}/winners`}>winners</a>
	<a href="{base}/prizes" class:active={$page.url.pathname === `${base}/prizes`}>prizes</a>
	<a href="{base}/games" class:active={$page.url.pathname === `${base}/games`}>free gifts</a>
	<a href="{base}/claim" class:active={$page.url.pathname === `${base}/claim`}>claim now</a>
</nav>

<style>
	nav {
		display: flex;
		justify-content: center;
		gap: 10px;
		padding: 15px;
		background: #111;
		flex-wrap: wrap;
	}

	nav a {
		padding: 12px 25px;
		background: linear-gradient(180deg, #333, #111);
		color: var(--scam-green);
		text-decoration: none;
		border: 2px solid var(--scam-green);
		font-weight: bold;
		text-transform: lowercase;
		transition: all 0.2s;
	}

	nav a:hover,
	nav a.active {
		background: var(--scam-green);
		color: #000;
	}
</style>

