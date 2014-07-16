angular.module('starter.controllers', [])

        .controller('DashCtrl', function($scope) {
        })

        .controller('FriendsCtrl', function($scope, EmployeeService) {
            $scope.searchKey = "";

            $scope.clearSearch = function() {
                $scope.searchKey = "";
                findAllEmployees();
            };

            $scope.search = function() {
                EmployeeService.findByAllText($scope.searchKey).then(function(employees) {
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

        .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
            $scope.friend = Friends.get($stateParams.friendId);
        })

        .controller('AccountCtrl', function($scope) {
        });
