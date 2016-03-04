'use strict';

//Setting up route
angular.module('messages').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('inbox', {
			url: '/inbox',
			templateUrl: 'modules/messages/client/views/inbox.client.view.html'
		});
	}
]);