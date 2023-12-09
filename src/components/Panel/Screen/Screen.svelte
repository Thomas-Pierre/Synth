<script>
	import { soundName } from 'stores/sound';
	import { tempo } from 'stores/tempo';
	import { volume } from 'stores/volume';
</script>

<!-- svelte-ignore a11y-distracting-elements -->
<div class="screen">
	<div class="screen__left">
		<div class="screen__line">
			<div class="screen__line__label">Sound:&nbsp;</div>
			<div class="screen__line__content">
				<marquee behavior="slide" direction="left" scrolldelay="15" truespeed>{$soundName.toUpperCase()}</marquee>
			</div>
		</div>

		<div class="screen__line">
			<div class="screen__line__label">Tempo:&nbsp;</div>
			<div class="screen__line__content">
				<marquee behavior="slide" direction="left" scrolldelay="15" truespeed>{$tempo} Bpm</marquee>
			</div>
		</div>

		<div class="screen__line">
			<div class="screen__line__label">Volume:</div>
			<div class="screen__line__content">
				<marquee behavior="slide" direction="left" scrolldelay="15" truespeed>{$volume}%</marquee>
			</div>
		</div>
	</div>

	<canvas class="screen__wave" />
</div>

<style lang="scss">
	@import './Screen.scss';
</style>
