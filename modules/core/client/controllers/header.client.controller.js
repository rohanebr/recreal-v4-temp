'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus', '$modal',
  function ($scope, $state, Authentication, Menus, $modal) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });

    // open signin
    $scope.OpenSigninModal = function() {
        var modalInstance = $modal.open({
            templateUrl: 'modules/users/client/views/partials/signin-modal.partial.client.view.html',
            controller: 'AuthenticationController'
        });
        modalInstance.result.then(function(result) {
            console.log(result);
            //    $scope.sendmessage = result.sendmessage;
        },
        function() {

        });
    };


  }
]);
