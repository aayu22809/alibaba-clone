<script lang="ts">
	import { onMount } from 'svelte';
	import { randomName, randomAction } from '$lib/stores/scamState';

	interface FeedItem {
		id: number;
		name: string;
		action: string;
		time: number;
	}

	let items = $state<FeedItem[]>([]);
	let nextId = 0;

	function addFeedItem() {
		const newItem: FeedItem = {
			id: nextId++,
			name: randomName(),
			action: randomAction(),
			time: Math.floor(Math.random() * 30) + 1
		};

		items = [newItem, ...items.slice(0, 7)];
	}

	onMount(() => {
		// Add initial items
		for (let i = 0; i < 5; i++) {
			setTimeout(() => addFeedItem(), i * 200);
		}

		// Add new items continuously
		const interval = setInterval(addFeedItem, 2000);

		return () => clearInterval(interval);
	});
</script>

<div class="live-feed">
	<h3>live activity - real winners right now:</h3>
	<div class="feed-container">
		{#each items as item (item.id)}
			<div class="feed-item">
				<span class="name">{item.name}</span>
				<span class="action">{item.action}</span>
				<span class="time">{item.time}s ago</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.live-feed {
		background: #111;
		border: 3px solid var(--scam-green);
		padding: 15px;
		margin: 20px 0;
		max-height: 200px;
		overflow: hidden;
	}

	.live-feed h3 {
		color: var(--scam-green);
		font-size: 1rem;
		margin-bottom: 10px;
		text-transform: lowercase;
	}

	.feed-item {
		padding: 8px 10px;
		margin: 5px 0;
		background: #0a0a0a;
		border-left: 3px solid var(--scam-green);
		color: var(--text-light-gray);
		font-size: 0.9rem;
		animation: slideIn 0.5s ease-out;
	}

	.feed-item .name {
		color: var(--scam-yellow);
		font-weight: bold;
	}

	.feed-item .action {
		color: var(--scam-green);
	}

	.feed-item .time {
		color: #666;
		font-size: 0.8rem;
		margin-left: 8px;
	}
</style>

