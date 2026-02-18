<script lang="ts">
	import { visitorNumber } from '$lib/stores/scamState';
	import { onMount } from 'svelte';

	onMount(() => {
		const interval = setInterval(() => {
			visitorNumber.update((n) => 1800000 + Math.floor(Math.random() * 100000));
		}, 5000);

		return () => clearInterval(interval);
	});
</script>

<div class="visitor-bar">
	you are visitor #{$visitorNumber.toLocaleString()} - claim your prize before it expires!
</div>

<style>
	.visitor-bar {
		background: linear-gradient(90deg, var(--scam-yellow), var(--scam-orange), var(--scam-yellow));
		background-size: 200% 100%;
		animation: gradientMove 2s linear infinite;
		padding: 10px;
		text-align: center;
		font-weight: bold;
		color: #000;
		font-size: 16px;
	}
</style>

