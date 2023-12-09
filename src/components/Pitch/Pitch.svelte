<script>
	export let label = undefined;
	export let min = undefined;
	export let max = undefined;
	export let action = undefined;

	let left = 50;

	function onChange(event) {
		action?.(event);
	}
</script>

<div class="pitch">
	<div class="label" {min} {max}>{label}</div>
	<input type="range" min="0" max="100" bind:value={left} on:change={onChange} on:input={onChange} />
	<div class="cursor" style={`left: ${left}%;`} />
</div>

<style lang="scss">
	@import './Pitch.scss';
</style>
