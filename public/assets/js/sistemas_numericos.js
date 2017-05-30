(function(){
var app = angular.module('app', ['ngMaterial']);
    
    app.config(['$interpolateProvider', function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    }]);
    
    app.controller('app-controller', ['$scope' , '$mdToast', function($scope , $mdToast){

        $scope.appname  = "Sistemas numéricos";
        $scope.appinfo  = "25-4981-2014 " + new Date().getFullYear();
        $scope.numero    = 100;
        $scope.base      = 10;
        $scope.based     = 2;
        $scope.presicion = 7;

        
  		  function showToast(msg) {
                  $mdToast.show(
                  $mdToast.simple()
                      .textContent(msg)                       
                      .hideDelay(1000)
          );
        }
        
        function toBase(number, inBase, base) {
          if(base > 1 && base < 11) {
            var output = 0;
            while (number > 0) {
              var power = Math.floor(Math.log(number) / Math.log(base));
              output += Math.pow(inBase, power);
              number -= Math.pow(base, power);
            }
            return output;
          } else {
            throw new Error('bad Base');
          }
        }

        
        function segment(innumber, base, abase) {

          var inl = innumber;

          
          if (String(inl).match('[.,]') && base != 10 ) {
            var result = String(innumber).split(/[.,]+/),
              out      = [],
              n        = 0,
              number   = result[1],
              troutput = [],
              sNumber  = number.toString(),
              logitud  = sNumber.length;
        

          for (var i = 0, len = sNumber.length; i < len; i += 1) {

            troutput.push(+sNumber.charAt(i));
          }

          for (var k = 1; k <= logitud; k++) {
            
            out.push(Math.pow(base, -k));
          }

          for (var j = 0; j < logitud; j++) {
            
            n += troutput[j] * out[j];
          }  

            return toBase(result[0], base, abase) + n;

          }else {

            return toBase(innumber, base, abase);
          }
        }

        function base_x_x(number, base, basedest) {

          if (base != 10 && basedest != 10) {

            var tmp = segment(number, base, 10);
            return segment(tmp, 10, basedest);
          }

            return segment(number, base, basedest);
        }

        function checkBase(numero, base, based){

          if(base == based){
            showToast("Las bases deben de ser diferentes!");

          }else{
            var msg ="Esta ingresando un numero incorrecto";
        
            if (base == 2 && String(numero).match('[2-9]')) {
                  showToast(msg);
                  return false;

            }else if(base == 3 && String(numero).match('[3-9]')){
                  showToast(msg);
                  return false;

            }else if(base == 4 && String(numero).match('[4-9]')){
                  showToast(msg);
                  return false;

            }else if(base == 5 && String(numero).match('[5-9]')){
                  showToast(msg);
                  return false;

            }else if(base == 6 && String(numero).match('[6-9]')){
                  showToast(msg);
                  return false;

            }else if(base == 7 && String(numero).match('[7-9]')){
                  showToast(msg);
                  return false;

            }else if(base == 8 && String(numero).match('[8-9]')){
                  showToast(msg);
                  return false;

            }else if(base == 9 && String(numero).match('[9-9]')){
                  showToast(msg);
                  return false;
                  
            }else{
              return true;
            }
          }
        }

        $scope.calculate = function(){
          $scope.destino = (checkBase($scope.numero, $scope.base, $scope.based)) ? base_x_x($scope.numero, $scope.base, $scope.based) : 0;
        };
        
        $scope.calculate();
        
    }])
})();