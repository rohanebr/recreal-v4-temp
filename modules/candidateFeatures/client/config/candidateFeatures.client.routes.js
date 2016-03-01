'use strict';

//Setting up route
angular.module('candidateFeatures').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('candidateFeatures', {
			url: '/candidateFeatures',
			templateUrl: 'modules/candidateFeatures/client/views/candidateFeatures.client.view.html'
		});
	}
]);