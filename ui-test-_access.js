Object.entries({
	OLSKRootLink: '.OLSKRootLink',
	
	OLSKRootLinkImage: '.OLSKRootLinkImage',
}).map(function (e) {
	return global[e.shift()] = e.pop();
});

require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	describe(`OLSKRootLink_Access-${ kDefaultRoute.OLSKRouteSignature }`, function () {
		
		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRootLinkURL: 'alfa',
				OLSKRootLinkImageURL: 'bravo',
			});
		});
		
		it('shows OLSKRootLink', function() {
			return browser.assert.elements(OLSKRootLink, 1);
		});
		
		it('shows OLSKRootLinkImage', function() {
			return browser.assert.elements(OLSKRootLinkImage, 1);
		})
		
	});
	
})
