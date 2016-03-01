'use strict';

//Setting up route
angular.module('empFavorites').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('emp-favorites', {
			url: '/emp-favorites',
			templateUrl: 'modules/empFavorites/client/views/emp-favorites.client.view.html'
		});
	}
]);