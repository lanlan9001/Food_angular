angular.module('controllers', [])
    .controller('TodayController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
        $scope.title = "今日推荐";
        $http({
            url: 'api/food.php',
            method: "get"
        }).then(function (info) {
            $scope.items = info.data;
        })
        $rootScope.index = 0;

        //收藏
        $scope.storeClick = function (key, store) {
            var newStore = 0;
            // newStore = store===0?1:0;
            if (store == 0) {
                newStore = 1;
            }
            else {
                newStore = 0;
            }
            $http({
                url: 'api/store.php?key=' + key + '&store=' + newStore,
                method: "get"
            }).then(function (info) {
                if (info.data.sucess) {
                    delete info.data.sucess;
                    $scope.items = info.data;
                    var tips = document.querySelector("#tips");
                    tips.innerHTML = "操作收藏成功";
                    // animate(tips,{"opacity":1},function(){},100)
                    // animate(tips,{"opacity":0},function(){},100)
                    // tips = angular.element(tips);
                    //tips.html("操作收藏成功").fadeIn(1000).fadeOut(1000);
                }
            })

        }

    }])
    .controller('FoodListController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $scope.title = "营养菜单";
        $rootScope.index = 1;


    }])
    .controller('AnswerController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
        $scope.title = "想吃啥？";
        $rootScope.index = 2;
        $http({
            url: 'api/answer.php',
            method: "get"
        }).then(function (info) {
            if (info.data) {

                $scope.items = info.data;
                var items1 = {};
                var items2 = {};
                var items3 = {};
                var items4 = {};

                for (var i = 0; i < $scope.items.length; i++) {
                    if (i % 4 == 0) {
                        items4[i] = $scope.items[i];
                    }
                    else if (i % 4 == 1) {
                        items1[i] = $scope.items[i];
                    }
                    else if (i % 4 == 2) {
                        items2[i] = $scope.items[i];
                    }
                    else if (i % 4 == 3) {
                        items3[i] = $scope.items[i];
                    }
                }
                $scope.items1 = items1;
                $scope.items2 = items2;
                $scope.items3 = items3;
                $scope.items4 = items4;
            }
        })

        //抽签
        $scope.answerClick = function () {
            $http({
                url: 'api/giveAnswer.php',
                method: "get"
            }).then(function (info) {
                $scope.answerName = info.data;
            })
        }

        //菜单滚动
        var items = document.getElementsByClassName("itemInner");
        var begin = document.getElementsByClassName("begin");
        var end = document.getElementsByClassName("end");
        itemsScroll(items,begin,end);

    }])









