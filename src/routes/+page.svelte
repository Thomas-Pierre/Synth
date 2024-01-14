<script>
	import 'styles/base.scss';
	import Logo from 'components/Logo/Logo.svelte';
	import Controls from 'components/Controls/Controls.svelte';
	import Panel from 'components/Panel/Panel.svelte';
	import Keyboard from 'components/Keyboard/Keyboard.svelte';
	import OnOff from 'src/components/OnOff/OnOff.svelte';

	export let data;
	let { octaves = '3', from = '3' } = data;

	const updateValues = () => {
		const url = new URL(window.location.href);
		const params = new URLSearchParams(url.search);
		params.set('octaves', octaves);
		params.set('from', from);

		window.location.search = params.toString();
	};
</script>

<main>
	<OnOff />
	<div class="border-left" />

	<section id="logo"><Logo /></section>
	<section id="top"><Panel /></section>
	<section id="left"><Controls /></section>
	<section id="keyboard"><Keyboard octaves={+octaves} from={+from} /></section>
	<section id="right">&nbsp;</section>

	<div class="border-right" />

	<code>
		<strong>
			<label for="octaves">Octaves</label>
			<select name="octaves" id="octaves" bind:value={octaves} on:change={updateValues}>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		</strong>

		<strong>
			<label for="from">From</label>
			<select name="from" id="from" bind:value={from} on:change={updateValues}>
				<option value="0">0</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>
		</strong>
	</code>
</main>

<style lang="scss">
	@import './page.scss';
</style>
