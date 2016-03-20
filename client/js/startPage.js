var app = angular.module('startPage', ['ngRoute', 'ngTouch', 'ngStorage']);
app.controller('StartPageController', function($scope, $localStorage){

    $scope.$storage = $localStorage;
    $scope.task = {};

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
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateNumber() {
        return getRandomInt(0,100);
    }

    initLocalStorage();
    initTask();

    $('#nextButton').on('click', function () {
        reInitTask();
    });

    $('#checkButton').on('click', function () {
        var userResult = $('#userAnswerTaskResult').val();
        $('#userAnswerTaskResult').val('');
        var calculatedResult = $scope.task.number1 + $scope.task.number2;
        $scope.$apply(function(){
            $scope.task.result = calculatedResult;
            $scope.task.userResult = userResult;
        });

        $('#resultPlaceholder').hide();
        if(calculatedResult != userResult){
            $('.incorrectResult').show();
        }else{
            $('.incorrectResult').hide();
            $localStorage.correctSolvedCounter = $localStorage.correctSolvedCounter + 1;
        }
    });
});
