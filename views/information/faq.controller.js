(function(){
    angular
        .module("SanskritiApp")
        .controller("FaqController", FaqController)

    function FaqController($scope){
        $scope.postQuestion = function(){
            $scope.addNewClicked = true;
            $scope.message = "Thank you for posting your question OGS will respond you shortly."
        }
    }
})();