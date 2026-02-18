import { writable, derived } from 'svelte/store';

// Global scam site state
export const onlineCount = writable(2847);
export const visitorNumber = writable(1847293);
export const slotsRemaining = writable(7);
export const claimsInLastHour = writable(47);

// Games page state
export const coins = writable(12500);
export const gems = writable(47);
export const xp = writable(6500);
export const level = writable(3);
export const spinsRemaining = writable(3);

// Derived values
export const vipProgress = derived(xp, ($xp) => {
	const maxXP = 10000;
	return (($xp % maxXP) / maxXP) * 100;
});

// Fake names and cities for live feeds
export const fakeNames = [
	'john from california',
	'sarah from new york',
	'mike from texas',
	'emma from florida',
	'david from ohio',
	'lisa from washington',
	'james from arizona',
	'amy from colorado',
	'chris from nevada',
	'jennifer from oregon',
	'robert from michigan',
	'ashley from georgia',
	'daniel from illinois',
	'nicole from pennsylvania',
	'matthew from virginia',
	'stephanie from north carolina',
	'kevin from new jersey',
	'amanda from massachusetts'
];

export const fakeActions = [
	'just claimed their free prize!',
	'just won $500 gift card!',
	'just received their mystery box!',
	'just spun and won big!',
	'just verified and claimed!',
	'just got their free iphone!',
	'just won the jackpot prize!'
];

export const fakeCities = [
	'New York',
	'Los Angeles',
	'Chicago',
	'Houston',
	'Phoenix',
	'Philadelphia',
	'San Antonio',
	'San Diego',
	'Dallas',
	'Austin',
	'Seattle',
	'Denver',
	'Boston',
	'Atlanta',
	'Miami',
	'Portland'
];

// Helper functions
export function randomName(): string {
	return fakeNames[Math.floor(Math.random() * fakeNames.length)];
}

export function randomAction(): string {
	return fakeActions[Math.floor(Math.random() * fakeActions.length)];
}

export function randomCity(): string {
	return fakeCities[Math.floor(Math.random() * fakeCities.length)];
}

export function addXP(amount: number) {
	xp.update((current) => current + amount);
	coins.update((current) => current + amount * 2);

	// Check for level up
	xp.subscribe((currentXP) => {
		level.subscribe((currentLevel) => {
			if (currentXP >= (currentLevel + 1) * 10000) {
				level.set(currentLevel + 1);
			}
		});
	});
}

