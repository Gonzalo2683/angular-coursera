(function(){
    'use strict';

    angular.module('myApp', [])
    .controller('myController', function($scope){

        $scope.cosas = [1,2,3];

        $scope.name = 'Gonza';
        $scope.apellido = 'Guevara';
    })
})();