<script>
	import Screen from 'components/Panel/Screen/Screen.svelte';
	import Button from 'components/Button/Button.svelte';
	import Pitch from 'components/Pitch/Pitch.svelte';
	import Speaker from 'components/Speaker/Speaker.svelte';

	import { on } from 'src/stores/on';
	import { sustain, toggleSustain } from 'stores/sustain';
	import { reverb, toggleReverb } from 'stores/reverb';
	import { metronome, toggleMetronome } from 'stores/metronome';
	import { changeBalance } from 'stores/balance';
</script>

<div class="panel">
	<Speaker />

	<section id="left">
		<Button label="Sustain" action={toggleSustain} active={$on && $sustain} />
		<Button label="Reverb" action={toggleReverb} active={$on && $reverb} />
		<Button label="Metronome" action={toggleMetronome} active={$on && $metronome} />
	</section>

	<section id="screen"><Screen /></section>

	<section id="right">
		<Pitch label="Balance" min="L" max="R" action={changeBalance} />
	</section>

	<Speaker />
</div>

<style lang="scss">
	@import './Panel.scss';
</style>
