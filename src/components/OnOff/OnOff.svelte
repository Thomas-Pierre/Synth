<script>
	import { on, toggleOn } from 'src/stores/on';

	const toggle = () => {
		if ($on) toggleOn();
		else window.location.reload();
	};
</script>

<button on:click={toggle} class:isOn={$on} />

<style lang="scss">
	@import './OnOff.scss';
</style>
