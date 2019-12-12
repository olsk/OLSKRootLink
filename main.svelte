<script>
export let OLSKRootLinkURL;
export let OLSKRootLinkImageURL;
export let OLSKRootLinkTextAlternate = null;

import OLSKInternational from 'OLSKInternational';
const OLSKLocalized = function(translationConstant) {
	return OLSKInternational.OLSKInternationalLocalizedString(translationConstant, JSON.parse(`{"OLSK_I18N_SEARCH_REPLACE":"OLSK_I18N_SEARCH_REPLACE"}`)[window.OLSKPublicConstants('OLSKSharedPageCurrentLanguage')]);
};
</script>

<a class="OLSKRootLink OLSKCommonIdentity" href={ OLSKRootLinkURL } title={ OLSKRootLinkTextAlternate || OLSKLocalized('OLSKRootLinkTextHome') }>
	<img class="OLSKRootLinkImage" role="presentation" src={ OLSKRootLinkImageURL }>
</a>
