(function(){
    'use strict';

    angular.module('myApp', [])
    .controller('myController', function($scope){

        $scope.cosas = [1,2,3];

        $scope.name = 'Gonza';
        $scope.apellido = 'Guevara';
    })
    .controller('nombreCalculado', function($scope){
        $scope.name = '';
        $scope.largoNombre = function(){
            return this.name.length;
        }
    })
    .controller('inyeccionDependencia', function($scope, $filter){ //se iyectan servicios de angular
        $scope.name = '';
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }
    })
    .controller('otraInyeccion', funcOtraInyeccion)
    funcOtraInyeccion.$inject = ['$scope', '$filter']
    function funcOtraInyeccion($scope, $filter){
        $scope.name = 'Intectado';
    }
})();