(function(){
    angular
        .module("SanskritiApp")
        .controller("LoginController", LoginController)

    function LoginController($scope, $location, $rootScope, $window){
        $scope.login = function (user){
            console.log(user.email + "----" + user.password);

            var userDirectory = JSON.parse($window.localStorage.getItem('users'));

            if(userDirectory == null){
                console.log("No User in storage");
                $scope.errorMsg = "No such user exists";
            }
            else{
                for (var u in userDirectory) {
                    if (userDirectory[u].emailId === user.email && userDirectory[u].password === user.password) {
                        $rootScope.currentUser = userDirectory[u];
                        $window.sessionStorage.setItem('id', JSON.stringify(userDirectory[u]));
                        $window.localStorage.setItem('currentUser', JSON.stringify(userDirectory[u]));
                        $scope.errorMsg = "";
                        $location.url("/home");
                        return;
                    }
                }
                console.log("No User in storage");
                $scope.errorMsg = "No such user exists";
            }
        }
    }
})();