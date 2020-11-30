require('./controller.js').OLSKControllerRoutes().forEach(function (kDefaultRoute) {

	kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (languageCode) {

		const uLocalized = function (inputData) {
			return OLSKTestingLocalized(inputData, languageCode);
		};

		describe(`OLSKRootLink_Localize-${ kDefaultRoute.OLSKRouteSignature }-${ languageCode }`, function () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKRootLinkURL: 'alfa',
					OLSKRootLinkImageURL: 'bravo',
					OLSKRoutingLanguage: languageCode,
				});
			});

			it('localizes title', function () {
				browser.assert.attribute(OLSKRootLink, 'title', uLocalized('OLSKRootLinkTextHome'));
			});

		});

	});

})
