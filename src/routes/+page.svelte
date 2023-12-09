<script>
	import 'styles/base.scss';
	import Logo from 'components/Logo/Logo.svelte';
	import Controls from 'components/Controls/Controls.svelte';
	import Panel from 'components/Panel/Panel.svelte';
	import Keyboard from 'components/Keyboard/Keyboard.svelte';
</script>

<main>
	<div class="border-left" />

	<section id="logo"><Logo /></section>
	<section id="top"><Panel /></section>
	<section id="left"><Controls /></section>
	<section id="keyboard"><Keyboard octaves={3} from={3} /></section>
	<section id="right">&nbsp;</section>

	<div class="border-right" />
</main>

<style lang="scss">
	@import './page.scss';
</style>
