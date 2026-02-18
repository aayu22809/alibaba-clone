<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import WarningBar from '$lib/components/WarningBar.svelte';
	import VisitorBar from '$lib/components/VisitorBar.svelte';
	import OnlineCounter from '$lib/components/OnlineCounter.svelte';
	import BottomBar from '$lib/components/BottomBar.svelte';
	import ChatWidget from '$lib/components/ChatWidget.svelte';

	let { children } = $props();
</script>

<div class="bg"></div>

<WarningBar />
<VisitorBar />
<Navbar />
<OnlineCounter />

<main>
	{@render children()}
</main>

<BottomBar />
<ChatWidget />

<style>
	main {
		position: relative;
		min-height: 100vh;
		padding-bottom: 80px;
	}
</style>

