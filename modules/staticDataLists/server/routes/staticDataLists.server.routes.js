'use strict';

/**
 * Module dependencies
 */
var countries = require('../controllers/countries.server.controller');

module.exports = function (app) {
  	app.route('/api/countries')
		.get(countries.list);

	app.route('/api/countries/:countryName')
		.get(countries.read);

	app.param('countryName', countries.countryByName);


};
