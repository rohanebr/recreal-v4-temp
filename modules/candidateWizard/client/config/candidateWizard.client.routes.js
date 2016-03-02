'use strict';

//Setting up route
angular.module('employerWizard').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('candidate-step-one', {
			url: '/candidate-step-one',
			templateUrl: 'modules/employerWizard/client/views/candidate-step-one.client.view.html'
		}).
		state('candidate-step-two', {
			url: '/candidate-step-two',
			templateUrl: 'modules/employerWizard/client/views/candidate-step-two.client.view.html'
		});
	}
]);