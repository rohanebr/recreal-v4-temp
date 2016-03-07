'use strict';

angular.module('candidateJobs').controller('CandidateJobsController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		$scope.LoadInitialData = function(){
			console.log('candidate jobs page');

		};
	}
]);