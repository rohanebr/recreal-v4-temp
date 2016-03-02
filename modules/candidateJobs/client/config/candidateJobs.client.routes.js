'use strict';

//Setting up route
angular.module('candidateJobs').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('candidate-jobs', {
			url: '/candidate-jobs',
			templateUrl: 'modules/candidateJobs/client/views/candidate-jobs.client.view.html'
		});
	}
]);