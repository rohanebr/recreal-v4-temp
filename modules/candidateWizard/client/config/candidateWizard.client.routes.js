'use strict';

//Setting up route
angular.module('employerWizard').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('candidate-step-one', {
			url: '/candidate-step-one',
			templateUrl: 'modules/candidateWizard/client/views/candidate-step-one.client.view.html'
		}).
		state('candidate-step-two', {
			url: '/candidate-step-two',
			templateUrl: 'modules/candidateWizard/client/views/candidate-step-two.client.view.html'
		}).
		state('candidate-step-three', {
			url: '/candidate-step-three',
			templateUrl: 'modules/candidateWizard/client/views/candidate-step-three.client.view.html'
		}).
		state('candidate-step-four', {
			url: '/candidate-step-four',
			templateUrl: 'modules/candidateWizard/client/views/candidate-step-four.client.view.html'
		});
	}
]);