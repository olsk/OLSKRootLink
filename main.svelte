<script>
export let OLSKRootLinkURL;
export let OLSKRootLinkImageURL;
export let OLSKRootLinkTextAlternate = null;

import { OLSKLocalized } from 'OLSKInternational';
</script>

<a class="OLSKRootLink OLSKCommonIdentity" href={ OLSKRootLinkURL } title={ OLSKRootLinkTextAlternate || OLSKLocalized('OLSKRootLinkTextHome') }>
	<img class="OLSKRootLinkImage" role="presentation" src={ OLSKRootLinkImageURL }>
</a>
