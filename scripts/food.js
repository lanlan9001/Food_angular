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
        var nav = document.getElementById('navs');
        var navBtn = document.getElementById('navBtn');
        var vleft = (113 / 16) * parseFloat(getFontSize());
        vleft = -vleft ;
        if (navShow) {
            navBtn.style.display = 'none';
            animate(nav,{left: 0}, function(){
                //存在问题，用户手快30秒内点多次时就会执行多次，导致菜单不能合起来。
                setTimeout(function(){navShow = false;},40)
            },15);
        }
        else {
            navBtn.style.display = 'block';
            animate(nav,{left: vleft}, function(){
                navShow = true;
            },15);
        }
    }

    $rootScope.navHide = function () {
        var nav = document.getElementById('navs');
        var navBtn = document.getElementById('navBtn');
        if(getStyle(nav,'left')!=='0px'){
            return;
        }
        var vleft = (113 / 16) * parseFloat(getFontSize());
        vleft = -vleft;
        navShow = true;
        navBtn.style.display = 'block';
        animate(nav,{left: vleft}, function(){},15);

    }

    $rootScope.showClick = function(key,close){
        $rootScope.showIndex = key;
        $rootScope.close =close;
    }

}])






