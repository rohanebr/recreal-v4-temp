'use strict';

angular.module('employerWizard').controller('EmployerStepOneController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		$scope.user = Authentication.user;
		$scope.LoadInitialData = function(){
			$http.get('/api/countries/').success(function(response){
				console.log(response);
			});
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
			var employer = {
				title: 'Manager IT',
				division: 'IT',
				department: 'Help Desk'
			};
			var company = {
				company_name: 'Mobilink',
				description: 'Telocom company'
			};
			$http.post('/api/emp-company', {employer: employer, company: company}).success(function(response){
				$state.go('emp-wizard-two');
			});
		};
	}
]);