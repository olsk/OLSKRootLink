import { deepEqual } from 'assert';

require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`OLSKRootLink_Misc--${ kDefaultRoute.OLSKRouteSignature }`, function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRootLinkURL: 'alfa',
				OLSKRootLinkImageURL: 'bravo',
				OLSKRootLinkTextAlternate: 'charlie',
			});
		});

		it('classes OLSKCommonIdentity', function () {
			browser.assert.hasClass(OLSKRootLink, 'OLSKCommonIdentity');
		});

		it('sets href', function () {
			browser.assert.attribute(OLSKRootLink, 'href', 'alfa');
		});

		it('sets title', function () {
			browser.assert.attribute(OLSKRootLink, 'title', 'charlie');
		});

		describe('OLSKRootLinkImage', function () {
			
			it('sets role', function () {
				browser.assert.attribute(OLSKRootLinkImage, 'role', 'presentation');
			});
		
			it('sets src', function () {
				browser.assert.attribute(OLSKRootLinkImage, 'src', 'bravo');
			});
		
		});

	});
	
});
