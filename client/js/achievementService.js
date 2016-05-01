var module = angular.module('achievementModule',[ 'taskStatisticsModule' ]);
function AchievementService(taskStatisticsService){

    function calculateLevel(solvedTasks){
        return Math.floor(Math.sqrt(solvedTasks / 10));
    };

    function calculatePointsRequiredForLevelComplete(level){
        return 10 * Math.pow((level), 2);
    };

    function calculateCompletedOn (solved){
        var currentLevelValue = currentLevel();
        var pointsToStartCurrentLevel = calculatePointsRequiredForLevelComplete(currentLevelValue);
        var pointsToCompleteCurrentLevel = calculatePointsRequiredForLevelComplete(currentLevelValue + 1);
        return (solved - pointsToStartCurrentLevel) / ((pointsToCompleteCurrentLevel - pointsToStartCurrentLevel) / 100);
    };

    function currentLevel(){
        var statistics = taskStatisticsService.getStatistics();
        var currentLevel = calculateLevel(statistics.correctSolvedCounter);
        return currentLevel;
    };

    this.getCurrentLevel = function(){
        var statistics = taskStatisticsService.getStatistics();
        return {
            currentLevel: calculateLevel(statistics.correctSolvedCounter),
            completedOn: calculateCompletedOn(statistics.correctSolvedCounter)
        };
    };

    this.nextLevelOn = function(){
        var currentLevelValue = currentLevel();
        return calculatePointsRequiredForLevelComplete(currentLevelValue);
    };

    return{
        getCurrentLevel: this.getCurrentLevel,
        nextLevelOn: this.nextLevelOn
    };
};
module.factory('achievementService', AchievementService);

