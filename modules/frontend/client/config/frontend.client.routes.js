'use strict';

//Setting up route
angular.module('frontend').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
		// Employer signup wizard state routing
		$stateProvider.
		state('blog', {
			url: '/blog',
			templateUrl: 'modules/frontend/client/views/blog.client.view.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'modules/frontend/client/views/about.client.view.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'modules/frontend/client/views/contact.client.view.html'
		})
		.state('employersinfo', {
			url: '/employersinfo',
			templateUrl: 'modules/frontend/client/views/employersinfo.client.view.html'
		});
	}
]);