'use strict';

//Setting up route
angular.module('jobWizard').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('job-wizard', {
			url: '/job-wizard',
			templateUrl: 'modules/jobWizard/client/views/job-wizard.client.view.html'
		});
	}
]);