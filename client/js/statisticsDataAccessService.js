var module = angular.module('statisticsDataAccessModule',[ 'ngStorage' ]);
function StatisticsDataAccessService($localStorage){

    this.getGeneralCounterValue = function () {
        return $localStorage.counter;
    };

    this.setGeneralCounterValue = function (value) {
        $localStorage.counter = value;
    };

    this.getCorrectSolvedCounter = function () {
        return $localStorage.correctSolvedCounter;
    };

    this.setCorrectSolvedCounter = function (value) {
        $localStorage.correctSolvedCounter = value;
    };

    return{
        initService: this.initService,
        getGeneralCounterValue: this.getGeneralCounterValue,
        setGeneralCounterValue: this.setGeneralCounterValue,
        getCorrectSolvedCounter: this.getCorrectSolvedCounter,
        setCorrectSolvedCounter: this.setCorrectSolvedCounter
    };
};
module.factory('statisticsDataAccessService', StatisticsDataAccessService);

