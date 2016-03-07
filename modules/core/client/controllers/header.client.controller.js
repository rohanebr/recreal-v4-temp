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

      // added by muddaser let the page scroll to top on state change
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

  }
]);
