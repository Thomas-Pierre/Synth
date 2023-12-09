import { writable } from 'svelte/store';

export const volume = writable(80);

export function increaseVolume() {
	volume.update((v) => Math.min((v += 2), 100));
}
export function decreaseVolume() {
	volume.update((v) => Math.max((v -= 2), 0));
}
