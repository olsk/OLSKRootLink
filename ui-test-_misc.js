require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`OLSKRootLink_Misc--${ kDefaultRoute.OLSKRouteSignature }`, function () {

		before(function () {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRootLinkURL: 'alfa',
				OLSKRootLinkImageURL: 'bravo',
				OLSKRootLinkTextAlternate: 'charlie',
			});
		});

		it('classes OLSKCommonRootLink', function () {
			return browser.assert.hasClass(OLSKRootLink, 'OLSKCommonRootLink');
		});

		it('sets href', function () {
			return browser.assert.attribute(OLSKRootLink, 'href', 'alfa');
		});

		it('sets title', function () {
			return browser.assert.attribute(OLSKRootLink, 'title', 'charlie');
		});

		describe('OLSKRootLinkImage', function () {
			
			it('sets role', function () {
				return browser.assert.attribute(OLSKRootLinkImage, 'role', 'presentation');
			});
		
			it('sets src', function () {
				return browser.assert.attribute(OLSKRootLinkImage, 'src', 'bravo');
			});
		
		});

	});
	
});
