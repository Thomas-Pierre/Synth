import { writable } from 'svelte/store';

export const on = writable(true);

export function toggleOn() {
	on.update((v) => !v);
}
