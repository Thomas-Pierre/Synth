import { writable } from 'svelte/store';

export const balance = writable(0);

export function changeBalance({ target }) {
	balance.set(target.value / 50 - 1);
}
