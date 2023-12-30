<script>
	import 'styles/base.scss';
	import Logo from 'components/Logo/Logo.svelte';
	import Controls from 'components/Controls/Controls.svelte';
	import Panel from 'components/Panel/Panel.svelte';
	import Keyboard from 'components/Keyboard/Keyboard.svelte';

	let octaves = 3;
	let from = 3;
</script>

<main>
	<div class="border-left" />

	<section id="logo"><Logo /></section>
	<section id="top"><Panel /></section>
	<section id="left"><Controls /></section>
	<section id="keyboard"><Keyboard {octaves} {from} /></section>
	<section id="right">&nbsp;</section>

	<div class="border-right" />

	<code>
		<strong>
			<label for="octaves">Octaves</label>
			<select name="octaves" id="octaves" bind:value={octaves}>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		</strong>

		<strong>
			<label for="from">From</label>
			<select name="from" id="from" bind:value={from}>
				{#each new Array(5) as _, i}
					<option value={i}>{i}</option>
				{/each}
			</select>
		</strong>
	</code>
</main>

<style lang="scss">
	@import './page.scss';
</style>
