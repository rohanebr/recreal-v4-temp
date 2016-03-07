'use strict';

angular.module('employerWizard').controller('CandidateStepFourController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		$scope.LoadInitialData = function(){
			console.log('Candidate Wizard Four');

		};
	}
]);