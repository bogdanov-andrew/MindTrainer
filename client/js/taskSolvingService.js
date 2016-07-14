var module = angular.module('taskSolvingModule',[ ]);
function TaskSolvingService(){

    this.solveTask = function(task){
        return eval(task);
    };

    return {
        solveTask: this.solveTask
    };
};
module.factory('taskSolvingService', TaskSolvingService);

