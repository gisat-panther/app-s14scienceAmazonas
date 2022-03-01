var path = require('path');

module.exports = function override(config, env) {
	// TODO comment when using package from npm
	config.resolve = {
		// alias: {
		// 	react:
		// 		'C:/Users/PavelVlach/WebstormProjects/ptr-atoms/node_modules/react',
		// 	"@gisatcz/ptr-atoms": "C:/Users/PavelVlach/WebstormProjects/ptr-atoms",
			// "@gisatcz/ptr-maps": "C:/Users/pvlach/DATA/ptr-maps/dist",
			// "@gisatcz/ptr-core": "C:/Users/pvlach/DATA/ptr-core",
			// "@gisatcz/ptr-state": "C:/Users/pvlach/DATA/ptr-state",
			// "@gisatcz/ptr-components": "C:/Users/pvlach/DATA/ptr-components/dist",
			// "@gisatcz/ptr-deprecated": "C:/Users/pvlach/DATA/ptr-deprecated/dist",
		// }
	};

	return config;
};