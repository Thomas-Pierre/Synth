<script>
	import { makeSound, stopSound } from 'utils/oscillator';
	import { soundType } from 'stores/sound';
	import { sustain } from 'stores/sustain';
	import notes from './key.notes';

	export let octave = 0;
	export let note = undefined;
	export let alt = false;

	let key;
	let pressed = false;

	function pressKey() {
		pressed = true;

		const type = $soundType;
		const frequency = key.getAttribute('frequency');
		const duration = $sustain ? 10e3 : 3; // seconds

		makeSound(key, { type, duration, frequency });
	}

	function releaseKey() {
		if ($sustain) setTimeout(() => stopSound(key), 100);
		pressed = false;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div>
	<span class:alt>
		{note}{octave}{#if alt}<sup>#</sup>{/if}
	</span>
	<button
		class:pressed
		class:black={alt}
		class:white={!alt}
		bind:this={key}
		on:mousedown={pressKey}
		on:mouseup={releaseKey}
		on:mouseenter={(e) => e?.buttons > 0 && pressKey()}
		on:mouseout={releaseKey}
		value={notes.find(({ value }) => value === note + octave + (alt ? '#' : ''))?.value}
		frequency={notes.find(({ value }) => value === note + octave + (alt ? '#' : ''))?.frequency}
	/>
</div>

<style>
	@import './Key.scss';
</style>
