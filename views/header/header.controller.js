(function(){
    angular
        .module("SanskritiApp")
        .controller("HeaderController", HeaderController)


    function HeaderController($scope, $rootScope, $location, $window){
        console.log("Inside Header controller");

        if($window.sessionStorage.getItem('id'))
        {
            $scope.user = JSON.parse($window.sessionStorage.getItem('id'));
            $rootScope.currentUser = JSON.parse($window.sessionStorage.getItem('id'));
        }

        $scope.logout = function(){
            $rootScope.currentUser = null;
            $window.sessionStorage.removeItem('id');
            $window.localStorage.removeItem('currentUser');
            $location.url("/login");
        }

    }

})();
