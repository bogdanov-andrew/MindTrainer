var module = angular.module('taskStatisticsModule',[ 'statisticsDataAccessModule' ]);
function TaskStatisticsService(statisticsDataAccessService){

    function initLocalStorage(){
        if(statisticsDataAccessService.getGeneralCounterValue() == undefined ){
            statisticsDataAccessService.setGeneralCounterValue(0);
        }

        if(statisticsDataAccessService.getCorrectSolvedCounter() == undefined ){
            statisticsDataAccessService.setCorrectSolvedCounter(0);
        }
    }

    this.initService = function(){
        initLocalStorage();
    };

    this.incrementGeneralCounter = function () {
        var value = statisticsDataAccessService.getGeneralCounterValue();
        value += 1;
        statisticsDataAccessService.setGeneralCounterValue(value);
    };

    this.incrementCorrectSolvedCounter = function () {
        var value = statisticsDataAccessService.getCorrectSolvedCounter();
        value += 1;
        statisticsDataAccessService.setCorrectSolvedCounter(value);
    };

    this.getStatistics = function () {
        return {
            counter:  statisticsDataAccessService.getGeneralCounterValue(),
            correctSolvedCounter: statisticsDataAccessService.getCorrectSolvedCounter()
        };
    };

    return{
        initService: this.initService,
        incrementGeneralCounter: this.incrementGeneralCounter,
        incrementCorrectSolvedCounter: this.incrementCorrectSolvedCounter,
        getStatistics: this.getStatistics
    };
};
module.factory('taskStatisticsService', TaskStatisticsService);

