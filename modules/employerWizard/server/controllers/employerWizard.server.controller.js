'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Employer = mongoose.model('Employer'),
  Company = mongoose.model('Company'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.getEmpCompany = function(req, res){
	console.log('get emp-company called');
	/** req has a user bound to it : req.user
	*	
	*/
	// Employer

	res.json({message: 'response'});
};

exports.saveEmpCompany = function(req, res){
	console.log('post emp-company called');
	/** req has a user bound to it : req.user
	*	
	*/
	console.log(req.body);
	res.json({message: 'response'});
};
