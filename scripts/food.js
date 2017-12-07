var Food = angular.module('Food', ['ngRoute', 'controllers']);
Food.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/today', {
        templateUrl: "views/today.html",
        controller: 'TodayController'
    })
        .when('/foodList', {
            templateUrl: "views/foodList.html",
            controller: 'FoodListController'
        })
        .when('/answer', {
            templateUrl: "views/answer.html",
            controller: 'AnswerController'
        })
        .otherwise({
            redirectTo: '/today'
        })
}]);
Food.run(['$rootScope', '$http', function ($rootScope, $http) {
    var navShow = true;
    //导航
    $rootScope.navclick = function () {
        var nav = document.getElementById('nav');
        var navBtn = document.getElementById('navRight');
        if (navShow) {
            nav.style.transform = 'translate(0)';
            nav.style.transitionDuration = '2s';
            nav.style.transitionDelay = '0.1s';
            navBtn.style.display = 'none';
            navShow = false;
        }
        else {
            nav.style.transform = 'translate(-80%)';
            nav.style.transitionDuration = '2s';
            nav.style.transitionDelay = '0.1s';
            navBtn.style.display = 'block';
            navShow = true;
        }
    }

    $rootScope.navHide = function () {
        var nav = document.getElementById('nav');
        var navBtn = document.getElementById('navRight');
        if(getStyle(nav,'left')!=='0px'){
            return;
        }
        nav.style.transform = 'translate(-80%)';
        nav.style.transitionDuration = '2s';
        navBtn.style.display = 'block';
        navShow = true;

    }

    $rootScope.showClick = function(key,close){
        $rootScope.showIndex = key;
        $rootScope.close =close;
    }

}])






