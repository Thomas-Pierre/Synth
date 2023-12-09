<script>
	import Picto from 'components/Picto/Picto.svelte';

	export let active = false;
	export let label = undefined;
	export let symbol = undefined;
	export let action = undefined;

	let blink = false;
	let step = 2;
	let interval;

	function doAction() {
		blink = true;
		setTimeout(() => (blink = false), 200 / step);
		action();
	}

	function onMouseDown() {
		interval = setInterval(doAction, 150);
		setTimeout(() => (step = 10), 2000);
	}

	function onMouseUp() {
		clearInterval(interval);
		step = 2;
	}

	function onClick() {
		clearInterval(interval);
		doAction();
	}
</script>

<button {label} class="button" class:active={active || blink} on:click={onClick} on:mousedown={onMouseDown} on:mouseup={onMouseUp}>
	{#if symbol}<Picto icon={symbol} />{/if}
</button>

<style>
	@import './Button.scss';
</style>
