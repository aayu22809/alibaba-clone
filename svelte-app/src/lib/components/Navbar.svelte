<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/" class:active={$page.url.pathname === '/'}>home</a>
	<a href="/winners" class:active={$page.url.pathname === '/winners'}>winners</a>
	<a href="/prizes" class:active={$page.url.pathname === '/prizes'}>prizes</a>
	<a href="/games" class:active={$page.url.pathname === '/games'}>free gifts</a>
	<a href="/claim" class:active={$page.url.pathname === '/claim'}>claim now</a>
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

