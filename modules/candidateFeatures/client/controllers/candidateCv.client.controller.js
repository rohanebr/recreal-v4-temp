'use strict';

angular.module('candidateFeatures').controller('CandidateCvController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		
		$scope.LoadInitialData = function(){
			console.log('candidate cv page');
		};
	}
]);