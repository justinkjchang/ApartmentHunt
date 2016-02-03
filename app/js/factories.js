'use strict';

/* Factories */

var app = angular.module('myApp.factories', []);

// define factory that gets Apartment data here
app.factory('apartmentFactory', function($http) {

	var factory = {};
	factory.getApartments = function() {
		// // usually make ajax call here to get the data e.g. apartment data
		var apartments = {};

		return $http.get("https://apartmenthunt.firebaseio.com/Apartments.json", {
			headers: {
                'Content-Type': 'application/json'
			},
			cache: true
		});
		
	};
	factory.putApartment = function(apartment) {
		// do something (put/update request)
	}
	factory.postApartment = function(apartment) {
		// do something (post request)
	}

	return factory;
});