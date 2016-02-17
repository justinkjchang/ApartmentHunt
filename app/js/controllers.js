'use strict';

/* Controllers */

var controllers = {};

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$scope', '$http', 'apartmentFactory', '$rootScope', function($scope, $http, apartmentFactory, $rootScope) {
		$scope.apartments = [];

		// watch for if the current apartment changes
		$rootScope.$watch('currApartment', function(currApartment) {
			console.log("new currApartment: " + JSON.stringify(currApartment));
		});

		init();

		// private function i.e. to initially get apartments
		function init() {
			apartmentFactory.getApartments().success(function(response) {
				// set apartments on the scope so it can be seen by the view
				$scope.apartments = response.Apartments;
			}).error(function(response) {
				alert("Error: " + response.error);
			});
		}
	}])
	.controller('MyCtrl2', ['$scope', '$http', 'apartmentFactory', function($scope, $http, apartmentFactory) {

	}]);
