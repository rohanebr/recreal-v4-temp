'use strict';

angular.module('playground').controller('PlaygroundController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		
		// $scope.articles = [
		// 	{title: 'My first Post', content: 'JobPlanet - Responsive JobBoard WordPress Themes. Quisque eget lacus turpis. Curabitur ac pretium felis, vel lobortis leo. Praesent quis mi viverra, sodales mi id, dapibus tortor. Mauris sed venenatis dui. Aliquam sed convallis erat.'}
		// ]

		$scope.LoadInitialData = function(){
			$http.get('/api/articles').success(function(response){
				$scope.articles = response;
			})
		};
	}
]);