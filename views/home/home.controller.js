(function(){
    angular
        .module("SanskritiApp")
        .controller("HomeController", HomeController)

    function HomeController($scope){
        if($window.sessionStorage.getItem('id'))
        {
            $scope.user = JSON.parse($window.sessionStorage.getItem('id'));
            $rootScope.currentUser = JSON.parse($window.sessionStorage.getItem('id'));
        }
    }
})();