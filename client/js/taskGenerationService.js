var module = angular.module('taskGenerationModule',[ ]);
function TaskGenerationService(){

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateNumber() {
        return getRandomInt(0,100);
    }

    this.generateTask = function(){
        var task = {number1: generateNumber(), operatorSign: '+', number2: generateNumber()};
        return task;
    };

    return{
        generateTask: this.generateTask
    };
};
module.factory('taskGenerationService', TaskGenerationService);

