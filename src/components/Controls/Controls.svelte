<script>
	import Button from 'components/Button/Button.svelte';
	import { increaseSound, decreaseSound } from 'stores/sound';
	import { increaseVolume, decreaseVolume } from 'stores/volume';
	import { increaseTempo, decreaseTempo } from 'stores/tempo';
</script>

<div class="buttons">
	<div class="buttons-group buttons-group--alt">
		<h4>Sound</h4>
		<div>
			<Button symbol="chevron-left" action={decreaseSound} />
			<Button symbol="chevron-right" action={increaseSound} />
		</div>
	</div>

	<div class="buttons-group">
		<h4>Tempo</h4>
		<div>
			<Button symbol="chevron-down" action={decreaseTempo} />
			<Button symbol="chevron-up" action={increaseTempo} />
		</div>
	</div>

	<div class="buttons-group">
		<h4>Volume</h4>
		<div>
			<Button symbol="volume-low" action={decreaseVolume} />
			<Button symbol="volume-high" action={increaseVolume} />
		</div>
	</div>
</div>

<style lang="scss">
	@import './Controls.scss';
</style>
