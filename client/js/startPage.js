var app = angular.module('startPage', ['ngRoute', 'ngTouch', 'NumericKeyboardDirective', 'taskGenerationModule', 'taskSolvingModule', 'taskStatisticsModule', 'achievementModule']);
app.controller('StartPageController', function($scope, taskGenerationService, taskSolvingService, taskStatisticsService, achievementService){
    $scope.statistics = taskStatisticsService.getStatistics();
    $scope.achievements = achievementService.getCurrentLevel();
    $scope.task = {};
    $scope.inputedResultElement = function() { return $('#inputedResult'); };
    $scope.nextButtonElement = function() { return $('#nextButton'); };
    $scope.checkButtonElement = function() { return $('#checkButton'); };

    function updateStatistics() {
        $scope.statistics = taskStatisticsService.getStatistics();
        $scope.level = achievementService.getCurrentLevel();
        $scope.achievements = achievementService.getCurrentLevel();
    }

    function reInitTask(){
        $scope.$apply(function(){
            initTask();
        });
    }

    function initTask(){
        taskStatisticsService.incrementGeneralCounter();
        updateStatistics();
        $scope.task = taskGenerationService.generateTask();
        clearInputedNumber();
        $scope.nextButtonElement().hide();
        $scope.checkButtonElement().show();
    }

    function clearInputedNumber() {
        $scope.inputedResultElement().text('');
    }

    taskStatisticsService.initService();
    initTask();

    $scope.nextButtonElement().on('click', function () {
        reInitTask();
    });

    $scope.checkButtonElement().on('click', function () {
        var userResult = $scope.inputedResultElement().text();
        clearInputedNumber();
        var calculatedResult = taskSolvingService.solveTask($scope.task);
        $scope.$apply(function(){
            $scope.task.result = calculatedResult;
            $scope.task.userResult = userResult;
        });

        if(calculatedResult != userResult){
            $('.incorrectResult').show();
        }else{
            $('.incorrectResult').hide();
            taskStatisticsService.incrementCorrectSolvedCounter();
        }

        $scope.nextButtonElement().show();
        $scope.checkButtonElement().hide();
    });
});
