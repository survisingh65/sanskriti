'use strict';
(function(){
    angular
        .module("SanskritiApp")
        .controller("RegistrationController", RegistrationController)

    function RegistrationController($scope, $location, $window, $rootScope){

        $scope.register = function(newuser){
            newuser.roleAdmin = "N";
            var userAlreadyExists = checkDuplicateUser(newuser);

            if(!userAlreadyExists) {
                var userDirectory = JSON.parse($window.localStorage.getItem('users'));
                userDirectory.push(newuser);
                $window.localStorage.setItem('users', JSON.stringify(userDirectory));
                $location.url("/login");
                $rootScope.errorMsg = "Please login...";
            }
            else{
                $scope.errorMsg = "User already exists. Please verify email";
            }
        }

        $scope.createAdminUser = function(){
            var adminUser = {
                fName:'Admin',
                emailId:'admin@admin',
                password:'admin',
                roleAdmin:'Y'
            }
            var adminAlreadyExists = checkDuplicateUser(adminUser);
            if(!adminAlreadyExists){
                var userDirectory = JSON.parse($window.localStorage.getItem('users'));
                var userArray = [];

                if (userDirectory == null) {
                    userArray.push(adminUser);
                    $window.localStorage.setItem('users', JSON.stringify(userArray));
                }
                else {
                    console.log("Hello");
                    userDirectory.push(adminUser);
                    $window.localStorage.setItem('users', JSON.stringify(userDirectory));
                }
            }
        }

        function checkDuplicateUser(user){
            var userDirectory = JSON.parse($window.localStorage.getItem('users'));
            if(userDirectory != null) {
                for (var u in userDirectory) {
                    if (userDirectory[u].emailId === user.emailId) {
                        return true;
                    }
                }
            }

            return false;
        }
    }
})();