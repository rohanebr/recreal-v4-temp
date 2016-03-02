'use strict';

//Setting up route
angular.module('jobApps').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('job-apps', {
			url: '/job-apps',
			templateUrl: 'modules/jobApps/client/views/job-apps.client.view.html'
		});
	}
]);