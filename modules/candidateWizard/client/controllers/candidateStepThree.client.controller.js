'use strict';

angular.module('employerWizard').controller('CandidateStepThreeController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		$scope.LoadInitialData = function(){
			console.log('Candidate Wizard three');

		};
	}
]);