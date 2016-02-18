'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.factories',
  'myApp.directives',
  'myApp.controllers',
  'uiGmapgoogle-maps'
])
.config(function($stateProvider, $urlRouterProvider) {
	// For any unmatched url, redirect to /state1
  	$urlRouterProvider.otherwise("/state1");
  	// Now set up the states
	$stateProvider
		.state('state1', {
			url: "/state1",
			templateUrl: "partials/state1.html",
			controller: "MyCtrl1"
		})
		.state('state2', {
			url: "/state2",
			templateUrl: "partials/state2.html",
			controller: "MyCtrl2"
		});
})
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});
