'use strict';

/* Directives */


angular.module('myApp.directives', [])
	.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
	};
}])
	.directive('apartmentDetails', function () {
	    return {
	        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
	        scope: {
	            //@ reads the attribute value, = provides two-way binding, & works with functions
	            title: '@'
	        },
	        template: "<div class='apartment-details'><h3>Apartment: {{ apartments }}</h3></div>",
	        //templateUrl: '../templates/apartment_details_template.html',

	        //controller: controllerFunction, //Embed a custom controller in the directive
	        link: function ($scope, element, attrs) { 

	        } //DOM manipulation
	    };
	});