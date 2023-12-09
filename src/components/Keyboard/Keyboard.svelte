<script>
	import Picto from 'components/Picto/Picto.svelte';
	import Key from 'components/Keyboard/Key/Key.svelte';

	export let octaves = 1;
	export let from = 0;
</script>

<div class="keyboard">
	{#each new Array(+octaves) as _, i}
		<div class="octave" octave={i + from}>
			<div class="octave__label"><Picto icon="music" /> {i + from}</div>
			<Key note="C" octave={i + from} />
			<Key note="C" octave={i + from} alt />
			<Key note="D" octave={i + from} />
			<Key note="D" octave={i + from} alt />
			<Key note="E" octave={i + from} />
			<Key note="F" octave={i + from} />
			<Key note="F" octave={i + from} alt />
			<Key note="G" octave={i + from} />
			<Key note="G" octave={i + from} alt />
			<Key note="A" octave={i + from} />
			<Key note="A" octave={i + from} alt />
			<Key note="B" octave={i + from} />
		</div>
	{/each}
</div>

<style lang="scss">
	@import './Keyboard.scss';
</style>
