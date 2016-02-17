'use strict';

/* Directives */
angular.module('myApp.directives', [])
	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
	};
}])
	.directive('apartmentData', function () {
	    return {
	        restrict: 'E', // E = element, A = attribute, C = class, M = comment      
	        replace: true,   
	        templateUrl: 'templates/apartment_data_template.html',
	        scope: {
	            // @ reads the attribute value, = provides two-way binding, & works with functions
	            apartments: '=apartments'
	        },

	        // controller: controllerFunction, // Embed a custom controller in the directive
	        link: function($scope, element, attrs) { 
	        	
				$scope.changedValue = function(selectedApartment) {
					console.log(selectedApartment);
				}
	        	// DOM manipulation
	        	// $scope.$watch('apartments', function(apartments) {
	        	// 	angular.forEach(apartments, function(apartment, key) {
	        	// 		element.find("ul").append('<li><a href="#">' + apartment.Address + "</a></li>");
	        	// 	});
	        	// });
	        } 
	    };
	});