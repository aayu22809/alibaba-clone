<script lang="ts">
	import CountdownTimer from '$lib/components/CountdownTimer.svelte';

	let currentStep = $state(1);

	function nextStep(step: number) {
		currentStep = step;
		window.scrollTo(0, 0);
	}

	function prevStep(step: number) {
		currentStep = step;
		window.scrollTo(0, 0);
	}

	function submitClaim() {
		alert(
			'PROCESSING YOUR CLAIM...\n\n• Verifying personal information... [OK]\n• Validating shipping address... [OK]\n• Processing payment... [ERROR]\n\nYour card was declined!\n\nThis is probably because your bank flagged this as suspicious.\n\nPlease try a different card or call your bank.'
		);
	}
</script>

<svelte:head>
	<title>CLAIM YOUR PRIZE - FINAL STEP!!!</title>
</svelte:head>

<div class="mega-bar">
	final step! complete this form to receive your free prize! hurry - 3 spots left!
</div>

<div class="container">
	<h1>claim your prize - final step!</h1>

	<div class="step-progress">
		<div class="step" class:active={currentStep === 1} class:completed={currentStep > 1}>
			<div class="step-circle">1</div>
			<div class="step-label">personal info</div>
		</div>
		<div class="step" class:active={currentStep === 2} class:completed={currentStep > 2}>
			<div class="step-circle">2</div>
			<div class="step-label">shipping</div>
		</div>
		<div class="step" class:active={currentStep === 3} class:completed={currentStep > 3}>
			<div class="step-circle">3</div>
			<div class="step-label">verification</div>
		</div>
		<div class="step" class:active={currentStep === 4}>
			<div class="step-circle">4</div>
			<div class="step-label">confirm</div>
		</div>
	</div>

	<CountdownTimer initialMinutes={2} initialSeconds={59} />

	<div class="prize-summary">
		<h3>your prizes waiting to be claimed:</h3>
		<div class="prize-item">
			<span class="name">iPhone 15 Pro Max</span>
			<span class="value">$1,199.00</span>
		</div>
		<div class="prize-item">
			<span class="name">$500 Amazon Gift Card</span>
			<span class="value">$500.00</span>
		</div>
		<div class="prize-item">
			<span class="name">Mystery Box Bonus</span>
			<span class="value">$250.00</span>
		</div>
		<div class="prize-total">
			<span class="name">TOTAL VALUE:</span>
			<span class="value">$2,049.00</span>
		</div>
	</div>

	<form
		class="claim-form"
		onsubmit={(e) => {
			e.preventDefault();
			submitClaim();
		}}
	>
		{#if currentStep === 1}
			<div class="form-step active">
				<h3 class="form-header">step 1: personal information</h3>

				<div class="form-group">
					<label>full legal name <span class="required">*</span></label>
					<input type="text" placeholder="enter your full name" required />
				</div>

				<div class="form-group">
					<label>email address <span class="required">*</span></label>
					<input type="email" placeholder="enter your email" required />
				</div>

				<div class="form-group">
					<label>phone number <span class="required">*</span></label>
					<input type="tel" placeholder="enter your phone number" required />
				</div>

				<div class="security-note">
					[LOCK] your information is encrypted with 256-bit ssl security
				</div>

				<button type="button" class="next-btn" onclick={() => nextStep(2)}>
					continue to shipping >>
				</button>
			</div>
		{/if}

		{#if currentStep === 2}
			<div class="form-step active">
				<h3 class="form-header">step 2: shipping address</h3>

				<div class="form-group">
					<label>street address <span class="required">*</span></label>
					<input type="text" placeholder="enter your street address" required />
				</div>

				<div class="form-row">
					<div class="form-group">
						<label>city <span class="required">*</span></label>
						<input type="text" placeholder="city" required />
					</div>
					<div class="form-group">
						<label>state <span class="required">*</span></label>
						<input type="text" placeholder="state" required />
					</div>
				</div>

				<button type="button" class="prev-btn" onclick={() => prevStep(1)}>&lt;&lt; back</button>
				<button type="button" class="next-btn" onclick={() => nextStep(3)}>
					continue to verification >>
				</button>
			</div>
		{/if}

		{#if currentStep === 3}
			<div class="form-step active">
				<h3 class="form-header">step 3: payment verification</h3>
				<p style="color: #ffff00; text-align: center; margin-bottom: 20px;">
					Credit card required for $0.00 verification charge only!
				</p>

				<div class="form-group">
					<label>card number <span class="required">*</span></label>
					<input type="text" placeholder="1234 5678 9012 3456" required />
				</div>

				<div class="form-row">
					<div class="form-group">
						<label>expiration <span class="required">*</span></label>
						<input type="text" placeholder="MM/YY" required />
					</div>
					<div class="form-group">
						<label>cvv <span class="required">*</span></label>
						<input type="text" placeholder="123" required />
					</div>
				</div>

				<button type="button" class="prev-btn" onclick={() => prevStep(2)}>&lt;&lt; back</button>
				<button type="button" class="next-btn" onclick={() => nextStep(4)}>
					continue to confirm >>
				</button>
			</div>
		{/if}

		{#if currentStep === 4}
			<div class="form-step active">
				<h3 class="form-header">step 4: confirm your claim</h3>

				<div class="fees-section">
					<h4>order summary:</h4>
					<div class="fee-item">
						<span class="name">Prize Value</span>
						<span class="value" style="color: #00ff00;">$2,049.00</span>
					</div>
					<div class="fee-item">
						<span class="name">Your Price</span>
						<span class="value" style="color: #00ff00;">$0.00</span>
					</div>
					<div class="fee-item">
						<span class="name">Shipping & Handling</span>
						<span class="value">$22.97</span>
					</div>
					<div class="fee-item">
						<span class="name">Processing Fees</span>
						<span class="value">$44.97</span>
					</div>
					<div class="fee-item">
						<span class="name">Service Charges</span>
						<span class="value">$31.98</span>
					</div>
					<div class="fee-total">
						<span class="name">TOTAL DUE TODAY:</span>
						<span class="value">$99.92</span>
					</div>
				</div>

				<p style="color: #888; font-size: 0.75rem; text-align: center; margin: 15px 0;">
					By clicking "Submit", you agree to be charged $99.92 today, plus $99.99/month subscription
					fee starting in 3 days.
				</p>

				<button type="button" class="prev-btn" onclick={() => prevStep(3)}>&lt;&lt; back</button>
				<button type="submit" class="submit-btn">submit claim & pay $99.92</button>
			</div>
		{/if}
	</form>

	<div class="fine-print">
		terms and conditions: by submitting this form you agree to pay $99.92 processing fee plus
		$99.99/month subscription fee after 3-day trial period. all sales final. no refunds under any
		circumstances. this is definitely not a scam. would a scam website explicitly say "this is not a
		scam"? exactly. therefore this is legitimate.
	</div>
</div>

<style>
	.mega-bar {
		background: var(--scam-red);
		padding: 15px;
		text-align: center;
		font-weight: bold;
		text-transform: lowercase;
		animation: flashBg 0.3s infinite;
	}

	h1 {
		text-align: center;
		color: var(--scam-red);
		font-size: 2rem;
		text-transform: lowercase;
		margin: 30px 0;
		text-shadow: 0 0 20px var(--scam-red);
		animation: textPulse 0.5s infinite;
	}

	.step-progress {
		display: flex;
		justify-content: space-between;
		margin: 30px 0;
		position: relative;
	}

	.step-progress::before {
		content: '';
		position: absolute;
		top: 20px;
		left: 10%;
		right: 10%;
		height: 4px;
		background: #333;
	}

	.step {
		text-align: center;
		position: relative;
		z-index: 1;
	}

	.step-circle {
		width: 40px;
		height: 40px;
		background: #333;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 10px;
		font-weight: bold;
		border: 3px solid #333;
	}

	.step.active .step-circle,
	.step.completed .step-circle {
		background: var(--scam-green);
		border-color: var(--scam-green);
		color: #000;
	}

	.step-label {
		font-size: 0.8rem;
		color: #666;
	}

	.step.active .step-label {
		color: var(--scam-green);
	}

	.prize-summary {
		background: #0a0a0a;
		border: 3px solid var(--scam-green);
		padding: 20px;
		margin: 20px 0;
	}

	.prize-summary h3 {
		color: var(--scam-green);
		margin-bottom: 15px;
		text-transform: lowercase;
	}

	.prize-item {
		display: flex;
		justify-content: space-between;
		padding: 10px 0;
		border-bottom: 1px solid #222;
	}

	.prize-item .name {
		color: #fff;
	}

	.prize-item .value {
		color: var(--scam-green);
		font-weight: bold;
	}

	.prize-total {
		display: flex;
		justify-content: space-between;
		padding: 15px 0;
		font-size: 1.3rem;
		border-top: 2px solid var(--scam-green);
		margin-top: 10px;
	}

	.prize-total .name {
		color: var(--scam-yellow);
	}

	.prize-total .value {
		color: var(--scam-green);
		font-weight: bold;
		font-size: 1.5rem;
	}

	.claim-form {
		background: linear-gradient(135deg, #0a0a0a, #000);
		border: 4px solid var(--scam-green);
		padding: 30px;
		margin: 30px 0;
	}

	.form-header {
		color: var(--scam-green);
		text-transform: lowercase;
		font-size: 1.3rem;
		margin-bottom: 25px;
		text-align: center;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-group label {
		display: block;
		color: #aaa;
		margin-bottom: 8px;
		text-transform: lowercase;
	}

	.form-group input,
	.form-group select {
		width: 100%;
		padding: 15px;
		background: #111;
		border: 2px solid #333;
		color: #fff;
		font-size: 1rem;
	}

	.form-group input:focus,
	.form-group select:focus {
		border-color: var(--scam-green);
		outline: none;
	}

	.required {
		color: var(--scam-red);
	}

	.form-row {
		display: flex;
		gap: 15px;
	}

	.form-row .form-group {
		flex: 1;
	}

	.security-note {
		background: #001a00;
		border: 2px solid var(--scam-green);
		padding: 15px;
		margin: 20px 0;
		font-size: 0.9rem;
		color: var(--scam-green);
		text-transform: lowercase;
	}

	.next-btn,
	.prev-btn {
		padding: 20px 40px;
		font-size: 1.2rem;
		font-weight: bold;
		border: none;
		cursor: pointer;
		text-transform: lowercase;
		margin: 5px;
	}

	.next-btn {
		background: linear-gradient(180deg, var(--scam-green), #009900);
		color: #000;
		animation: btnPulse 0.3s infinite;
	}

	.prev-btn {
		background: #333;
		color: var(--text-gray);
		font-size: 0.8rem;
		padding: 10px 20px;
	}

	.submit-btn {
		width: 100%;
		padding: 25px;
		font-size: 1.5rem;
		font-weight: bold;
		background: linear-gradient(180deg, var(--scam-green), #009900);
		color: #000;
		border: 4px solid #fff;
		cursor: pointer;
		text-transform: lowercase;
		animation: btnPulse 0.3s infinite;
	}

	.fees-section {
		background: #111;
		border: 2px solid #333;
		padding: 15px;
		margin: 20px 0;
		font-size: 0.85rem;
	}

	.fees-section h4 {
		color: var(--text-gray);
		margin-bottom: 10px;
		text-transform: lowercase;
	}

	.fee-item {
		display: flex;
		justify-content: space-between;
		padding: 8px 0;
		border-bottom: 1px solid #222;
	}

	.fee-item .name {
		color: var(--text-gray);
	}

	.fee-item .value {
		color: var(--text-gray);
	}

	.fee-total {
		display: flex;
		justify-content: space-between;
		padding: 10px 0;
		font-weight: bold;
		margin-top: 10px;
		border-top: 2px solid var(--scam-red);
	}

	.fee-total .name {
		color: var(--scam-red);
	}

	.fee-total .value {
		color: var(--scam-red);
	}

	.fine-print {
		margin-top: 30px;
		padding: 15px;
		background: #0a0a0a;
		border: 1px solid #222;
		font-size: 0.55rem;
		color: #333;
		line-height: 1.6;
		text-transform: lowercase;
	}
</style>

