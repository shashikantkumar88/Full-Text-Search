angular.module('starter.controllers', [])

        .controller('DashCtrl', function($scope) {
        })

        .controller('EmployeeCtrl', function($scope, EmployeeService) {
            $scope.searchKey = "";
            $scope.clearSearch = function() {
                $scope.searchKey = "";
                $scope.count =1;
                findAllEmployees();
            };

            $scope.search = function() {
                EmployeeService.findByAllText($scope.searchKey).then(function(employees) {
                    $scope.count = employees.length;
                    $scope.employees = employees;
                });
            };

            var findAllEmployees = function() {
                EmployeeService.findAll().then(function(employees) {
                    $scope.employees = employees;
                });
            };

            findAllEmployees();
        })

        .controller('EmployeeDetailCtrl', function($scope) {
        })

        .controller('AccountCtrl', function($scope) {
        });
