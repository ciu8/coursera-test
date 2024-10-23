(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchMenu = '';
        $scope.message = '';
        $scope.applyClass = 'default';

        $scope.checkIfTooMuch = function() {
            if ($scope.lunchMenu == "") {
                $scope.message = "Please enter data first";
                $scope.applyClass = "danger";
            } else {
                $scope.applyClass = "success";
                const lunchMenu = $scope.lunchMenu;
                const foods = lunchMenu.split(",").filter((f) => f.trim() != "");
                if (foods.length > 3) {
                    $scope.message = "Too much!!";
                } else {
                    $scope.message = "Enjoy!";
                }
            }
        }
    }
})();