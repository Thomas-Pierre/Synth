import { get, writable } from 'svelte/store';

export const sounds = {
	piano: 'triangle',
	flute: 'sine',
	guitar: 'sawtooth',
	stylophone: 'square'
};

export let soundType = writable(Object.values(sounds)[0]);
export let soundName = writable(Object.keys(sounds)[0]);

export function increaseSound() {
	const soundsnames = Object.keys(sounds);
	const currentSound = get(soundName);
	const index = soundsnames.indexOf(currentSound);
	const newIndex = Math.min(index + 1, soundsnames.length - 1);

	soundType.update(() => Object.values(sounds)[newIndex]);
	soundName.update(() => Object.keys(sounds)[newIndex]);
}
export function decreaseSound() {
	const soundsnames = Object.keys(sounds);
	const currentSound = get(soundName);
	const index = soundsnames.indexOf(currentSound);
	const newIndex = Math.max(index - 1, 0);

	soundType.update(() => Object.values(sounds)[newIndex]);
	soundName.update(() => Object.keys(sounds)[newIndex]);
}
