<script lang="ts">
	import CountdownTimer from '$lib/components/CountdownTimer.svelte';
	import SpinWheel from '$lib/components/SpinWheel.svelte';
	import LiveFeed from '$lib/components/LiveFeed.svelte';
	import ClaimBox from '$lib/components/ClaimBox.svelte';
	import TrustBadges from '$lib/components/TrustBadges.svelte';
	import { base } from '$app/paths';

	function claimPrize() {
		alert(
			'CONGRADULATIONS!!!\n\nYou are about to claim you FREE prize!!\n\nPlease enter your credit card informations on next page to verify your identitiy and pay $0.00 shpping fee.\n\nYour personal datas is 100% secure and protect!!\n\nTHIS IS TOTALY NOT A SCAM WE PROMISE!!\n\nClick OK to continu...'
		);
		window.location.href = `${base}/claim`;
	}
</script>

<svelte:head>
	<title>congratulations!!! you have been selected!!!</title>
</svelte:head>

<div class="container">
	<div class="main-alert">
		<h1 class="blink-fast">CONGRADULATIONS!!! YOU HAVE WON!!!</h1>
		<p style="font-size:14px;">
			YOU HAVE BEEN RANDOM SELECTED TO RECIEVE A <span class="blink" style="color: #00ff00;"
				>FREE GIFT</span
			> WORTH $1,000+
		</p>
		<p style="color:#ff0;margin-top:10px;font-size:11px;">
			*** DO NOT CLOSE THIS WINDOW *** YOUR PRIZE WILL BE CANCEL ***
		</p>
	</div>

	<CountdownTimer />

	<SpinWheel />

	<LiveFeed />

	<div class="claim-section">
		<ClaimBox
			title="MYSTERY BOX #1"
			description="contain items worth UP TO $5,000!!"
			oldPrice="$499.99"
			newPrice="$0.00 FREE!!"
			stock={3}
			onclick={claimPrize}
		/>

		<ClaimBox
			title="EXCLUSIVE REWARD"
			description="GUARENTEED cash prize inside!!"
			oldPrice="$999.99"
			newPrice="$0.00 FREE!!"
			stock={1}
			onclick={claimPrize}
		/>

		<ClaimBox
			title="VIP GIFT CARD"
			description="redeemable at ANY store in world!!"
			oldPrice="$250.00"
			newPrice="$0.00 FREE!!"
			stock={2}
			onclick={claimPrize}
		/>
	</div>

	<TrustBadges />

	<div class="testimonials">
		<h3>[*] verified winner reviews [*]</h3>
		<div class="testimonial-grid">
			<div class="testimonial">
				<div class="testimonial-header">
					<div class="testimonial-avatar">M</div>
					<div>
						<div class="testimonial-name">mike t.</div>
						<div class="testimonial-verified">[VERIFIED WINNER]</div>
					</div>
				</div>
				<div class="testimonial-stars">*****</div>
				<p class="testimonial-text">
					"i thought it was fake but i actually got my $1000 gift card!! this is 100% legit!!!"
				</p>
			</div>

			<div class="testimonial">
				<div class="testimonial-header">
					<div class="testimonial-avatar">S</div>
					<div>
						<div class="testimonial-name">sarah k.</div>
						<div class="testimonial-verified">[VERIFIED WINNER]</div>
					</div>
				</div>
				<div class="testimonial-stars">*****</div>
				<p class="testimonial-text">
					"omg i won a free iphone!! just had to pay $2.99 shipping!! best deal ever!!"
				</p>
			</div>

			<div class="testimonial">
				<div class="testimonial-header">
					<div class="testimonial-avatar">J</div>
					<div>
						<div class="testimonial-name">james r.</div>
						<div class="testimonial-verified">[VERIFIED WINNER]</div>
					</div>
				</div>
				<div class="testimonial-stars">*****</div>
				<p class="testimonial-text">
					"my wife didn't believe me but now we're going on vacation with our prize money!!"
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.main-alert {
		background: linear-gradient(180deg, #001a00, #000);
		border: 5px solid var(--scam-green);
		padding: 30px;
		margin: 20px 0;
		text-align: center;
		animation: borderPulse 1s infinite;
	}

	.main-alert h1 {
		font-size: clamp(1.5rem, 5vw, 2.5rem);
		color: var(--scam-green);
		text-transform: lowercase;
		margin-bottom: 15px;
		animation: textPulse 0.5s infinite;
	}

	.main-alert p {
		color: var(--scam-yellow);
		font-size: 1.2rem;
	}

	.claim-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
		margin: 30px 0;
	}

	.testimonials {
		background: #0a0a0a;
		border: 3px solid var(--scam-yellow);
		padding: 25px;
		margin: 30px 0;
	}

	.testimonials h3 {
		color: var(--scam-yellow);
		text-align: center;
		margin-bottom: 20px;
		text-transform: lowercase;
	}

	.testimonial-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 15px;
	}

	.testimonial {
		background: #111;
		border: 2px solid #333;
		padding: 15px;
		border-radius: 8px;
	}

	.testimonial-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}

	.testimonial-avatar {
		width: 40px;
		height: 40px;
		background: linear-gradient(135deg, var(--scam-orange), var(--scam-red));
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-weight: bold;
	}

	.testimonial-name {
		color: var(--scam-green);
		font-weight: bold;
	}

	.testimonial-verified {
		color: var(--scam-green);
		font-size: 0.75rem;
	}

	.testimonial-stars {
		color: var(--scam-yellow);
		letter-spacing: 2px;
	}

	.testimonial-text {
		color: var(--text-light-gray);
		font-size: 0.9rem;
		font-style: italic;
	}
</style>
