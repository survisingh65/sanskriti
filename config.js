(function()
{
    angular
        .module("SanskritiApp")
        .config(function($routeProvider)
        {
            $routeProvider
                .when("/home",
                    {
                        templateUrl: "views/home/home.view.html"
                    })
                .when("/login",
                    {
                        templateUrl: "views/users/login.view.html",
                        controller: "LoginController"
                    })
                .when("/register",
                    {
                        templateUrl: "views/users/registration.view.html"
                    })
                .when("/contact",
                    {
                        templateUrl: "views/users/contact.view.html"
                    })
                .when("/contact",
                    {
                        templateUrl: "views/users/contact.view.html"
                    })
                .when("/photo",
                    {
                        templateUrl: "views/media/photo.view.html"
                    })
                .when("/feedback",
                    {
                        templateUrl: "views/users/feedback.view.html"
                    })
                .when("/event",
                    {
                        templateUrl: "views/event/event.view.html",
                        controller: "EventController"
                    })
                .when("/information",
                    {
                        templateUrl: "views/information/information.view.html"
                    })
                .when("/faq",
                    {
                        templateUrl: "views/information/faq.view.html"
                    })
                .otherwise({
                    redirectTo: "/home"
                })
        });
})();