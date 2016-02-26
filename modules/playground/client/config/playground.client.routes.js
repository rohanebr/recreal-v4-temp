'use strict';

//Setting up route
angular.module('playground').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('playground', {
			url: '/playground',
			templateUrl: 'modules/playground/client/views/playground.client.view.html'
		});
	}
]);