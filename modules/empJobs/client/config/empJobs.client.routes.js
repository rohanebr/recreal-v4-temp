'use strict';

//Setting up route
angular.module('empJobs').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('emp-jobs', {
			url: '/emp-jobs',
			templateUrl: 'modules/empJobs/client/views/emp-jobs.client.view.html'
		});
	}
]);