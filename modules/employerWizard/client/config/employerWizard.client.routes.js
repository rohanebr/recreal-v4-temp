'use strict';

//Setting up route
angular.module('employerWizard').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('employer-step-one', {
			url: '/employer-step-one',
			templateUrl: 'modules/employerWizard/client/views/employer-step-one.client.view.html'
		});
	}
]);