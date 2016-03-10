'use strict';

angular.module('candidateJobs').controller('CandidateJobsController', ['$scope', 'Authentication', '$state', '$http', 
	function($scope, Authentication, $state, $http){
		$scope.jobs =[
			{
				title: 'Backend Developer ',
				logo: 'assets/theme/images/company-logo/1.jpg',
				company: 'CollegeHumor',
				location: 'New York',
				description: 'Back-end development experience in PHP 5, and a strong understanding of Object Oriented Programmig...',
				time: '16 hours ago '
			},
			{
				title: 'FrontEnd Developer ',
				logo: 'assets/theme/images/company-logo/2.jpg',
				company: 'Google',
				location: 'Chicago',
				description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t...',
				time: '16 hours ago '
			},
			{
				title: 'PHP Developer ',
				logo: 'assets/theme/images/company-logo/3.jpg',
				company: 'Yahoo',
				location: 'California',
				description: 'It is a long established fact that a reader will be distracted by the readable content of a page when...',
				time: '16 hours ago '
			},
			{
				title: 'Angular Developer ',
				logo: 'assets/theme/images/company-logo/4.jpg',
				company: 'CloudTek',
				location: 'Honolulu',
				description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage...',
				time: '16 hours ago '
			}
		];
		$scope.LoadInitialData = function(){
			console.log('candidate jobs page');

		};
	}
]);