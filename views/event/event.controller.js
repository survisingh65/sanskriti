(function() {
    angular
        .module("SanskritiApp")
        .controller("EventController", EventController)

    function EventController($rootScope, $scope, $location, $routeParams, EventService) {
        $scope.getEvent = getEvent;
        $scope.markers = [];
        $scope.createMarker = createMarker;

        function getEvent(key){
            EventService.searchEvent(key)
                .then(
                    function(doc){
                        console.log(doc);
                        $scope.basicSearchRecords = doc.events;
                        var mapOptions = {
                            zoom: 8,
                            center: new google.maps.LatLng(42.364506, -71.038887),
                            mapTypeId: google.maps.MapTypeId.TERRAIN
                        }
                        $scope.map= new google.maps.Map(document.getElementById('eEvent'), mapOptions);

                    }
                )
        }

        getEvent();

        function createMarker(record){
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(record.venue.latitude, record.venue.longitude),
                title: record.name.text,
                animation: "Animation.BOUNCE",
                icon: "https://upload.wikimedia.org/wikipedia/commons/9/92/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Home_%E2%80%93_People_%E2%80%93_Default.png"
            });
            $scope.map.setCenter(marker.getPosition());
        }
    }
})();