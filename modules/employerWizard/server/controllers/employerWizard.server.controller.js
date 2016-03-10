'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Employer = mongoose.model('Employer'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.saveEmpCompany = function(req, res){
	console.log('this is where the magic happens');
	/** req has a user bound to it : req.user
	*	
	*/
	res.send({message: 'this is where the magic happens'});
};

exports.getEmpCompany = function(req, res){
	console.log('this is where the magic happens');
	/** req has a user bound to it : req.user
	*	
	*/
	res.send({message: 'this is where the magic happens'});
};
