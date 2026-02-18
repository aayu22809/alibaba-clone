<script lang="ts">
	let spinning = $state(false);
	let rotation = $state(0);
	let result = $state('');
	let showResult = $state(false);

	const prizes = [
		'you won $1,000 gift card! click claim now!',
		'you won free iphone 15! claim below!',
		'you won $500 cash! verify to receive!',
		'you won mystery prize worth $2,500!',
		'you won vip membership! claim now!'
	];

	function spin() {
		if (spinning) return;
		spinning = true;
		showResult = false;

		const newRotation = rotation + 1800 + Math.random() * 1800;
		rotation = newRotation;

		setTimeout(() => {
			result = prizes[Math.floor(Math.random() * prizes.length)];
			showResult = true;
			spinning = false;
		}, 4000);
	}
</script>

<div class="wheel-section">
	<h2>spin the wheel to reveal your prize!</h2>
	<p>every spin is a winner! 100% chance to win!</p>

	<div class="wheel-container">
		<div class="wheel-pointer"></div>
		<div class="wheel" style="transform: rotate({rotation}deg)"></div>
	</div>

	<button class="spin-btn" onclick={spin} disabled={spinning}>spin now - it's free!</button>

	{#if showResult}
		<div class="wheel-result">{result}</div>
	{/if}
</div>

<style>
	.wheel-section {
		background: linear-gradient(135deg, #1a1a00, #000);
		border: 4px solid var(--scam-yellow);
		padding: 40px 20px;
		margin: 30px 0;
		text-align: center;
	}

	.wheel-section h2 {
		color: var(--scam-yellow);
		font-size: 1.8rem;
		text-transform: lowercase;
		margin-bottom: 10px;
	}

	.wheel-section p {
		color: var(--text-light-gray);
		margin-bottom: 30px;
	}

	.wheel-container {
		position: relative;
		display: inline-block;
	}

	.wheel {
		width: 280px;
		height: 280px;
		border-radius: 50%;
		border: 8px solid #fff;
		background: conic-gradient(
			var(--scam-red) 0deg 45deg,
			var(--scam-green) 45deg 90deg,
			#0000ff 90deg 135deg,
			var(--scam-yellow) 135deg 180deg,
			var(--scam-magenta) 180deg 225deg,
			var(--scam-cyan) 225deg 270deg,
			var(--scam-orange) 270deg 315deg,
			#ffffff 315deg 360deg
		);
		transition: transform 4s cubic-bezier(0.17, 0.67, 0.05, 0.99);
		box-shadow: 0 0 40px #ffff0066;
	}

	.wheel-pointer {
		position: absolute;
		top: -20px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		border-top: 40px solid var(--scam-red);
		z-index: 10;
	}

	.spin-btn {
		margin-top: 30px;
		padding: 20px 60px;
		font-size: 1.5rem;
		font-weight: bold;
		background: linear-gradient(180deg, var(--scam-green), #009900);
		color: #000;
		border: 4px solid #fff;
		cursor: pointer;
		text-transform: lowercase;
		animation: btnPulse 0.5s infinite;
	}

	.spin-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.wheel-result {
		margin-top: 20px;
		padding: 15px;
		background: var(--scam-green);
		color: #000;
		font-weight: bold;
		font-size: 1.2rem;
		animation: resultFlash 0.5s infinite;
	}

	@keyframes resultFlash {
		0%,
		100% {
			background: var(--scam-green);
		}
		50% {
			background: var(--scam-yellow);
		}
	}
</style>

