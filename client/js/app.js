(function(){ 
	var app = angular.module('masterPage', ['ngRoute', 'ngTouch', 'ngStorage', 'startPage']);
	app.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
                when('/', {
                    templateUrl: 'view/startPage.html',
                    controller: 'StartPageController'
                }).
				otherwise({
					redirectTo: '/'
				});
		}]);
	app.controller('MasterPageController', function($scope){

		if( window.cordova ) {
			document.addEventListener( 'deviceready', start, false );
		} else {
			$( start );
		}

		function start() {

		};
	});
})();