'use strict';

//Setting up route
angular.module('jobs').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('job', {
			url: '/job',
			templateUrl: 'modules/jobs/client/views/job.client.view.html'
		});
	}
]);