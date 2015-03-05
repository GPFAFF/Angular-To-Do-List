( function () {
	"use strict";

	angular.module("app").controller("miscCtrl", function($scope) {
		$scope.ingredients = ["ham", "pizza sauce", "milk", "eggs"];
		$scope.addIngredient = function(ingredient){
			$scope.ingredients.push(ingredient);
		}
		$scope.deleteIngredient = function(ingredient){
			var index = $scope.ingredients.indexOf(ingredient);
			$scope.ingredients.splice(index, 1);
		}
	/*	$http.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json')
		.success(function(response) {$scope.cityWorkers = response;
		});*/
	});

})();