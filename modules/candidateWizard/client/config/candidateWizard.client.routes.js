'use strict';

//Setting up route
angular.module('candidateWizard').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('candidateStepOne', {
			url: '/candidateStepOne',
			templateUrl: 'modules/candidateWizard/client/views/candidateStepOne.client.view.html'
		}).
		state('candidateStepTwo', {
			url: '/candidateStepTwo',
			templateUrl: 'modules/candidateWizard/client/views/candidateStepTwo.client.view.html'
		});
	}
]);