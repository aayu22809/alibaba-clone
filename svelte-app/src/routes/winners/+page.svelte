<script lang="ts">
	import { base } from '$app/paths';

	function showProof() {
		alert(
			'PROOF LOADING...\n\n[Proof Document #847293]\n\nThis document proves that this person:\n• Won a real prize\n• Is a real person\n• Is not paid to say this\n• Definitely exists\n\nVERIFICATION: COMPLETE\n\nWant your own proof? Claim now!'
		);
	}
</script>

<svelte:head>
	<title>real winners - 100% PROOF!!!</title>
</svelte:head>

<div class="container">
	<h1>real winners - 100% verified proof</h1>

	<div class="stats-row">
		<div class="stat">
			<div class="stat-num">2,847,293</div>
			<div class="stat-label">total winners</div>
		</div>
		<div class="stat">
			<div class="stat-num">$50M+</div>
			<div class="stat-label">prizes given away</div>
		</div>
		<div class="stat">
			<div class="stat-num">100%</div>
			<div class="stat-label">satisfaction rate</div>
		</div>
		<div class="stat">
			<div class="stat-num">0</div>
			<div class="stat-label">complaints filed</div>
		</div>
	</div>

	<div class="winners-grid">
		<div class="winner-card featured">
			<div class="winner-avatar">j</div>
			<div class="winner-name">jennifer m.</div>
			<div class="winner-location">los angeles, california</div>
			<div class="winner-prize">won $5,000 gift card</div>
			<div class="winner-quote">
				"i couldn't believe it was real! i just clicked the button and won! this is definitely not
				fake! would i lie to you? no i would not. trust me."
			</div>
			<div class="winner-date">claimed 2 minutes ago</div>
			<div class="winner-proof">
				<button class="winner-proof-btn" onclick={showProof}>view proof</button>
				<button class="winner-proof-btn" onclick={showProof}>bank receipt</button>
			</div>
		</div>

		<div class="winner-card">
			<div class="winner-avatar">m</div>
			<div class="winner-name">michael t.</div>
			<div class="winner-location">houston, texas</div>
			<div class="winner-prize">won free iphone 15 pro</div>
			<div class="winner-quote">
				"my wife said it was a scam but look at me now! i have a free phone! she's still mad because
				she didn't claim hers. don't be like my wife!"
			</div>
			<div class="winner-date">claimed 5 minutes ago</div>
		</div>

		<div class="winner-card">
			<div class="winner-avatar">s</div>
			<div class="winner-name">sarah k.</div>
			<div class="winner-location">miami, florida</div>
			<div class="winner-prize">won $10,000 cash</div>
			<div class="winner-quote">
				"i was visitor number 1 million and i actually won! this website is 100% legit! i am a real
				person typing this real testimonial!"
			</div>
			<div class="winner-date">claimed 8 minutes ago</div>
		</div>

		<div class="winner-card">
			<div class="winner-avatar">d</div>
			<div class="winner-name">david r.</div>
			<div class="winner-location">seattle, washington</div>
			<div class="winner-prize">won mystery box worth $3,000</div>
			<div class="winner-quote">
				"just entered my credit card for the free shipping and got so much free stuff! my bank called
				asking about the charges but i told them it's fine!"
			</div>
			<div class="winner-date">claimed 12 minutes ago</div>
		</div>
	</div>

	<div class="rebuttal-section">
		<div class="rebuttal-header">
			<h3>addressing "scam" accusations (we're not a scam, promise!)</h3>
		</div>
		<div class="rebuttal-body">
			<div class="rebuttal-item">
				<div class="accusation">"This looks like a scam website"</div>
				<div class="response">
					Would a scam website have this section explaining why it's not a scam? Exactly. Case
					closed.
				</div>
			</div>
			<div class="rebuttal-item">
				<div class="accusation">"Why do you need my credit card for a FREE prize?"</div>
				<div class="response">
					We need to verify you're a real person and not a robot. Robots don't have credit cards.
					It's just for verification! We definitely won't charge you $99.99/month.
				</div>
			</div>
			<div class="rebuttal-item">
				<div class="accusation">"These testimonials look fake"</div>
				<div class="response">
					They have been verified by our internal verification team which consists of us. 100%
					authentic.
				</div>
			</div>
		</div>
	</div>

	<div class="cta-box">
		<h3>you could be our next winner!</h3>
		<p>
			thousands of people are claiming prizes right now. don't miss out! (this is your last chance!)
			(not clickbait!)
		</p>
		<a href="{base}/claim" class="cta-btn">claim your free prize now</a>
	</div>
</div>

<style>
	h1 {
		text-align: center;
		color: var(--scam-green);
		font-size: 2rem;
		text-transform: lowercase;
		margin: 30px 0;
		text-shadow: 0 0 20px var(--scam-green);
	}

	.stats-row {
		display: flex;
		justify-content: center;
		gap: 30px;
		flex-wrap: wrap;
		margin: 30px 0;
		padding: 20px;
		background: #0a0a0a;
		border: 2px solid var(--scam-green);
	}

	.stat {
		text-align: center;
	}

	.stat-num {
		font-size: 2.5rem;
		color: var(--scam-green);
		font-weight: bold;
	}

	.stat-label {
		color: var(--text-gray);
		font-size: 0.9rem;
		text-transform: lowercase;
	}

	.winners-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		margin: 30px 0;
	}

	.winner-card {
		background: linear-gradient(135deg, #0a1a0a, #000);
		border: 3px solid var(--scam-green);
		padding: 20px;
		position: relative;
	}

	.winner-card::before {
		content: 'verified';
		position: absolute;
		top: 10px;
		right: 10px;
		background: var(--scam-green);
		color: #000;
		padding: 3px 10px;
		font-size: 0.75rem;
		font-weight: bold;
	}

	.winner-card.featured {
		border-color: var(--scam-yellow);
		border-width: 4px;
	}

	.winner-card.featured::before {
		content: 'featured winner';
		background: var(--scam-yellow);
	}

	.winner-avatar {
		width: 70px;
		height: 70px;
		background: linear-gradient(135deg, #333, #111);
		border: 3px solid var(--scam-green);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.8rem;
		color: var(--scam-green);
		margin-bottom: 15px;
	}

	.winner-name {
		color: var(--scam-yellow);
		font-size: 1.2rem;
		font-weight: bold;
		text-transform: lowercase;
	}

	.winner-location {
		color: #666;
		font-size: 0.85rem;
		margin: 5px 0;
	}

	.winner-prize {
		color: var(--scam-green);
		font-size: 1.4rem;
		font-weight: bold;
		margin: 10px 0;
	}

	.winner-quote {
		color: #aaa;
		font-style: italic;
		font-size: 0.95rem;
		border-left: 3px solid var(--scam-green);
		padding-left: 15px;
		margin-top: 15px;
	}

	.winner-date {
		color: #555;
		font-size: 0.8rem;
		margin-top: 10px;
	}

	.winner-proof {
		display: flex;
		gap: 10px;
		margin-top: 15px;
	}

	.winner-proof-btn {
		padding: 8px 15px;
		background: #222;
		border: 1px solid var(--scam-green);
		color: var(--scam-green);
		font-size: 0.75rem;
		cursor: pointer;
	}

	.winner-proof-btn:hover {
		background: var(--scam-green);
		color: #000;
	}

	.rebuttal-section {
		background: linear-gradient(135deg, #1a0a0a, #000);
		border: 4px solid var(--scam-red);
		margin: 40px 0;
		overflow: hidden;
	}

	.rebuttal-header {
		background: var(--scam-red);
		padding: 15px;
		text-align: center;
	}

	.rebuttal-header h3 {
		color: #fff;
		text-transform: lowercase;
	}

	.rebuttal-body {
		padding: 25px;
	}

	.rebuttal-item {
		background: #111;
		border-left: 4px solid var(--scam-red);
		padding: 15px;
		margin: 15px 0;
	}

	.accusation {
		color: #ff6666;
		font-style: italic;
		margin-bottom: 10px;
	}

	.response {
		color: var(--scam-green);
		padding-left: 20px;
		border-left: 2px solid var(--scam-green);
	}

	.response::before {
		content: 'FACT: ';
		font-weight: bold;
	}

	.cta-box {
		background: linear-gradient(135deg, #1a1a00, #000);
		border: 4px solid var(--scam-yellow);
		padding: 30px;
		text-align: center;
		margin: 30px 0;
	}

	.cta-box h3 {
		color: var(--scam-yellow);
		font-size: 1.5rem;
		text-transform: lowercase;
		margin-bottom: 15px;
	}

	.cta-box p {
		color: var(--text-light-gray);
		margin-bottom: 20px;
	}

	.cta-btn {
		display: inline-block;
		padding: 20px 50px;
		background: linear-gradient(180deg, var(--scam-green), #009900);
		color: #000;
		text-decoration: none;
		font-weight: bold;
		font-size: 1.3rem;
		border: 3px solid #fff;
		text-transform: lowercase;
		animation: btnPulse 0.5s infinite;
	}
</style>

