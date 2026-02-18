<script lang="ts">
	import { onMount } from 'svelte';

	let showSecondMessage = $state(false);
	let typingVisible = $state(false);

	onMount(() => {
		const timer1 = setTimeout(() => {
			typingVisible = true;
		}, 5000);

		const timer2 = setTimeout(() => {
			typingVisible = false;
			showSecondMessage = true;
		}, 8000);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	});
</script>

<div class="chat-widget">
	<div class="chat-header">
		<div class="status">prize support</div>
		<span style="color: #000;">online</span>
	</div>
	<div class="chat-body">
		<div class="chat-message agent">
			hi there! i see you've been selected to win! do you need help claiming your prize?
		</div>
		{#if showSecondMessage}
			<div class="chat-message agent">
				just click any "claim now" button and follow the simple steps! it only takes 30 seconds!
			</div>
		{/if}
		{#if typingVisible}
			<div class="chat-typing">
				agent is typing<span>.</span><span>.</span><span>.</span>
			</div>
		{/if}
	</div>
</div>

<style>
	.chat-widget {
		position: fixed;
		bottom: 100px;
		right: 20px;
		width: 300px;
		background: linear-gradient(180deg, #1a3300, #0a1a00);
		border: 3px solid var(--scam-green);
		border-radius: 10px;
		z-index: 1500;
		box-shadow: 0 0 30px #00ff0044;
		animation: chatBounce 2s infinite;
	}

	@keyframes chatBounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-5px);
		}
	}

	.chat-header {
		background: var(--scam-green);
		color: #000;
		padding: 12px;
		font-weight: bold;
		border-radius: 7px 7px 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.chat-header .status {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.chat-header .status::before {
		content: '';
		width: 10px;
		height: 10px;
		background: var(--scam-green);
		border-radius: 50%;
		animation: pulse 1s infinite;
		box-shadow: 0 0 10px var(--scam-green);
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.chat-body {
		padding: 15px;
		max-height: 200px;
	}

	.chat-message {
		background: #0a0a0a;
		padding: 10px;
		border-radius: 8px;
		margin-bottom: 10px;
		color: var(--text-light-gray);
		font-size: 0.9rem;
	}

	.chat-message.agent {
		border-left: 3px solid var(--scam-green);
	}

	.chat-typing {
		color: var(--scam-green);
		font-size: 0.85rem;
		padding: 5px 0;
	}

	.chat-typing span {
		animation: typingDot 1.4s infinite;
	}

	.chat-typing span:nth-child(2) {
		animation-delay: 0.2s;
	}
	.chat-typing span:nth-child(3) {
		animation-delay: 0.4s;
	}

	@keyframes typingDot {
		0%,
		60%,
		100% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
	}

	@media (max-width: 600px) {
		.chat-widget {
			display: none;
		}
	}
</style>

