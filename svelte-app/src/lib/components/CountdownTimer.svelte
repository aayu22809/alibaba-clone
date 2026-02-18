<script lang="ts">
	import { onMount } from 'svelte';

	let { initialMinutes = 4, initialSeconds = 59 } = $props();

	let minutes = $state(initialMinutes);
	let seconds = $state(initialSeconds);

	onMount(() => {
		const interval = setInterval(() => {
			seconds--;
			if (seconds < 0) {
				seconds = 59;
				minutes--;
			}
			if (minutes < 0) {
				minutes = initialMinutes;
				seconds = initialSeconds;
			}
		}, 1000);

		return () => clearInterval(interval);
	});

	let formattedTime = $derived(
		`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
	);
</script>

<div class="countdown-box">
	<h2>HURRY!! THIS OFFER IS EXPIRE IN:</h2>
	<div class="countdown">{formattedTime}</div>
	<p>After timer reach zero, your prize will be give to next visitor!!</p>
</div>

<style>
	.countdown-box {
		background: var(--scam-red);
		border: 4px dashed var(--scam-yellow);
		padding: 25px;
		margin: 20px 0;
		text-align: center;
	}

	.countdown-box h2 {
		color: var(--scam-yellow);
		font-size: 1.3rem;
		text-transform: lowercase;
		margin-bottom: 15px;
	}

	.countdown {
		font-size: 3rem;
		font-weight: bold;
		color: #fff;
		font-family: monospace;
		text-shadow: 0 0 20px #fff;
	}

	.countdown-box p {
		color: #fff;
		font-size: 11px;
		margin-top: 10px;
	}
</style>

