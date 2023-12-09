import { writable } from 'svelte/store';

export const reverb = writable(false);

export function toggleReverb() {
	reverb.update((v) => !v);
}
