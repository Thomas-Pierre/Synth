<script>
	import { on } from 'src/stores/on';
</script>

<div class="logo">
	<h1>Synth</h1>
	<h2><em>JS</em> 2.0.0</h2>

	<div class="light" class:isOn={$on} />
</div>

<style lang="scss">
	@import './Logo.scss';
</style>
