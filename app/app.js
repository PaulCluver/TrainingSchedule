(function() {

    "use strict";

    var trainingApp = angular.module('trainingApp', ['ui.router', 'ui.grid', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

    trainingApp.constant('VERSION', '0.1');

    trainingApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, $mdDateLocaleProvider) {

        $urlRouterProvider.otherwise('TrainingSchedule');
        $stateProvider
            .state('TrainingSchedule', {
                url: '/TrainingSchedule',
                controller: 'TrainingScheduleCtrl',
                templateUrl: 'partials/TrainingSchedule/TrainingSchedule.html'
            })
            .state('TrainingComments', {
                url: '/TrainingComments',
                controller: 'TrainingCommentsCtrl',
                templateUrl: 'partials/TrainingComments/TrainingComments.html'
            });

        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format('YYYY-MM-DD');
        };
    });

    trainingApp.controller('TrainingScheduleCtrl', ['$scope', '$http', 'uiGridConstants', function($scope, $http, uiGridConstants) {

        $http.get('data/curriculums.json')
            .success(function(data) {
                $scope.data = "[" + JSON.stringify(data) + "]";
            });

        $scope.gridOptions = {
            enableSorting: false,
            columnDefs: [
                { field: 'PrimaryAnimal', enableSorting: false, width: '20%' },
                { field: 'SecondaryAnimal', enableSorting: false, width: '20%' },
                { field: 'DailyProgram', enableSorting: false, width: '60%' }
            ],
            data: [{
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Moving_With_The_Force",
                "Bear_Rushing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Enfolding",
                "Bear_Penetrating_Windmill"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Turning_The_Back",
                "Bear_Withdrawing_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Bear_Carrying_Lying_Step"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Windmill",
                "Bear_Leaning_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Lying_Step",
                "Bear_Shocking_Enfolding"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Holding_And_Lifting",
                "Bear_Soft_Interlocking"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Enfolding",
                "Bear_Following_Windmill"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Phoenix_Dodging_Turning_The_Back"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Lying_Step",
                "Phoenix_Extending_Lying_Step"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Moving_With_The_Force",
                "Phoenix_Chopping_Interlocking"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Phoenix_Shocking_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Phoenix_Transforming_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Windmill",
                "Phoenix_Removing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Enfolding",
                "Phoenix_Curling_In_Enfolding"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Lying_Step",
                "Phoenix_Stabbing_Lying_Step"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Lying_Step",
                "Rooster_Dodging_Windmill"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Reversing_The_Body",
                "Rooster_Extending_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Turning_The_Back",
                "Rooster_Lifting_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Enfolding",
                "Rooster_Shifting_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Moving_With_The_Force",
                "Rooster_Entering_Interlocking"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Holding_And_Lifting",
                "Rooster_Whipping_Turning_The_Back"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Windmill",
                "Rooster_Rushing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Reversing_The_Body",
                "Rooster_Stabbing_Reversing_The_Body"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Dragon",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Pushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Dragon_Pushing_Straight",
                "Dragon_Pushing_Rotating",
                "Dragon_Pushing_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Dragon_Pushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Windmill",
                "Dragon_Pushing_Windmill"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Lifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Dragon_Lifting_Rotating",
                "Dragon_Lifting_Rising",
                "Dragon_Lifting_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Dragon_Lifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Turning_The_Back",
                "Dragon_Lifting_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Dragon_Carrying_Whirling",
                "Dragon_Carrying_Upper",
                "Dragon_Carrying_Lower"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Dragon_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Moving_With_The_Force",
                "Dragon_Carrying_Interlocking"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Leading_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Dragon_Leading_Upper",
                "Dragon_Leading_Lower",
                "Dragon_Leading_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Dragon_Leading_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Dragon_Leading_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Moving_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Dragon_Moving_Single_Hand",
                "Dragon_Moving_Reversing",
                "Dragon_Moving_Double_Hand"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Dragon_Moving_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Holding_And_Lifting",
                "Dragon_Moving_Turning_The_Back"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Capturing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Dragon_Capturing_Outside",
                "Dragon_Capturing_Inside",
                "Dragon_Capturing_Downward"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Dragon_Capturing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Lying_Step",
                "Dragon_Capturing_Lying_Step"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Dragon_Chopping_Upright",
                "Dragon_Chopping_Reversing",
                "Dragon_Chopping_Hacking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Dragon_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Enfolding",
                "Dragon_Chopping_Enfolding"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Dragon_Entering_Leading",
                "Dragon_Entering_Forcing",
                "Dragon_Entering_Borrowing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Dragon_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Holding_And_Lifting",
                "Dragon_Entering_Turning_The_Back"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Enfolding",
                "Bear_Rushing_Enfolding"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Holding_And_Lifting",
                "Bear_Penetrating_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Turning_The_Back",
                "Bear_Withdrawing_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Bear_Carrying_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Moving_With_The_Force",
                "Bear_Leaning_Interlocking"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Windmill",
                "Bear_Shocking_Windmill"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Lying_Step",
                "Bear_Soft_Lying_Step"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Windmill",
                "Bear_Following_Windmill"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Lying_Step",
                "Phoenix_Dodging_Lying_Step"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Enfolding",
                "Phoenix_Extending_Enfolding"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Moving_With_The_Force",
                "Phoenix_Chopping_Interlocking"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Windmill",
                "Phoenix_Shocking_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Reversing_The_Body",
                "Phoenix_Transforming_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Turning_The_Back",
                "Phoenix_Removing_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Holding_And_Lifting",
                "Phoenix_Curling_In_Turning_The_Back"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Moving_With_The_Force",
                "Phoenix_Stabbing_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Moving_With_The_Force",
                "Rooster_Dodging_Windmill"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Turning_The_Back",
                "Rooster_Extending_Enfolding"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Windmill",
                "Rooster_Lifting_Interlocking"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Rooster_Shifting_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Enfolding",
                "Rooster_Entering_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Lying_Step",
                "Rooster_Whipping_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Holding_And_Lifting",
                "Rooster_Rushing_Turning_The_Back"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Turning_The_Back",
                "Rooster_Stabbing_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Dragon",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Pushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Dragon_Pushing_Straight",
                "Dragon_Pushing_Rotating",
                "Dragon_Pushing_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Dragon_Pushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Dragon_Pushing_Interlocking"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Lifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Dragon_Lifting_Rotating",
                "Dragon_Lifting_Rising",
                "Dragon_Lifting_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Dragon_Lifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Turning_The_Back",
                "Dragon_Lifting_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Dragon_Carrying_Whirling",
                "Dragon_Carrying_Upper",
                "Dragon_Carrying_Lower"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Dragon_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Lying_Step",
                "Dragon_Carrying_Windmill"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Leading_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Dragon_Leading_Upper",
                "Dragon_Leading_Lower",
                "Dragon_Leading_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Dragon_Leading_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Enfolding",
                "Dragon_Leading_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Moving_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Dragon_Moving_Single_Hand",
                "Dragon_Moving_Reversing",
                "Dragon_Moving_Double_Hand"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Dragon_Moving_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Reversing_The_Body",
                "Dragon_Moving_Enfolding"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Capturing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Dragon_Capturing_Outside",
                "Dragon_Capturing_Inside",
                "Dragon_Capturing_Downward"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Dragon_Capturing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Windmill",
                "Dragon_Capturing_Lying_Step"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Dragon_Chopping_Upright",
                "Dragon_Chopping_Reversing",
                "Dragon_Chopping_Hacking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Dragon_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Dragon_Chopping_Turning_The_Back"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Dragon_Entering_Leading",
                "Dragon_Entering_Forcing",
                "Dragon_Entering_Borrowing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Dragon_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Windmill",
                "Dragon_Entering_Moving_With_The_Force"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Bear_Rushing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Turning_The_Back",
                "Bear_Penetrating_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Lying_Step",
                "Bear_Withdrawing_Lying_Step"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Enfolding",
                "Bear_Carrying_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Reversing_The_Body",
                "Bear_Leaning_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Windmill",
                "Bear_Shocking_Windmill"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Bear_Soft_Interlocking"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Windmill",
                "Bear_Following_Windmill"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Turning_The_Back",
                "Phoenix_Dodging_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Reversing_The_Body",
                "Phoenix_Extending_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Holding_And_Lifting",
                "Phoenix_Chopping_Turning_The_Back"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Phoenix_Shocking_Lying_Step"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Enfolding",
                "Phoenix_Transforming_Enfolding"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Windmill",
                "Phoenix_Removing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Phoenix_Curling_In_Interlocking"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Enfolding",
                "Phoenix_Stabbing_Enfolding"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Lying_Step",
                "Rooster_Dodging_Windmill"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Enfolding",
                "Rooster_Extending_Enfolding"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Holding_And_Lifting",
                "Rooster_Lifting_Turning_The_Back"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Rooster_Shifting_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Windmill",
                "Rooster_Entering_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Moving_With_The_Force",
                "Rooster_Whipping_Interlocking"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Turning_The_Back",
                "Rooster_Rushing_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Moving_With_The_Force",
                "Rooster_Stabbing_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Dragon",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Pushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Dragon_Pushing_Straight",
                "Dragon_Pushing_Rotating",
                "Dragon_Pushing_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Dragon_Pushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Enfolding",
                "Dragon_Pushing_Enfolding"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Lifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Dragon_Lifting_Rotating",
                "Dragon_Lifting_Rising",
                "Dragon_Lifting_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Dragon_Lifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Moving_With_The_Force",
                "Dragon_Lifting_Interlocking"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Dragon_Carrying_Whirling",
                "Dragon_Carrying_Upper",
                "Dragon_Carrying_Lower"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Dragon_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Lying_Step",
                "Dragon_Carrying_Lying_Step"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Leading_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Dragon_Leading_Upper",
                "Dragon_Leading_Lower",
                "Dragon_Leading_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Dragon_Leading_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Dragon_Leading_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Moving_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Dragon_Moving_Single_Hand",
                "Dragon_Moving_Reversing",
                "Dragon_Moving_Double_Hand"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Dragon_Moving_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Windmill",
                "Dragon_Moving_Windmill"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Capturing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Dragon_Capturing_Outside",
                "Dragon_Capturing_Inside",
                "Dragon_Capturing_Downward"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Dragon_Capturing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Turning_The_Back",
                "Dragon_Capturing_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Dragon_Chopping_Upright",
                "Dragon_Chopping_Reversing",
                "Dragon_Chopping_Hacking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Dragon_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Holding_And_Lifting",
                "Dragon_Chopping_Turning_The_Back"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Dragon_Entering_Leading",
                "Dragon_Entering_Forcing",
                "Dragon_Entering_Borrowing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Dragon_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Holding_And_Lifting",
                "Dragon_Entering_Turning_The_Back"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Reversing_The_Body",
                "Bear_Rushing_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Windmill",
                "Bear_Penetrating_Windmill"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Holding_And_Lifting",
                "Bear_Withdrawing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Bear_Carrying_Lying_Step"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Bear_Leaning_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Moving_With_The_Force",
                "Bear_Shocking_Interlocking"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Enfolding",
                "Bear_Soft_Enfolding"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Reversing_The_Body",
                "Bear_Following_Reversing_The_Body"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Turning_The_Back",
                "Phoenix_Dodging_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Reversing_The_Body",
                "Phoenix_Extending_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Lying_Step",
                "Phoenix_Chopping_Lying_Step"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Enfolding",
                "Phoenix_Shocking_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Holding_And_Lifting",
                "Phoenix_Transforming_Turning_The_Back"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Moving_With_The_Force",
                "Phoenix_Removing_Interlocking"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Windmill",
                "Phoenix_Curling_In_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Moving_With_The_Force",
                "Phoenix_Stabbing_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Moving_With_The_Force",
                "Rooster_Dodging_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Holding_And_Lifting",
                "Rooster_Extending_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Lying_Step",
                "Rooster_Lifting_Windmill"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Rooster_Shifting_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Windmill",
                "Rooster_Entering_Turning_The_Back"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Turning_The_Back",
                "Rooster_Whipping_Interlocking"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Enfolding",
                "Rooster_Rushing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Windmill",
                "Rooster_Stabbing_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Dragon",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Pushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Dragon_Pushing_Straight",
                "Dragon_Pushing_Rotating",
                "Dragon_Pushing_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Dragon_Pushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Dragon_Pushing_Interlocking"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Lifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Dragon_Lifting_Rotating",
                "Dragon_Lifting_Rising",
                "Dragon_Lifting_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Dragon_Lifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Windmill",
                "Dragon_Lifting_Turning_The_Back"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Dragon_Carrying_Whirling",
                "Dragon_Carrying_Upper",
                "Dragon_Carrying_Lower"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Dragon_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Reversing_The_Body",
                "Dragon_Carrying_Lying_Step"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Leading_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Dragon_Leading_Upper",
                "Dragon_Leading_Lower",
                "Dragon_Leading_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Dragon_Leading_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Dragon_Leading_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Moving_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Dragon_Moving_Single_Hand",
                "Dragon_Moving_Reversing",
                "Dragon_Moving_Double_Hand"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Dragon_Moving_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Dragon_Moving_Windmill"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Capturing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Dragon_Capturing_Outside",
                "Dragon_Capturing_Inside",
                "Dragon_Capturing_Downward"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Dragon_Capturing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Enfolding",
                "Dragon_Capturing_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Dragon_Chopping_Upright",
                "Dragon_Chopping_Reversing",
                "Dragon_Chopping_Hacking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Dragon_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Dragon_Chopping_Enfolding"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Dragon_Entering_Leading",
                "Dragon_Entering_Forcing",
                "Dragon_Entering_Borrowing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Dragon_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Reversing_The_Body",
                "Dragon_Entering_Windmill"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Bear_Rushing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Windmill",
                "Bear_Penetrating_Windmill"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Reversing_The_Body",
                "Bear_Withdrawing_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Bear_Carrying_Lying_Step"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Bear_Leaning_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Enfolding",
                "Bear_Shocking_Enfolding"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Bear_Soft_Interlocking"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Reversing_The_Body",
                "Bear_Following_Reversing_The_Body"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Reversing_The_Body",
                "Phoenix_Dodging_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Windmill",
                "Phoenix_Extending_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Enfolding",
                "Phoenix_Chopping_Enfolding"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Phoenix_Shocking_Lying_Step"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Phoenix_Transforming_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Holding_And_Lifting",
                "Phoenix_Removing_Turning_The_Back"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Phoenix_Curling_In_Interlocking"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Enfolding",
                "Phoenix_Stabbing_Enfolding"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Windmill",
                "Rooster_Dodging_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Moving_With_The_Force",
                "Rooster_Extending_Interlocking"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Reversing_The_Body",
                "Rooster_Lifting_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Rooster_Shifting_Windmill"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Rooster_Entering_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Enfolding",
                "Rooster_Whipping_Enfolding"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Holding_And_Lifting",
                "Rooster_Rushing_Turning_The_Back"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Windmill",
                "Rooster_Stabbing_Holding_And_Lifting"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Dragon",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Pushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Dragon_Pushing_Straight",
                "Dragon_Pushing_Rotating",
                "Dragon_Pushing_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Dragon_Pushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Enfolding",
                "Dragon_Pushing_Windmill"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Lifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Dragon_Lifting_Rotating",
                "Dragon_Lifting_Rising",
                "Dragon_Lifting_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Dragon_Lifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Turning_The_Back",
                "Dragon_Lifting_Interlocking"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Dragon_Carrying_Whirling",
                "Dragon_Carrying_Upper",
                "Dragon_Carrying_Lower"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Dragon_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Reversing_The_Body",
                "Dragon_Carrying_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Leading_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Dragon_Leading_Upper",
                "Dragon_Leading_Lower",
                "Dragon_Leading_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Dragon_Leading_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Dragon_Leading_Lying_Step"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Moving_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Dragon_Moving_Single_Hand",
                "Dragon_Moving_Reversing",
                "Dragon_Moving_Double_Hand"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Dragon_Moving_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Moving_With_The_Force",
                "Dragon_Moving_Interlocking"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Capturing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Dragon_Capturing_Outside",
                "Dragon_Capturing_Inside",
                "Dragon_Capturing_Downward"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Dragon_Capturing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Windmill",
                "Dragon_Capturing_Enfolding"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Dragon_Chopping_Upright",
                "Dragon_Chopping_Reversing",
                "Dragon_Chopping_Hacking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Dragon_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Holding_And_Lifting",
                "Dragon_Chopping_Turning_The_Back"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Dragon_Entering_Leading",
                "Dragon_Entering_Forcing",
                "Dragon_Entering_Borrowing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Dragon_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Lying_Step",
                "Dragon_Entering_Windmill"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Turning_The_Back",
                "Bear_Rushing_Enfolding"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Windmill",
                "Bear_Penetrating_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Moving_With_The_Force",
                "Bear_Withdrawing_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Enfolding",
                "Bear_Carrying_Lying_Step"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Holding_And_Lifting",
                "Bear_Leaning_Interlocking"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Lying_Step",
                "Bear_Shocking_Windmill"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Reversing_The_Body",
                "Bear_Soft_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Reversing_The_Body",
                "Bear_Following_Lying_Step"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Moving_With_The_Force",
                "Phoenix_Dodging_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Enfolding",
                "Phoenix_Extending_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Reversing_The_Body",
                "Phoenix_Chopping_Interlocking"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Windmill",
                "Phoenix_Shocking_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Phoenix_Transforming_Turning_The_Back"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Holding_And_Lifting",
                "Phoenix_Removing_Lying_Step"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Lying_Step",
                "Phoenix_Curling_In_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Holding_And_Lifting",
                "Phoenix_Stabbing_Reversing_The_Body"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Moving_With_The_Force",
                "Rooster_Dodging_Interlocking"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Enfolding",
                "Rooster_Extending_Enfolding"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Reversing_The_Body",
                "Rooster_Lifting_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Windmill",
                "Rooster_Shifting_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Rooster_Entering_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Holding_And_Lifting",
                "Rooster_Whipping_Turning_The_Back"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Lying_Step",
                "Rooster_Rushing_Windmill"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Holding_And_Lifting",
                "Rooster_Stabbing_Turning_The_Back"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Dragon",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Pushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Dragon_Pushing_Straight",
                "Dragon_Pushing_Rotating",
                "Dragon_Pushing_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Dragon_Pushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Windmill",
                "Dragon_Pushing_Windmill"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Lifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Dragon_Lifting_Rotating",
                "Dragon_Lifting_Rising",
                "Dragon_Lifting_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Dragon_Lifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Moving_With_The_Force",
                "Dragon_Lifting_Interlocking"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Dragon_Carrying_Whirling",
                "Dragon_Carrying_Upper",
                "Dragon_Carrying_Lower"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Dragon_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Turning_The_Back",
                "Dragon_Carrying_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Leading_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Dragon_Leading_Upper",
                "Dragon_Leading_Lower",
                "Dragon_Leading_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Dragon_Leading_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Enfolding",
                "Dragon_Leading_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Moving_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Dragon_Moving_Single_Hand",
                "Dragon_Moving_Reversing",
                "Dragon_Moving_Double_Hand"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Dragon_Moving_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Holding_And_Lifting",
                "Dragon_Moving_Turning_The_Back"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Capturing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Dragon_Capturing_Outside",
                "Dragon_Capturing_Inside",
                "Dragon_Capturing_Downward"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Dragon_Capturing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Lying_Step",
                "Dragon_Capturing_Lying_Step"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Dragon_Chopping_Upright",
                "Dragon_Chopping_Reversing",
                "Dragon_Chopping_Hacking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Dragon_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Reversing_The_Body",
                "Dragon_Chopping_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Dragon_Entering_Leading",
                "Dragon_Entering_Forcing",
                "Dragon_Entering_Borrowing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Dragon_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Windmill",
                "Dragon_Entering_Windmill"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Bear_Rushing_Windmill"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Lying_Step",
                "Bear_Penetrating_Interlocking"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Enfolding",
                "Bear_Withdrawing_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Windmill",
                "Bear_Carrying_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Reversing_The_Body",
                "Bear_Leaning_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Moving_With_The_Force",
                "Bear_Shocking_Lying_Step"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Turning_The_Back",
                "Bear_Soft_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Moving_With_The_Force",
                "Bear_Following_Windmill"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Lying_Step",
                "Phoenix_Dodging_Turning_The_Back"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Reversing_The_Body",
                "Phoenix_Extending_Lying_Step"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Moving_With_The_Force",
                "Phoenix_Chopping_Enfolding"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Windmill",
                "Phoenix_Shocking_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Enfolding",
                "Phoenix_Transforming_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Turning_The_Back",
                "Phoenix_Removing_Interlocking"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Holding_And_Lifting",
                "Phoenix_Curling_In_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Turning_The_Back",
                "Phoenix_Stabbing_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Moving_With_The_Force",
                "Rooster_Dodging_Interlocking"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Enfolding",
                "Rooster_Extending_Enfolding"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Holding_And_Lifting",
                "Rooster_Lifting_Turning_The_Back"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Rooster_Shifting_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Lying_Step",
                "Rooster_Entering_Windmill"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Windmill",
                "Rooster_Whipping_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Turning_The_Back",
                "Rooster_Rushing_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Windmill",
                "Rooster_Stabbing_Holding_And_Lifting"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Dragon",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Pushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Dragon_Pushing_Straight",
                "Dragon_Pushing_Rotating",
                "Dragon_Pushing_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Dragon_Pushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Enfolding",
                "Dragon_Pushing_Enfolding"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Lifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Dragon_Lifting_Rotating",
                "Dragon_Lifting_Rising",
                "Dragon_Lifting_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Dragon_Lifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Holding_And_Lifting",
                "Dragon_Lifting_Turning_The_Back"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Dragon_Carrying_Whirling",
                "Dragon_Carrying_Upper",
                "Dragon_Carrying_Lower"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Dragon_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Moving_With_The_Force",
                "Dragon_Carrying_Interlocking"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Leading_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Dragon_Leading_Upper",
                "Dragon_Leading_Lower",
                "Dragon_Leading_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Dragon_Leading_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Dragon_Leading_Lying_Step"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Moving_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Dragon_Moving_Single_Hand",
                "Dragon_Moving_Reversing",
                "Dragon_Moving_Double_Hand"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Dragon_Moving_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Reversing_The_Body",
                "Dragon_Moving_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Capturing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Dragon_Capturing_Outside",
                "Dragon_Capturing_Inside",
                "Dragon_Capturing_Downward"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Dragon_Capturing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Windmill",
                "Dragon_Capturing_Windmill"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Dragon_Chopping_Upright",
                "Dragon_Chopping_Reversing",
                "Dragon_Chopping_Hacking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Dragon_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Turning_The_Back",
                "Dragon_Chopping_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Dragon_Entering_Leading",
                "Dragon_Entering_Forcing",
                "Dragon_Entering_Borrowing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Dragon_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Enfolding",
                "Dragon_Entering_Enfolding"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Turning_The_Back",
                "Bear_Rushing_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Lying_Step",
                "Bear_Penetrating_Lying_Step"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Holding_And_Lifting",
                "Bear_Withdrawing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Enfolding",
                "Bear_Carrying_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Windmill",
                "Bear_Leaning_Windmill"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Reversing_The_Body",
                "Bear_Shocking_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Bear_Soft_Interlocking"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Moving_With_The_Force",
                "Bear_Following_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Lying_Step",
                "Phoenix_Dodging_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Enfolding",
                "Phoenix_Extending_Lying_Step"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Holding_And_Lifting",
                "Phoenix_Chopping_Turning_The_Back"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Phoenix_Shocking_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Turning_The_Back",
                "Phoenix_Transforming_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Moving_With_The_Force",
                "Phoenix_Removing_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Windmill",
                "Phoenix_Curling_In_Interlocking"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Holding_And_Lifting",
                "Phoenix_Stabbing_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Rooster_Dodging_Windmill"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Turning_The_Back",
                "Rooster_Extending_Enfolding"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Windmill",
                "Rooster_Lifting_Turning_The_Back"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Rooster_Shifting_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Lying_Step",
                "Rooster_Entering_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Enfolding",
                "Rooster_Whipping_Interlocking"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Rooster_Rushing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Reversing_The_Body",
                "Rooster_Stabbing_Turning_The_Back"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Dragon",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Pushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Dragon_Pushing_Straight",
                "Dragon_Pushing_Rotating",
                "Dragon_Pushing_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Dragon_Pushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Dragon_Pushing_Turning_The_Back"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Lifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Dragon_Lifting_Rotating",
                "Dragon_Lifting_Rising",
                "Dragon_Lifting_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Dragon_Lifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Turning_The_Back",
                "Dragon_Lifting_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Dragon_Carrying_Whirling",
                "Dragon_Carrying_Upper",
                "Dragon_Carrying_Lower"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Dragon_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Windmill",
                "Dragon_Carrying_Windmill"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Leading_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Dragon_Leading_Upper",
                "Dragon_Leading_Lower",
                "Dragon_Leading_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Dragon_Leading_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Reversing_The_Body",
                "Dragon_Leading_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Moving_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Dragon_Moving_Single_Hand",
                "Dragon_Moving_Reversing",
                "Dragon_Moving_Double_Hand"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Dragon_Moving_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Lying_Step",
                "Dragon_Moving_Lying_Step"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Capturing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Dragon_Capturing_Outside",
                "Dragon_Capturing_Inside",
                "Dragon_Capturing_Downward"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Dragon_Capturing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Enfolding",
                "Dragon_Capturing_Enfolding"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Dragon_Chopping_Upright",
                "Dragon_Chopping_Reversing",
                "Dragon_Chopping_Hacking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Dragon_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Moving_With_The_Force",
                "Dragon_Chopping_Interlocking"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Dragon_Representative_Posture",
                "Dragon_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Dragon_Entering_Leading",
                "Dragon_Entering_Forcing",
                "Dragon_Entering_Borrowing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Dragon_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Reversing_The_Body",
                "Dragon_Entering_Reversing_The_Body"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Bear",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Bear_Representative_Posture",
                "Bear_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing",
                "Bear_Rushing_Stamping",
                "Bear_Rushing_Piercing",
                "Bear_Rushing_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Bear_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Lying_Step",
                "Bear_Rushing_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Bear_Representative_Posture",
                "Bear_Penetrating_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside",
                "Bear_Penetrating_Upper",
                "Bear_Penetrating_Lower",
                "Bear_Penetrating_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Bear_Penetrating_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Enfolding",
                "Bear_Penetrating_Windmill"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Bear_Representative_Posture",
                "Bear_Withdrawing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing",
                "Bear_Withdrawing_Removing",
                "Bear_Withdrawing_Entering",
                "Bear_Withdrawing_Back_Step"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Bear_Withdrawing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Turning_The_Back",
                "Bear_Withdrawing_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Bear_Representative_Posture",
                "Bear_Carrying_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low",
                "Bear_Carrying_Upper",
                "Bear_Carrying_Lower",
                "Bear_Carrying_Horizontal"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Bear_Carrying_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Windmill",
                "Bear_Carrying_Enfolding"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Leaning_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body",
                "Bear_Leaning_Rushing",
                "Bear_Leaning_Popping_Rib",
                "Bear_Leaning_Penetrating_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Bear_Leaning_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Moving_With_The_Force",
                "Bear_Leaning_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Bear_Representative_Posture",
                "Bear_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking",
                "Bear_Shocking_Turning",
                "Bear_Shocking_Pounding",
                "Bear_Shocking_Back"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Bear_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Holding_And_Lifting",
                "Bear_Shocking_Interlocking"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Bear_Representative_Posture",
                "Bear_Soft_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling",
                "Bear_Soft_Transforming",
                "Bear_Soft_Revolving",
                "Bear_Soft_Grinding"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Bear_Soft_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Reversing_The_Body",
                "Bear_Soft_Lying_Step"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Bear_Representative_Posture",
                "Bear_Following_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling",
                "Bear_Following_Soft",
                "Bear_Following_Seperating",
                "Bear_Following_Covering"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Bear_Following_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Windmill",
                "Bear_Following_Interlocking"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Phoenix",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Dodging_Whirling",
                "Phoenix_Dodging_Opening",
                "Phoenix_Dodging_Arcing",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Phoenix_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Enfolding",
                "Phoenix_Dodging_Lying_Step"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Extending_Inside",
                "Phoenix_Extending_Horizontal",
                "Phoenix_Extending_Dropping",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Phoenix_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Turning_The_Back",
                "Phoenix_Extending_Enfolding"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Chopping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Chopping_Upright",
                "Phoenix_Chopping_Swinging",
                "Phoenix_Chopping_Arcing",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Phoenix_Chopping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Windmill",
                "Phoenix_Chopping_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Shocking_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Shocking_Whipping",
                "Phoenix_Shocking_Upright",
                "Phoenix_Shocking_Pulling",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Phoenix_Shocking_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Lying_Step",
                "Phoenix_Shocking_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Transforming_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Transforming_Rolling",
                "Phoenix_Transforming_Forcing",
                "Phoenix_Transforming_Flowing",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Phoenix_Transforming_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Moving_With_The_Force",
                "Phoenix_Transforming_Interlocking"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Removing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Removing_Pressing",
                "Phoenix_Removing_Flowing",
                "Phoenix_Removing_Dropping",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Phoenix_Removing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Holding_And_Lifting",
                "Phoenix_Removing_Turning_The_Back"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_CurlingIn_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Curling_In_Fist_Curling_In",
                "Phoenix_Curling_In_Elbow_Curling_In",
                "Phoenix_Curling_In_Body_Curling_In",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Phoenix_Curling_In_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Reversing_The_Body",
                "Phoenix_Curling_In_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Phoenix_Representative_Posture",
                "Phoenix_Stabbing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Phoenix_Stabbing_Penetrating",
                "Phoenix_Stabbing_Hooked",
                "Phoenix_Stabbing_Entering",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Phoenix_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Reversing_The_Body",
                "Phoenix_Stabbing_Holding_And_Lifting"
            ]
        }
    }]
}, {
    "PrimaryAnimal": "Lion",
    "SecondaryAnimal": "Rooster",
    "DailyProgram": [{
        "Day": "1",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Sweeping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Dodging_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Dodging_Whirling_Body",
                "Rooster_Dodging_Moving_with_the_Force",
                "Rooster_Dodging_Lying",
                "Lion_Sweeping_Rising",
                "Lion_Sweeping_Inside",
                "Lion_Sweeping_Capturing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Sweeping_Turning",
                "Rooster_Dodging_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Sweeping_Holding_And_Lifting",
                "Rooster_Dodging_Enfolding"
            ]
        }
    }, {
        "Day": "2",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Cutting_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Shifting_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Extending_3",
                "Rooster_Extending_2",
                "Rooster_Extending_1",
                "Lion_Cutting_Rising",
                "Lion_Cutting_Point",
                "Lion_Cutting_Inside"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Cutting_Turning",
                "Rooster_Shifting_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Cutting_Windmill",
                "Rooster_Extending_Moving_With_The_Force"
            ]
        }
    }, {
        "Day": "3",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Chopping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Entering_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Whipping_3",
                "Rooster_Whipping_2",
                "Rooster_Whipping_1",
                "Lion_Chopping_Straight",
                "Lion_Chopping_Hacking",
                "Lion_Chopping_Arcing"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Chopping_Turning",
                "Rooster_Entering_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Chopping_Reversing_The_Body",
                "Rooster_Lifting_Holding_And_Lifting"
            ]
        }
    }, {
        "Day": "4",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Hooking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rising_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rushing_3",
                "Rooster_Rushing_2",
                "Rooster_Rushing_1",
                "Lion_Hooking_Severing",
                "Lion_Hooking_Opening",
                "Lion_Hooking_Low"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Hooking_Turning",
                "Rooster_Rising_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Hooking_Enfolding",
                "Rooster_Shifting_Windmill"
            ]
        }
    }, {
        "Day": "5",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Shocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Rushing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Stabbing_3",
                "Rooster_Stabbing_2",
                "Rooster_Stabbing_1",
                "Lion_Shocking_Straight",
                "Lion_Shocking_Rolling",
                "Lion_Shocking_Returning_the_Body"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Shocking_Turning",
                "Rooster_Extending_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Shocking_Moving_With_The_Force",
                "Rooster_Entering_Interlocking"
            ]
        }
    }, {
        "Day": "6",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Blocking_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Extending_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Shifting_Whirling_Body",
                "Rooster_Shifting_Grinding",
                "Rooster_Shifting_Closing",
                "Lion_Blocking_Upward",
                "Lion_Blocking_Downward",
                "Lion_Blocking_Breaking"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Blocking_Turning",
                "Rooster_Rushing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Blocking_Lying_Step",
                "Rooster_Whipping_Turning_The_Back"
            ]
        }
    }, {
        "Day": "7",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Seizing_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Whipping_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Entering_Wiping",
                "Rooster_Entering_Lying",
                "Rooster_Entering_Fist",
                "Lion_Seizing_Uprooting",
                "Lion_Seizing_Harvesting",
                "Lion_Seizing_Curling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Seizing_Turning",
                "Rooster_Whipping_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Seizing_Turning_The_Back",
                "Rooster_Rushing_Reversing_The_Body"
            ]
        }
    }, {
        "Day": "8",
        "Standing": {
            "Method": [
                "Lion_Representative_Posture",
                "Lion_Grasping_Posture",
                "Rooster_Representative_Posture",
                "Rooster_Stabing_Posture"
            ]
        },
        "Striking": {
            "Method": [
                "Rooster_Rising_Whirling",
                "Rooster_Rising_Single_Hand",
                "Rooster_Rising_Lying_Dodging",
                "Lion_Grasping_Snapping",
                "Lion_Grasping_Plucking",
                "Lion_Grasping_Hurling"
            ]
        },
        "Turning": {
            "Method": [
                "Lion_Grasping_Turning",
                "Rooster_Stabbing_Turning"
            ]
        },
        "Changing": {
            "Method": [
                "Lion_Grasping_Enfolding",
                "Rooster_Stabbing_Reversing_The_Body"
            ]
        }
    }]
}]


        };





    }]);

    trainingApp.controller('TrainingCommentsCtrl', ['$scope', function($scope) {


    }]);

    trainingApp.filter('RemoveChar', function() {

        return function(input) {
            return input.replace(/_/g, " ");
        }

    });

}());
