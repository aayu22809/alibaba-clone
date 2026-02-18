<script lang="ts">
	function addToCart(item: string) {
		alert(`${item} added to cart!\n\nYour prize has been reserved!\n\nCart items expire in 5 minutes!`);
	}
</script>

<svelte:head>
	<title>available prizes - CLAIM BEFORE GONE!!!</title>
</svelte:head>

<div class="container">
	<h1>exclusive prizes - all 100% free (just pay shipping*)</h1>

	<div class="countdown-banner">
		<h3>flash sale ends in:</h3>
		<div class="time">02:59:59</div>
		<p style="color: #fff; font-size: 0.8rem; margin-top: 10px;">
			After timer ends, all prizes return to FULL PRICE!
		</p>
	</div>

	<div class="prizes-grid">
		<div class="prize-card featured">
			<div class="prize-image">[📱]</div>
			<div class="prize-content">
				<h3 class="prize-title">brand new iphone 15 pro max</h3>
				<div class="prize-rating">★★★★★ (4,847 reviews)</div>
				<div class="prize-value">
					<span class="original-price">MSRP: $1,399</span>
					<span class="old-price">$1,199.00</span>
					<span class="new-price">$0.00</span>
					<span class="discount-percent">-100%</span>
				</div>
				<p class="prize-stock">only 2 left in stock!</p>
				<div class="stock-bar"><div class="stock-fill" style="width: 15%;"></div></div>
				<button class="prize-btn" onclick={() => addToCart('iPhone 15 Pro')}>
					claim now - free
				</button>
			</div>
		</div>

		<div class="prize-card">
			<div class="prize-image">[💳]</div>
			<div class="prize-content">
				<h3 class="prize-title">$500 amazon gift card</h3>
				<div class="prize-rating">★★★★★ (2,103 reviews)</div>
				<div class="prize-value">
					<span class="old-price">$500.00</span>
					<span class="new-price">$0.00</span>
					<span class="discount-percent">-100%</span>
				</div>
				<p class="prize-stock">only 5 left!</p>
				<div class="stock-bar"><div class="stock-fill" style="width: 35%;"></div></div>
				<button class="prize-btn" onclick={() => addToCart('$500 Gift Card')}>
					claim now - free
				</button>
			</div>
		</div>

		<div class="prize-card">
			<div class="prize-image">[💵]</div>
			<div class="prize-content">
				<h3 class="prize-title">$1,000 cash prize</h3>
				<div class="prize-rating">★★★★★ (5,892 reviews)</div>
				<div class="prize-value">
					<span class="old-price">$1,000.00</span>
					<span class="new-price">$0.00</span>
					<span class="discount-percent">-100%</span>
				</div>
				<p class="prize-stock">only 1 left!</p>
				<div class="stock-bar"><div class="stock-fill" style="width: 5%;"></div></div>
				<button class="prize-btn" onclick={() => addToCart('$1,000 Cash')}>claim now - free</button>
			</div>
		</div>

		<div class="prize-card">
			<div class="prize-image">[📦]</div>
			<div class="prize-content">
				<h3 class="prize-title">mystery box worth $2,500+</h3>
				<div class="prize-rating">★★★★★ (1,234 reviews)</div>
				<div class="prize-value">
					<span class="old-price">$2,500.00</span>
					<span class="new-price">$0.00</span>
					<span class="discount-percent">-100%</span>
				</div>
				<p class="prize-stock">only 3 left!</p>
				<div class="stock-bar"><div class="stock-fill" style="width: 20%;"></div></div>
				<button class="prize-btn" onclick={() => addToCart('Mystery Box')}>claim now - free</button>
			</div>
		</div>
	</div>

	<p style="text-align: center; color: #444; font-size: 0.5rem; margin-top: 10px;">
		*shipping is $49.99 **fees are clearly hidden in fine print ***instant means 6-8 weeks
		****guarantee void in all 50 states
	</p>
</div>

<style>
	h1 {
		text-align: center;
		color: var(--scam-yellow);
		font-size: 2rem;
		text-transform: lowercase;
		margin: 30px 0;
		text-shadow: 0 0 20px var(--scam-yellow);
	}

	.countdown-banner {
		background: linear-gradient(90deg, var(--scam-red), var(--scam-orange), var(--scam-red));
		background-size: 200% 100%;
		animation: gradientMove 2s linear infinite;
		padding: 20px;
		text-align: center;
		margin: 30px 0;
	}

	.countdown-banner h3 {
		color: #fff;
		text-transform: lowercase;
		margin-bottom: 10px;
	}

	.countdown-banner .time {
		font-size: 2rem;
		color: var(--scam-yellow);
		font-family: monospace;
		font-weight: bold;
	}

	.prizes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 25px;
		margin: 30px 0;
	}

	.prize-card {
		background: linear-gradient(135deg, #1a1a0a, #000);
		border: 3px solid var(--scam-yellow);
		overflow: hidden;
		position: relative;
		transition: all 0.3s;
	}

	.prize-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 40px #ffff0044;
	}

	.prize-card.featured {
		border-color: var(--scam-green);
		border-width: 5px;
		grid-column: span 2;
	}

	.prize-image {
		height: 180px;
		background: linear-gradient(135deg, #222, #111);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 60px;
		color: var(--scam-yellow);
		border-bottom: 2px solid var(--scam-yellow);
	}

	.prize-content {
		padding: 20px;
	}

	.prize-title {
		color: var(--scam-yellow);
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: lowercase;
		margin-bottom: 10px;
	}

	.prize-rating {
		color: #ffaa00;
		font-size: 0.9rem;
		margin-bottom: 10px;
	}

	.prize-value {
		display: flex;
		align-items: center;
		gap: 15px;
		margin: 15px 0;
		flex-wrap: wrap;
	}

	.original-price {
		color: var(--text-gray);
		text-decoration: line-through;
		font-size: 0.9rem;
	}

	.old-price {
		color: var(--scam-red);
		text-decoration: line-through;
		font-size: 1.2rem;
	}

	.new-price {
		color: var(--scam-green);
		font-size: 2rem;
		font-weight: bold;
	}

	.discount-percent {
		background: var(--scam-red);
		color: #fff;
		padding: 3px 8px;
		font-size: 0.8rem;
		font-weight: bold;
	}

	.prize-stock {
		color: var(--scam-red);
		font-size: 0.85rem;
		margin: 10px 0;
		animation: blink 0.5s infinite;
	}

	.stock-bar {
		background: #333;
		height: 8px;
		border-radius: 4px;
		margin: 10px 0;
		overflow: hidden;
	}

	.stock-fill {
		background: linear-gradient(90deg, var(--scam-red), var(--scam-orange));
		height: 100%;
		transition: width 0.5s;
	}

	.prize-btn {
		display: block;
		width: 100%;
		padding: 15px;
		background: linear-gradient(180deg, var(--scam-yellow), #cc9900);
		color: #000;
		border: none;
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		text-transform: lowercase;
		position: relative;
		overflow: hidden;
	}

	.prize-btn::after {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
		animation: btnShine 2s infinite;
	}

	@keyframes btnShine {
		0% {
			left: -100%;
		}
		100% {
			left: 100%;
		}
	}

	.prize-btn:hover {
		background: linear-gradient(180deg, var(--scam-green), #009900);
	}

	@media (max-width: 700px) {
		.prize-card.featured {
			grid-column: span 1;
		}
	}
</style>

