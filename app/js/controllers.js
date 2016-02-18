'use strict';

/* Controllers */

var controllers = {};

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', ['$scope', '$http', 'apartmentFactory', '$rootScope', 'uiGmapGoogleMapApi', function($scope, $http, apartmentFactory, $rootScope, uiGmapGoogleMapApi) {
		$scope.apartments = [];
		// set default current apartment
		$scope.currApartment = {
			address: "Seattle, WA"
		};
		
		// wait to ensure map is loaded (doesn't seem to be doing anything right now)
		uiGmapGoogleMapApi.then(function(maps) {
			$scope.map = {
				control: {},
				// set default map location
				center: { 
					latitude: 47.6271394, 
					longitude: -122.3375785
				}, 
				zoom: 14,
				markers: []
			}
		});

		// watch for if the current apartment changes
		$rootScope.$watch('currApartment', function(currApartment) {
			console.log("new currApartment: " + JSON.stringify(currApartment));
			if(currApartment) {
				// place marker on current apartment
				placeMarker(currApartment);
			}
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

		// Place marker on google map
		function placeMarker(currApartment) {
			// Convert address to lat/lng
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { "address": currApartment.address }, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
					console.log("Locations found for address: " + JSON.stringify(results));
					var location = results[0].geometry.location;

					// create new marker to drop on google map
					var marker = {
	                    id: Date.now(),
	                    coords: {
	                        latitude: location.lat(),
	                        longitude: location.lng()
	                    },
	                    clickable: true,
	                    events: {
	                    	click : function(e) {
	                    		console.log(e.position.lat() + ":" + e.position.lng());
	                    	}
	                    },
	                    lat : function() {
	                    	return this.coords.latitude;
	                    },
	                    lng : function() {
	                    	return this.coords.longitude;
	                    }
	                };

	                // add marker to list of markers displayed on google map
	                $scope.map.markers.push(marker);

	                var bounds = new google.maps.LatLngBounds();
	                for (var i in $scope.map.markers) // your marker list here
    					bounds.extend($scope.map.markers[i]) // your marker position, must be a LatLng instance

    				// get actual map instance and then move to fit all markers
    				$scope.map.control.getGMap().fitBounds(bounds);

	                // set center of map to be new currAddress
					// $scope.map.center.latitude = location.lat();
					// $scope.map.center.longitude = location.lng();
	                $scope.$apply();
				}
			});
		}
	}])
	.controller('MyCtrl2', ['$scope', '$http', 'apartmentFactory', function($scope, $http, apartmentFactory) {

	}]);
