import RollupStart from './main.svelte';

const OLSKRootLink = new RollupStart({
	target: document.body,
	props: Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries())),
});

export default OLSKRootLink;
