exports.OLSKControllerRoutes = function() {
	return [{
		OLSKRoutePath: '/stub/OLSKRootLinkEJS',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'), {
				OLSKRootLinkStubParams: req.query,
			});
		},
		OLSKRouteSignature: 'OLSKRootLinkEJSStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}, {
		OLSKRoutePath: '/stub/OLSKRootLinkSvelte',
		OLSKRouteMethod: 'get',
		OLSKRouteFunction (req, res, next) {
			return res.render(require('path').join(__dirname, 'stub-view'));
		},
		OLSKRouteSignature: 'OLSKRootLinkSvelteStubRoute',
		OLSKRouteLanguageCodes: ['en', 'fr', 'es', 'pt'],
		OLSKRouteIsHidden: process.env.NODE_ENV === 'production',
	}];
};
