var app = angular.module('NumericKeyboardDirective',[ 'ngTouch' ]);
app.controller('NumericKeyboardController', function($interval, $scope, $location){
    $scope.keyboardValue = "";
    function disableControl(controlName){
        $(controlName).fadeTo('fast',0.3);
    };

    function enableControl(controlName){
        $(controlName).fadeTo('fast',1);
    };

    disableControl('#buttonRestart');

    $('#button1').on('touchend',function(){
        $scope.keyPressedF(1);
    });
    $('#button2').on('touchend',function(){
        $scope.keyPressedF(2);
    });
    $('#button3').on('touchend',function(){
        $scope.keyPressedF(3);
    });
    $('#button4').on('touchend',function(){
        $scope.keyPressedF(4);
    });
    $('#button5').on('touchend',function(){
        $scope.keyPressedF(5);
    });
    $('#button6').on('touchend',function(){
        $scope.keyPressedF(6);
    });
    $('#button7').on('touchend',function(){
        $scope.keyPressedF(7);
    });
    $('#button8').on('touchend',function(){
        $scope.keyPressedF(8);
    });
    $('#button9').on('touchend',function(){
        $scope.keyPressedF(9);
    });
    $('#button0').on('touchend',function(){
        $scope.keyPressedF(0);
    });
    $('#buttonDOT').on('touchend',function(){
        $scope.keyPressedF('DOT');
    });
    $('#buttonDEL').on('touchend',function(){
        $scope.keyPressedF('DEL');
    });

    var element;
    $('a').click(function() {
        element = this;  // 'this' is a reference to the element that triggered the click
        $scope.keyboardValue = '';
    });

    function updateKeyboardValue(){
        $(element).text($scope.keyboardValue);
    }

    $scope.keyPressedF = function(key){
        switch(key){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 0:
                if($scope.keyboardValue.length == 0){
                    $scope.keyboardValue = '00';
                }
                var result = $scope.keyboardValue.concat(key.toString());
                while(result.length > 2){
                    result = result.substring(1,result.length);
                }
                $scope.keyboardValue = result;
                break;
            case "DEL":
                var result = $scope.keyboardValue.substring(0,$scope.keyboardValue.length-1);
                if(result.length < 2){
                    result = "00";
                }
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
            templateUrl: 'view/numericKeyboard.html'
        };
});
/*app.directive('numericKeyboard' ,function(){
 return {
 restrict: 'E',
 templateUrl: 'numerickeyboard.html',
 controller: function(){

 },
 controllerAs: 'controller'
 };
 });*/
