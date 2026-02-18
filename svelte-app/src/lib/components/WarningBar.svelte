<script lang="ts">
	let message = $state('warning: your device has been selected for a special reward! do not close this page!');
</script>

<div class="warning-bar">
	<span class="blink">warning:</span> {message}
</div>

<style>
	.warning-bar {
		background: var(--scam-red);
		padding: 8px;
		text-align: center;
		font-size: 14px;
		color: #fff;
		font-weight: bold;
		text-transform: lowercase;
		animation: flashBg 0.5s infinite;
	}
</style>

