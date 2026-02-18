<script lang="ts">
	import { coins, gems, xp, level, spinsRemaining } from '$lib/stores/scamState';

	function claimDaily() {
		alert(
			'DAY 5 CLAIMED!\n\n$100 added to your account!\n\n*** STREAK BONUS: 5x MULTIPLIER ***\n\nCome back tomorrow for even BIGGER rewards!'
		);
	}

	function spinSlots() {
		alert('*** JACKPOT! YOU WON $5,000! ***\n\nClick Claim Now to receive your prize!');
	}

	function rollDice() {
		alert('DOUBLES! You won $300!\n\nClick Claim Now to add it to your account!');
	}
</script>

<svelte:head>
	<title>FREE GAMES - WIN BIG PRIZES!!!</title>
</svelte:head>

<div class="flash-bar">
	congratulations! you qualify for unlimited free games today only! win big prizes!
</div>

<div class="vip-bar">
	<div class="vip-level">
		<div class="vip-badge">VIP LEVEL {$level}</div>
		<div class="vip-progress">
			<div class="vip-progress-fill" style="width: 65%;"></div>
			<div class="vip-progress-text">{$xp.toLocaleString()} / 10,000 XP</div>
		</div>
	</div>
	<div class="vip-points">
		[COIN] {$coins.toLocaleString()} COINS | [GEM] {$gems} GEMS
	</div>
</div>

<div class="container">
	<h1>free games - everyone wins!</h1>

	<div class="daily-calendar">
		<h2>daily login rewards - claim every day!</h2>
		<div class="calendar-grid">
			<div class="calendar-day claimed"><div class="day-num">1</div><div class="day-reward">$10</div></div>
			<div class="calendar-day claimed"><div class="day-num">2</div><div class="day-reward">$25</div></div>
			<div class="calendar-day claimed"><div class="day-num">3</div><div class="day-reward">$50</div></div>
			<div class="calendar-day claimed"><div class="day-num">4</div><div class="day-reward">$75</div></div>
			<div class="calendar-day today" onclick={claimDaily}><div class="day-num">5</div><div class="day-reward">$100</div></div>
			<div class="calendar-day locked"><div class="day-num">6</div><div class="day-reward">$150</div></div>
			<div class="calendar-day locked"><div class="day-num">7</div><div class="day-reward">$500!</div></div>
		</div>
	</div>

	<div class="slot-section">
		<h2>mega jackpot slots</h2>
		<p style="color: #ccc;">Match 3 symbols to win! Every spin has a chance at the $10,000 JACKPOT!</p>

		<div class="slot-machine">
			<div class="slot-reel">7</div>
			<div class="slot-reel">7</div>
			<div class="slot-reel">$</div>
		</div>

		<button class="slot-btn" onclick={spinSlots}>SPIN!</button>
		<p style="color: #888; margin-top: 15px;">Spins remaining: <span style="color: #ffff00;">{$spinsRemaining}</span> | Get more spins with credit card verification!</p>
	</div>

	<div class="dice-section">
		<h2>lucky dice - roll to win!</h2>
		<p style="color: #ccc; margin-bottom: 10px;">Roll doubles to win instant prizes! Roll 6-6 for the MEGA JACKPOT!</p>

		<div class="dice-container">
			<div class="dice">6</div>
			<div class="dice">4</div>
		</div>

		<button class="dice-btn" onclick={rollDice}>roll the dice!</button>
	</div>

	<div class="daily-bonus">
		<h3>mega daily bonus!</h3>
		<p style="color: #fff;">you haven't claimed today's free bonus yet!</p>
		<button class="bonus-btn" onclick={() => alert('To withdraw your $100 credit, please provide your bank account details for "direct deposit".')}>claim $100 free credit</button>
	</div>
</div>

<style>
	.flash-bar {
		background: linear-gradient(90deg, var(--scam-magenta), var(--scam-cyan), var(--scam-yellow), var(--scam-magenta));
		background-size: 400% 100%;
		animation: gradientMove 2s linear infinite;
		padding: 12px;
		text-align: center;
		color: #000;
		font-weight: bold;
		text-transform: lowercase;
	}

	.vip-bar {
		background: linear-gradient(90deg, var(--scam-gold), #ffaa00);
		padding: 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 10px;
	}

	.vip-level {
		display: flex;
		align-items: center;
		gap: 10px;
		flex: 1;
		min-width: 300px;
	}

	.vip-badge {
		background: linear-gradient(135deg, #000, #333);
		color: var(--scam-gold);
		padding: 5px 15px;
		border: 2px solid var(--scam-gold);
		font-weight: bold;
		white-space: nowrap;
	}

	.vip-progress {
		flex: 1;
		background: #000;
		height: 20px;
		border: 2px solid var(--scam-gold);
		position: relative;
	}

	.vip-progress-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--scam-gold), #ffaa00);
		transition: width 0.5s;
	}

	.vip-progress-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 0.7rem;
		color: #fff;
		text-shadow: 1px 1px 2px #000;
	}

	.vip-points {
		color: #000;
		font-weight: bold;
	}

	h1 {
		text-align: center;
		color: var(--scam-cyan);
		font-size: 2rem;
		text-transform: lowercase;
		margin: 30px 0;
		text-shadow: 0 0 20px var(--scam-cyan);
	}

	.daily-calendar {
		background: linear-gradient(135deg, #1a0a1a, #000);
		border: 4px solid var(--scam-magenta);
		padding: 25px;
		margin: 30px 0;
	}

	.daily-calendar h2 {
		color: var(--scam-magenta);
		text-align: center;
		margin-bottom: 20px;
		text-transform: lowercase;
	}

	.calendar-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 10px;
	}

	.calendar-day {
		background: #111;
		border: 2px solid #333;
		padding: 15px 10px;
		text-align: center;
		cursor: pointer;
		transition: all 0.3s;
	}

	.calendar-day.claimed {
		background: var(--scam-green);
		border-color: var(--scam-green);
		color: #000;
	}

	.calendar-day.today {
		border-color: var(--scam-magenta);
		animation: todayPulse 1s infinite;
	}

	@keyframes todayPulse {
		0%, 100% { box-shadow: 0 0 10px var(--scam-magenta); }
		50% { box-shadow: 0 0 30px var(--scam-magenta); }
	}

	.calendar-day.locked {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.day-num {
		font-weight: bold;
		font-size: 1.2rem;
	}

	.day-reward {
		font-size: 0.7rem;
		color: var(--scam-yellow);
		margin-top: 5px;
	}

	.slot-section {
		background: linear-gradient(180deg, #2a0a3a, #1a0020);
		border: 4px solid var(--scam-magenta);
		border-radius: 15px;
		padding: 30px;
		margin: 30px 0;
		text-align: center;
	}

	.slot-section h2 {
		color: var(--scam-magenta);
		margin-bottom: 20px;
		text-transform: lowercase;
	}

	.slot-machine {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin: 20px 0;
	}

	.slot-reel {
		width: 80px;
		height: 100px;
		background: #000;
		border: 3px solid var(--scam-magenta);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		color: var(--scam-red);
	}

	.slot-btn {
		padding: 15px 50px;
		background: linear-gradient(180deg, var(--scam-magenta), #cc00cc);
		color: #fff;
		border: none;
		border-radius: 25px;
		font-size: 1.2rem;
		font-weight: bold;
		cursor: pointer;
		text-transform: lowercase;
	}

	.dice-section {
		background: linear-gradient(135deg, #0a1a0a, #000);
		border: 4px solid var(--scam-green);
		padding: 30px;
		margin: 30px 0;
		text-align: center;
	}

	.dice-section h2 {
		color: var(--scam-green);
		margin-bottom: 20px;
		text-transform: lowercase;
	}

	.dice-container {
		display: flex;
		justify-content: center;
		gap: 30px;
		margin: 30px 0;
	}

	.dice {
		width: 80px;
		height: 80px;
		background: #fff;
		border: 4px solid var(--scam-green);
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
		color: #000;
		font-weight: bold;
	}

	.dice-btn {
		padding: 15px 50px;
		font-size: 1.3rem;
		background: linear-gradient(180deg, var(--scam-green), #009900);
		color: #000;
		border: none;
		font-weight: bold;
		cursor: pointer;
		text-transform: lowercase;
	}

	.daily-bonus {
		background: var(--scam-red);
		border: 5px dashed var(--scam-yellow);
		padding: 30px;
		text-align: center;
		margin: 30px 0;
		animation: bonusShake 0.2s infinite;
	}

	@keyframes bonusShake {
		0%, 100% { transform: translateX(0); }
		25% { transform: translateX(-3px); }
		75% { transform: translateX(3px); }
	}

	.daily-bonus h3 {
		color: var(--scam-yellow);
		font-size: 1.8rem;
		text-transform: lowercase;
		margin-bottom: 15px;
	}

	.bonus-btn {
		padding: 20px 50px;
		font-size: 1.3rem;
		background: var(--scam-yellow);
		color: #000;
		border: none;
		font-weight: bold;
		cursor: pointer;
		text-transform: lowercase;
	}
</style>

