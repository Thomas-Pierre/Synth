import { writable } from 'svelte/store';

export const tempo = writable(120);

export function increaseTempo() {
	tempo.update((t) => Math.min((t += 1), 300));
}
export function decreaseTempo() {
	tempo.update((t) => Math.max((t -= 1), 30));
}
