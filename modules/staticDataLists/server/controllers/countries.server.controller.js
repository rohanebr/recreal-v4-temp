'use strict';


/**
*	Module Dependencies
*/

var path = require('path'),
	mongoose = require('mongoose'),
	Country = mongoose.model('Country'),
	errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * List of states
 */
exports.list = function (req, res) {
  Country.find().select('name').sort('-name').exec(function(err, countries) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(countries);
    }
  });
};

/**
 * Show the current district populate cities
 */
exports.read = function (req, res) {
  res.json(req.country);
};

/**
 * District middleware
 */
exports.countryByName = function (req, res, next, name) {

  Country.findOne({name:name}).exec(function(err, country) { 
    if(err){
      next(err);
    } else if (!country){
      return res.status(404).send({
        message: 'No country with that name has been found'
      });
    }
    req.country = country;
    next();
 });
};