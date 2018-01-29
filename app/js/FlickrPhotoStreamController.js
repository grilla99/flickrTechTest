(function(angular) {
    
    'use strict';

    angular.module('app')
        .component('flickrResponse', {
            templateUrl: 'app/views/testView.html',
            controller: FlickrController
        }
    );

    function FlickrController ($http) {
        var $ctrl = this;

        $ctrl.$onInit = function() {
            $http({
                method: 'JSONP',
                url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK',
                jsonpCallbackParam: 'jsonFlickrFeed'
            }) 
            .then(function (response) {
                $ctrl.feeds = response.data.items;
            })
            .catch(function(error) {
                console.log(error);
            });
        };
    }
}(angular));