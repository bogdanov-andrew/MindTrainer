var module = angular.module('eventAggregatorModule', []);
function EventAggregatorService() {

    var subscriptionList = [];

    this.isSubscriptionExists = function(eventName, action) {

    };

    this.Subscribe = function(eventName, action) {
        if (!isSubscriptionExists(eventName, action)) {

            var subscription = {
                eventName: eventName,
                action: action
            };

            subscriptionList.push(subscription);
        }
    };
    
    this.Publish = function (eventName) {
        var arr = subscriptionList.filter(function(element) {
            return element.eventName == eventName;
        });

        arr.forEach(function (item) {
            item.action();
        });
    };

    this.UnSubscribe = function(eventName, action) {

    };

    return {
        subscribe: this.Subscribe,
        publish: this.Publish
    };
};
module.factory('eventAggregatorService', EventAggregatorService);