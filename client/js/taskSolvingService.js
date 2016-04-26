var module = angular.module('taskSolvingModule',[ ]);
function TaskSolvingService(){

    this.solveTask = function(task){
        return task.number1 + task.number2;
    };

    return{
        solveTask: this.solveTask
    };
};
module.factory('taskSolvingService', TaskSolvingService);

