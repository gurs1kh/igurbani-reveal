var app = angular.module('igurbani-reveal', []);

app.controller("slideController", ['$scope', '$window', '$http',
	function($scope, $window, $http) {
		$scope.panktis = [];
		$http.jsonp(`http://igurbani.herokuapp.com/api/shabads/1?callback=JSON_CALLBACK`)
			.then(function successCallback(response) {
				$scope.panktis = response.data;
			}, function errorCallback(response) {
				// TODO
			});
		$window.onload = function() {
			Reveal.initialize({
				controls: true,
				history: true,
				showNotes: true,
				transition: 'none',
			});
			Reveal.slide(0);
		};

		$window.onkeydown = function(e) {
			if (e.key == 's') {
				var notesPopup = window.open('notes.html', 'reveal.js - Notes', 'width=300,height=400');
			}
		}
		$scope.changeSlide = function(i) {
			$window.opener.Reveal.slide(i);
		}
	}
]);
