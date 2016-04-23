var app = angular.module('NumericKeyboardDirective',[ 'ngTouch' ]);
app.controller('NumericKeyboardController', function($interval, $scope, $location){
    $scope.keypadLabel = function () { return $('.keypad-label'); }

    $scope.keyboardValue = "";
    function disableControl(controlName){
        $(controlName).fadeTo('fast',0.3);
    };

    function enableControl(controlName){
        $(controlName).fadeTo('fast',1);
    };
 
    function updateKeyboardValue(){
        $scope.keypadLabel().text($scope.keyboardValue);
    }

    $scope.keyPressedF = function(key){
        $scope.keyboardValue = $scope.keypadLabel().text();
        switch(key){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                if($scope.keyboardValue.length == 0){
                    $scope.keyboardValue = '';
                }
                var result = $scope.keyboardValue.concat(key.toString());
                $scope.keyboardValue = result;
                break;
            case "DEL":
                var result = $scope.keyboardValue.substring(0,$scope.keyboardValue.length-1);
                $scope.keyboardValue = result;
                break;
            case "DOT":
                var pos = $scope.keyboardValue.indexOf('.');
                if(pos === -1 && $scope.keyboardValue > 0){
                    var result = $scope.keyboardValue.concat('.'.toString());
                    $scope.keyboardValue = result;
                }
                break;
            default:
                break;
        }

        updateKeyboardValue();
    }
})
.directive('numericKeyboard', function() {
        return {
            templateUrl: 'view/numericKeyboard.html',
            link: function(scope, element, attr){
                $('.keypad-btn').on('touchend',function(element){
                    var value = $('#' + element.currentTarget.id).attr('data-value');                  
                    scope.keyPressedF(value);
                });
            }
        };
});
