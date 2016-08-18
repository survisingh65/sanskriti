(function(){
    angular
        .module("SanskritiApp")
        .controller("FeedbackController", FeedbackController)

    function FeedbackController($scope, $rootScope, $window){
        console.log("Feedback controller");

        if($window.sessionStorage.getItem('id'))
        {
            $scope.user = JSON.parse($window.sessionStorage.getItem('id'));
            $rootScope.currentUser = JSON.parse($window.sessionStorage.getItem('id'));
        }

        $scope.postFeedback = function(){
            $scope.addNewClicked = true;
            $scope.message = "Thank you for valuable feedback, you helping us improve and service you better."
        }

    }
})();