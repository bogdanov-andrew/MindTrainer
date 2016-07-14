var module = angular.module('taskGenerationModule',[ ]);

function TaskGenerationService() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateNumber() {
        return getRandomInt(0, 100);
    }

    function getOperandsNumber() {
        return getRandomInt(2, 4);
    }

    this.generateTask = function() {

        var taskDescription = null;
        for (var i = 0; i < getOperandsNumber(); i++) {
            if (taskDescription == null) {
                taskDescription = generateNumber();
            } else {
                taskDescription += '+' + generateNumber();
            }
        }

        var task = {
            taskDescription: taskDescription
        };

        return task;
    };

    return {
         generateTask: this.generateTask
    };
};

module.factory('taskGenerationService', TaskGenerationService);

