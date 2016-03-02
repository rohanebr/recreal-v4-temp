'use strict';

//Setting up route
angular.module('candidateFeatures').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('candidate-cv', {
			url: '/candidate-cv',
			templateUrl: 'modules/candidateFeatures/client/views/candidate-cv.client.view.html'
		});
	}
]);