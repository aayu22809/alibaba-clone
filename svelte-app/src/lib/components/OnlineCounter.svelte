<script lang="ts">
	import { onlineCount } from '$lib/stores/scamState';
	import { onMount } from 'svelte';

	onMount(() => {
		const interval = setInterval(() => {
			onlineCount.update(() => 2500 + Math.floor(Math.random() * 1000));
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<div class="online-count">
	<span>{$onlineCount.toLocaleString()}</span> people viewing now
</div>

<style>
	.online-count {
		position: fixed;
		top: 80px;
		right: 20px;
		background: var(--scam-red);
		color: #fff;
		padding: 10px 15px;
		font-size: 0.9rem;
		z-index: 100;
		animation: countPulse 1s infinite;
	}

	@keyframes countPulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}
</style>

