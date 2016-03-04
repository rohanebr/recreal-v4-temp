'use strict';

//Setting up route
angular.module('exams').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('exams', {
			url: '/exams',
			templateUrl: 'modules/exams/client/views/exams.client.view.html'
		});
	}
]);