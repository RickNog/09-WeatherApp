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
        vm.getWeatherInfo = getWeatherInfo;

        activate();
        ////////////////

        vm.search = [];

        function addrecord(name, time) {
            vm.search.unshift({'name': name, 'time': time,});
        }


        function getWeatherInfo(citySearch) {
           weatherFactory.getWeatherInfo(citySearch)
            .then (
                function(response){
                    vm.weatherInfo = response.data;
                    vm.weatherInfo.main.temp = Math.round(((vm.weatherInfo.main.temp * 9 / 5) - 459.67) * 100) / 100;
                    vm.weatherInfo.main.temp_min = Math.round(((vm.weatherInfo.main.temp_min * 9 / 5) - 459.67) * 100) / 100;
                    vm.weatherInfo.main.temp_max = Math.round(((vm.weatherInfo.main.temp_max * 9 / 5) - 459.67) * 100) / 100;
                    vm.date = new Date();
                    vm.time = vm.date.getHours() + ":" + vm.date.getMinutes() + ":" + vm.date.getSeconds();
                    var currentTime = new Date()
                    vm.day = vm.date.getMonth() + 1 + "/" + vm.date.getDate() + "/" + vm.date.getFullYear();
                    vm.timeStamp = " " + vm.day + " " + vm.time;
                    addrecord(vm.weatherInfo.name, vm.timeStamp);
                    if (vm.search.length > 5) { vm.search.pop(); }
                }
            )   
        }

        function activate() {
            weatherFactory.getWeatherInfo("San Diego")
            .then (
                function(response){
                    vm.weatherInfo = response.data;    
                }
            )

        }
    
    }
    
})();