(function() {

    "use strict";

    var trainingScheduleApp = angular.module('trainingScheduleApp', ['ui.router']);

    trainingScheduleApp.constant('VERSION', '0.1');

    trainingScheduleApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html'
            });
    });

    trainingScheduleApp.
    factory('DataSource', ['$http',function($http) {
        return {
            get: function(file,callback,transform) {
                $http.get(
                    file,
                    { transformResponse:transform }
                ).
                success(function(data, status) {
                    callback(data);
                }).
                error(function(data, status) {
                    console.log("Request failed " + status);
                });
           }       
        }
    }]);

    trainingScheduleApp.controller('appCtrl', ['$scope', 'DataSource', function($scope, DataSource) {
        
        $scope.ShowHide = function(index){
             $scope.num = index;
             console.log(index);
        };
        
        var SOURCE_FILE = "data/curriculums.xml";

        var xmlTransform = function(data) {
            var x2js = new X2JS();
            var json = x2js.xml_str2json( data );
            return json.Curriculums.Curriculum;
        };

        var setData = function(data) {

            for (var i = 0; i < data.length; i++) {
                var oneDay = 24*60*60*1000; 
                var today = new Date();
                var startDate = new Date(data[i].StartDate);

                if (startDate < today)
                {
                    data[i].DoneDays = Math.round(Math.abs((startDate.getTime() - today.getTime())/(oneDay)));
                    data[i].DoneWeeks = Math.round(Math.abs(data[i].DoneDays / 7));
                    data[i].RemainingDays = data[i].TotalDays - data[i].DoneDays;
                    data[i].RemainingWeeks = data[i].TotalWeeks - data[i].DoneWeeks;
                    data[i].PercentageDone = Math.round(Math.abs(data[i].DoneDays / data[i].TotalDays * 100)) + '%';
                }
                $scope.dailyProgram = data[i].DailyProgram;
            }

            $scope.dataSet = data;
        };

        DataSource.get(SOURCE_FILE,setData,xmlTransform);

    }]);

    trainingScheduleApp.filter('RemoveChar', function() {

        return function(input) {
            return input.replace(/_/g, " ");
        }

    });

}());
