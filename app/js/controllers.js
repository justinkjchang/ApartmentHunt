'use strict';

/* Controllers */

var controllers = {};

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$scope', '$http', 'apartmentFactory', function($scope, $http, apartmentFactory) {
		$scope.apartments = [];

		init();

		// private function i.e. to initially get apartments
		function init() {
			apartmentFactory.getApartments().success(function(response) {
				// set apartments on the scope so it can be seen by the view
				$scope.apartments = response;
			}).error(function(response) {
				alert("Error: " + response.error);
			});
		}
	}])
	.controller('MyCtrl2', ['$scope', '$http', 'apartmentFactory', function($scope, $http, apartmentFactory) {

	}]);
