'use strict';

/**
 * Module dependencies
 */
var empWizard = require('../controllers/employerWizard.server.controller');

module.exports = function (app) {

	app.route('/api/emp-company')
	.get(empWizard.getEmpCompany)
	.post(empWizard.saveEmpCompany);
  
};
