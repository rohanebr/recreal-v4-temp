'use strict';

//Setting up route
angular.module('jobWizard').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('job-step-one', {
			url: '/job-step-one',
			templateUrl: 'modules/jobWizard/client/views/job-step-one.client.view.html'
		}).
		state('job-step-two', {
			url: '/job-step-two',
			templateUrl: 'modules/jobWizard/client/views/job-step-two.client.view.html'
		});		
	}
]);