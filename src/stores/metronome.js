import { get, writable } from 'svelte/store';
import { tempo } from 'stores/tempo';
import { volume } from 'stores/volume';

export const metronome = writable(false);

let oscillator;

export function toggleMetronome() {
	metronome.update((v) => !v);

	if (get(metronome)) startMetronome();
	else stopMetronome();
}

function stopMetronome() {
	oscillator?.stop();
	oscillator?.disconnect();
}

function startMetronome() {
	const duration = 100;
	const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	oscillator = audioCtx.createOscillator();
	oscillator.frequency.value = 440;
	oscillator.type = 'sine';

	const gainNode = audioCtx.createGain();
	gainNode.gain.value = (get(volume) / 100) * 0.5;
	gainNode.gain.exponentialRampToValueAtTime(0.005, audioCtx.currentTime + duration / 1000);

	oscillator.connect(gainNode).connect(audioCtx.destination);
	oscillator.start();
	oscillator.stop(audioCtx.currentTime + duration / 1000);
	oscillator.onended = () => oscillator.disconnect();

	if (get(metronome)) setTimeout(startMetronome, 60000 / get(tempo));
}
