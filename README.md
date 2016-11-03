# 09-WeatherApp

In this project, I built an Angular application that allows a user to search for weather data using the [OpenWeatherMap](http://openweathermap.org/) in a similar fashion to the following screenshot.

<img src="http://i.imgur.com/vLI7hzb.png" />

## Tasks
1. Requested an API license key to use the open weather map API and confirmed ability to make calls to the API using a REST client such as Postman.
2. Setup this project to use live reload and inject file references into the index.html.
5. Made use of the following AngularJS features to build this application.
  - Created a `factory` and injected a `$http` service to be used for calling the OpenWeatherMap API.
  - Created a `controller` and injected the factory I created above.
  
## Requirements
- Must be able to search for a city by name and see weather for that location.
- Must have a Bootstrap `btn-group` with preloaded cities that when clicked, load weather information for that location.
- Must have a search history that tracks the term entered and the time that the term was entered.
- Must be able to handle errors gracefully (Use the [angularjs-toaster](https://github.com/jirikavi/AngularJS-Toaster) package to show an error to the user if the call to the API fails. It can be installed in your project using Bower.)
