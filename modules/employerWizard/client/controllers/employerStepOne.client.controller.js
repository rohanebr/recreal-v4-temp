'use strict';

angular.module('employerWizard').controller('EmployerStepOneController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		$scope.user = Authentication.user;
		$scope.LoadInitialData = function(){
			if($scope.user.stage === 0){
				$scope.company = {};
				$scope.empoyer = {};
			}
			else{
				$http.get('/api/emp-company').success(function(response){
					$scope.company = response.company;
					$scope.employer = response.employer;
				});
			}
		};
		$scope.Continue = function(){
			$http.post('/api/emp-company', {employer: $scope.employer, company: $scope.company}).success(function(response){
				$state.go('emp-wizard-two');
			});
		};
	}
]);