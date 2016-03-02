'use strict';

//Setting up route
angular.module('company').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('company', {
			url: '/company',
			templateUrl: 'modules/company/client/views/company.client.view.html'
		});
	}
]);