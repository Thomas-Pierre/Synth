import { get } from 'svelte/store';
import { sustain } from 'stores/sustain';
import { volume } from 'stores/volume';
import { balance } from 'stores/balance';
import { reverb } from 'stores/reverb';
import { visualize } from './visualizer';

export function stopSound(holder) {
	holder.oscillator?.stop();
	holder.oscillator?.disconnect();
	delete holder.oscillator;
}

export async function makeSound(holder = window || {}, { type, frequency, duration }) {
	stopSound(holder);

	const _sustain = get(sustain);
	const _volume = get(volume);
	const _balance = get(balance);
	const _reverb = get(reverb);

	const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

	holder.oscillator = audioCtx.createOscillator();
	holder.oscillator.frequency.value = frequency;

	// TYPE
	if (typeof type === 'function') {
		const waveNode = audioCtx.createWaveShaper();
		waveNode.curve = type();
		waveNode.oversample = '4x';
	} else holder.oscillator.type = type;

	// BALANCE
	const panNode = audioCtx.createStereoPanner();
	panNode.pan.value = _balance;

	// VOLUME
	const gainNode = audioCtx.createGain();
	gainNode.gain.value = _volume / 100;

	// REVERB
	const reverbNode = audioCtx.createConvolver();
	if (_reverb) {
		let response = await fetch('/sounds/echo.wav');

		let arraybuffer = await response.arrayBuffer();
		reverbNode.buffer = await audioCtx.decodeAudioData(arraybuffer);
		console.log(reverbNode.buffer);
	}

	// SUSTAIN
	if (!_sustain) {
		gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
		setTimeout(() => stopSound(holder), duration * 1000);
	}

	if (_reverb) {
		holder.oscillator.connect(gainNode).connect(panNode).connect(reverbNode).connect(audioCtx.destination);
	} else {
		holder.oscillator.connect(gainNode).connect(panNode).connect(audioCtx.destination);
	}

	holder.oscillator.start();
	visualize(audioCtx, holder.oscillator);
}
