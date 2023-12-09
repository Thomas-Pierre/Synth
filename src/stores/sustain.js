import { writable } from 'svelte/store';

export const sustain = writable(false);

export function toggleSustain() {
	sustain.update((v) => !v);
}
