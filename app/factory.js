(function() {
    'use strict';
    angular
        .module('weatherApp')
        .factory('weatherFactory', weatherFactory);
    weatherFactory.$inject = ['$http'];
    /* @ngInject */
    function weatherFactory($http) {
        var service = {
            getWeatherInfo: getWeatherInfo
        };
        return service;
        ////////////////
        	function getWeatherInfo() {
                return $http({
                method: 'GET',
                url: "http://api.openweathermap.org/data/2.5/weather",
                params: {
                    appid: "c8caa64cb704fb37338e823a31de897a",
                q: "san diego"
                }
             }).then(function(response) {
              return response;
          });
        }
    }
})();