'use strict';

//Setting up route
angular.module('linkedin').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('linkedin', {
			url: '/linkedin',
			templateUrl: 'modules/linkedin/client/views/linkedin.client.view.html'
		});
	}
]);