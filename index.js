const countries = require('world-countries/countries');
const EU = ['AUT','BEL','BGR','CYP','CZE','DEU','DNK','ESP','EST','FIN','FRA','GBR','GRC','HRV','HUN','IRL','ITA','LTU','LUX','LVA','MLT','NLD','POL','PRT','ROU','SVK','SVN','SWE'];

let mapped = countries.map((country) => {
	return {
		code: country.ccn3,
		cca2: country.cca2,
		ccn3: country.ccn3,
		cca3: country.cca3,
		currency: country.currency[0],
		name: country.name.common,
		in_eu: EU.indexOf(country.cca3) >= 0,
		translations: {
			en: country.name.common,
			de: country.translations.deu.common
		}
	}
});

module.exports = mapped;