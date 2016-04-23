var app = angular.module('startPage', ['ngRoute', 'ngTouch', 'ngStorage', 'NumericKeyboardDirective']);
app.controller('StartPageController', function($scope, $localStorage){

    $scope.$storage = $localStorage;
    $scope.task = {};
    $scope.inputedResultElement = function() { return $('#inputedResult'); };
    $scope.nextButtonElement = function() { return $('#nextButton'); };
    $scope.checkButtonElement = function() { return $('#checkButton'); };

    function initLocalStorage(){
        if($localStorage.counter == undefined ){
            $localStorage.counter = 0;
        }

        if($localStorage.correctSolvedCounter == undefined ){
            $localStorage.correctSolvedCounter = 0;
        }
    }

    function reInitTask(){
        $scope.$apply(function(){
            initTask();
        });
    }

    function initTask(){
        $localStorage.counter = $localStorage.counter + 1;
        $scope.task = {number1: generateNumber(), operatorSign: '+', number2: generateNumber()};
        clearInputedNumber();
        $scope.nextButtonElement().hide();
        $scope.checkButtonElement().show();
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateNumber() {
        return getRandomInt(0,100);
    }

    function clearInputedNumber() {
        $scope.inputedResultElement().text('');
    }

    initLocalStorage();
    initTask();

    $scope.nextButtonElement().on('click', function () {
        reInitTask();
    });

    $scope.checkButtonElement().on('click', function () {
        var userResult = $scope.inputedResultElement().text();
        clearInputedNumber();
        var calculatedResult = $scope.task.number1 + $scope.task.number2;
        $scope.$apply(function(){
            $scope.task.result = calculatedResult;
            $scope.task.userResult = userResult;
        });

        if(calculatedResult != userResult){
            $('.incorrectResult').show();
        }else{
            $('.incorrectResult').hide();
            $localStorage.correctSolvedCounter = $localStorage.correctSolvedCounter + 1;
        }

        $scope.nextButtonElement().show();
        $scope.checkButtonElement().hide();
    });
});
