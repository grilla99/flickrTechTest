(function(angular) {
    
    'use strict';

    angular.module('app')
        .component('helloWorld', {
            templateUrl: 'app/views/testView.html',
            controller: FlickrController
        }
    );

    function FlickrController () {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            debugger;
            $ctrl.test =  'Hello World';
        };
    }
}(angular));
    
// IIFE
