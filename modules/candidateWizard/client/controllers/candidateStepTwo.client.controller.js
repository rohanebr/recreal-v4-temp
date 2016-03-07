'use strict';

angular.module('employerWizard').controller('CandidateStepTwoController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		$scope.LoadInitialData = function(){
			console.log('Candidate Wizard two');

		};
	}
]);