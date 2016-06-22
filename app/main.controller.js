(function() {
    'use strict';

    angular
        .module('weatherApp')
        .controller('weatherController',weatherController);

    weatherController.$inject = ['weatherFactory'];
    /* @ngInject */
    function weatherController(weatherFactory) {
        var vm = this;
        vm.title = 'weatherController';
       

        activate();
        ////////////////
        function activate() {
            weatherFactory.getWeatherInfo()
            .then (
                function(response){
                    vm.weatherInfo = response.data;
                }
            )

        }
    
    }
    
})();
