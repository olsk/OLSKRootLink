require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

		const uLocalized = function (inputData) {
			return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
		};

		describe(`OLSKRootLink_Localize-${ kDefaultRoute.OLSKRouteSignature }-${ OLSKRoutingLanguage }`, function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRootLinkURL: 'alfa',
					OLSKRootLinkImageURL: 'bravo',
					OLSKRoutingLanguage,
				});
			});

			it('localizes title', function () {
				browser.assert.attribute(OLSKRootLink, 'title', uLocalized('OLSKRootLinkTextHome'));
			});

		});

	});

})
