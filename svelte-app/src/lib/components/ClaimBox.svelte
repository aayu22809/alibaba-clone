<script lang="ts">
	let { title, description, oldPrice, newPrice, stock, onclick } = $props<{
		title: string;
		description: string;
		oldPrice: string;
		newPrice: string;
		stock: number;
		onclick: () => void;
	}>();
</script>

<div class="claim-box">
	<h3>{title}</h3>
	<p>{description}</p>
	<div class="old-price">{oldPrice}</div>
	<div class="new-price blink">{newPrice}</div>
	<button class="claim-btn" {onclick}>CLICK HERE CLAIM NOW</button>
	<p class="stock-warning">only {stock} remain in stock!!</p>
</div>

<style>
	.claim-box {
		background: linear-gradient(135deg, #1a0000, #000);
		border: 3px solid var(--scam-red);
		padding: 25px;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.claim-box::before {
		content: 'free';
		position: absolute;
		top: 10px;
		right: -25px;
		background: var(--scam-red);
		color: #fff;
		padding: 5px 30px;
		font-size: 0.8rem;
		font-weight: bold;
		transform: rotate(45deg);
	}

	.claim-box h3 {
		color: var(--scam-orange);
		font-size: 1.3rem;
		text-transform: lowercase;
		margin-bottom: 10px;
	}

	.claim-box p {
		color: #999;
		font-size: 0.95rem;
		margin-bottom: 15px;
	}

	.old-price {
		color: var(--scam-red);
		text-decoration: line-through;
		font-size: 1.5rem;
	}

	.new-price {
		color: var(--scam-green);
		font-size: 2.5rem;
		font-weight: bold;
		text-shadow: 0 0 20px var(--scam-green);
	}

	.claim-btn {
		display: block;
		width: 100%;
		padding: 15px;
		margin-top: 15px;
		background: linear-gradient(180deg, var(--scam-orange), #cc3300);
		color: #fff;
		border: none;
		font-size: 1.1rem;
		font-weight: bold;
		cursor: pointer;
		text-transform: lowercase;
	}

	.claim-btn:hover {
		background: linear-gradient(180deg, var(--scam-yellow), var(--scam-orange));
		color: #000;
	}

	.stock-warning {
		color: var(--scam-red);
		font-size: 0.85rem;
		margin-top: 10px;
		animation: blink 0.5s infinite;
	}
</style>

