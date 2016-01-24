'use strict';

/* Factories */

var app = angular.module('myApp.factories', []);

// define factory that gets Apartment data here
app.factory('apartmentFactory', function($http) {

	var factory = {};
	factory.getApartments = function() {
		// // usually make ajax call here to get the data e.g. apartment data
		var apartments = {};

		return $http.get("https://api.parse.com/1/classes/Apartment", {
			headers: {
				'X-Parse-Application-Id': "XTdVNu7dQLn5oxIuhDAKJOur0LfNExmApSEsPWNM",
                'X-Parse-REST-API-Key': "A9gFCEthQLn32F06m7ziZQ6BSqGZ2NyLy9rP1KYN",
                'Content-Type': 'application/json'
			}
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