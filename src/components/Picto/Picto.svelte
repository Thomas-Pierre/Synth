<script>
	export let icon = undefined;
	export let type = 'solid';
	export let rotate = undefined;
	export let flip = undefined;

	let classes = '';
	if (icon) classes += ' fa-${icon}';
	if (rotate) classes += ' fa-rotate-${rotate}';
	if (flip) classes += ' fa-flip-${flip}';
</script>

<div
	class={`icon fa-${icon} ${rotate ? 'fa-rotate-' + rotate : ''} ${flip ? 'fa-flip-' + flip : ''}`}
	class:fa-solid={type === 'solid'}
	class:fa-light={type === 'light'}
	class:fa-brand={type === 'brand'}
/>
