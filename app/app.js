(function() {

    "use strict";

    var trainingScheduleApp = angular.module('trainingScheduleApp', ['ui.router', 'dataGrid', 'pagination', 'ngMaterial']);

    trainingScheduleApp.constant('VERSION', '0.1');

    trainingScheduleApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $mdDateLocaleProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html'
            });

        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format('YYYY-MM-DD');
        };
    });

    trainingScheduleApp.factory('DataSource', ['$http', function($http) {
        return {
            get: function(file, callback, transform) {
                $http.get(
                    file, { transformResponse: transform }
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

    trainingScheduleApp.controller('appCtrl', ['$scope', '$mdDialog', 'DataSource', function($scope, $mdDialog, DataSource) {

        $scope.gridOptions = {
            data: [],
            urlSync: false
        };

        $scope.statuses = [
            { id: 1, name: 'In Progress' },
            { id: 2, name: 'Not Started' },
            { id: 3, name: 'Completed' }
        ];

        $scope.selectedStatus = { id: 1, name: 'In Progress' };

        var SOURCE_FILE = "data/curriculums.xml";

        var xmlTransform = function(data) {
            var x2js = new X2JS();
            var json = x2js.xml_str2json(data);
            return json.Curriculums.Curriculum;
        };

        var setData = function(data) {

            for (var i = 0; i < data.length; i++) {
                var today = new moment().format('YYYY-MM-DD');

                data[i].ID = i + 1;
                data[i].StartDate = getStartDate(i);
                data[i].EndDate = getEndDate(i);

                data[i].Status = getStatus();
                var start = new moment(data[i].StartDate);
                var end = new moment(data[i].EndDate);

                data[i].TotalDays = end.diff(start, 'days');
                data[i].TotalWeeks = Math.round(data[i].TotalDays / 7);
                data[i].DoneDays = getDoneDays();
                data[i].DoneWeeks = Math.round(Math.abs(data[i].DoneDays / 7));
                data[i].RemainingDays = data[i].TotalDays - data[i].DoneDays;
                data[i].RemainingWeeks = data[i].TotalWeeks - data[i].DoneWeeks;
                data[i].PercentageDone = Math.round(Math.abs(data[i].DoneDays / data[i].TotalDays * 100)) + '%';

                $scope.gridOptions.data.dailyProgramData = data[i].DailyProgram;
            }

            $scope.gridOptions.data = data;
            $scope.showDialog = showDialog;

            function getStartDate(id) {
                if (id == 0) {
                    return new moment("2016-09-01").format('YYYY-MM-DD');
                } else {
                    return new moment(data[id - 1].EndDate).add(1, 'days').format('YYYY-MM-DD');
                }
            }

            function getEndDate(id) {
                return new moment(data[id].StartDate).add(6, 'months').subtract(1, 'days').format('YYYY-MM-DD');
            }

            function getDoneDays() {
                var result = 0;
                var today = new moment();

                if (start < today) {
                    var remainingDays = end.diff(today, 'days');
                    result = data[i].TotalDays - remainingDays;
                }

                return result;
            }

            function getStatus() {
                var result = "Not Started";

                if (data[i].StartDate < today) {
                    result = "In Progress"
                }

                if (data[i].EndDate < today) {
                    result = "Completed"
                }

                return result;
            }

            function showDialog($event, id) {
                var parentEl = angular.element(document.body);
                $scope.id = id - 1;
                $mdDialog.show({
                    parent: parentEl,
                    targetEvent: $event,
                    template: '<style> .parentContainer { display: flex } .parentContainer > div { flex: 1 } </style><md-dialog aria-label="List dialog">' +
                        '  <md-dialog-content>' +
                        '   <md-list>' +
                        '      <md-list-item ng-repeat="item in items">' +

                        '       <div class=\'parentContainer\'>' +

                        '       <div class=\'childContainer\'>' +
                        '       <md-list>' +
                        '       <strong>DAY</strong><br />' +
                        '        {{ item[\'Day\']}}   ' +
                        '       </md-list>' +
                        '       </div>' +

                        '       <div class=\'childContainer\'>' +
                        '       <md-list>' +
                        '       <strong>STANDING</strong>' +
                        '           <md-list-item ng-repeat="method in item[\'Standing\'][\'Method\']">' +
                        '               <span>{{method | RemoveChar}}</span>' +
                        '           </md-list-item>' +
                        '       </md-list>' +
                        '       </div>' +

                        '       <div class=\'childContainer\'>' +
                        '       <md-list>' +
                        '       <strong>STRIKING</strong>' +
                        '           <md-list-item ng-repeat="method in item[\'Striking\'][\'Method\']">' +
                        '               {{method | RemoveChar}}' +
                        '           </md-list-item>' +
                        '       </md-list>' +
                        '       </div>' +

                        '       <div class=\'childContainer\'>' +
                        '       <md-list>' +
                        '       <strong>TURNING</strong>' +
                        '           <md-list-item ng-repeat="method in item[\'Turning\'][\'Method\']">' +
                        '               {{method | RemoveChar}}' +
                        '           </md-list-item>' +
                        '       </md-list>' +
                        '       </div>' +

                        '       <div class=\'childContainer\'>' +
                        '       <md-list>' +
                        '       <strong>CHANGING</strong>' +
                        '           <md-list-item ng-repeat="method in item[\'Changing\'][\'Method\']">' +
                        '               {{method | RemoveChar}}' +
                        '           </md-list-item>' +
                        '       </md-list>' +
                        '       </div>' +

                        '       </div>' +
                        '      </md-list-item>' +
                        '   </md-list>' +
                        '  </md-dialog-content>' +
                        '  <md-dialog-actions>' +
                        '    <md-button ng-click="closeDialog()" class="md-primary">' +
                        '      Close Dialog' +
                        '    </md-button>' +
                        '  </md-dialog-actions>' +
                        '</md-dialog>',
                    locals: {
                        items: $scope.gridOptions.data[$scope.id].DailyProgram,
                        id: $scope.id
                    },
                    controller: DialogController
                });

                function DialogController($scope, $mdDialog, items, id) {
                    $scope.items = items;
                    $scope.id = id;
                    $scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                }
            }
        };

        DataSource.get(SOURCE_FILE, setData, xmlTransform);


    }]);

    trainingScheduleApp.filter('RemoveChar', function() {

        return function(input) {
            return input.replace(/_/g, " ");
        }

    });

}());
