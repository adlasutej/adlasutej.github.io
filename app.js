(function(){
	'use strict';
	var app = angular.module("myApp",[]);
	app.controller("myController",myController);
	myController.$inject = ['$scope'];
	function myController($scope){
		$scope.sampleInput="";
		$scope.message="";
		$scope.backgroundClass={};
		$scope.fontColor="";
		$scope.check = function(){
			var lst = $scope.sampleInput.split(/[, ]+/);
			var length = 0;
			for (var i=0; i<lst.length; i++){
				if(lst[i].length > 0)
					length+=1;
			}
			if(length === 0){
				$scope.message = "Please enter data first";
				$scope.backgroundClass = {'border-color':'green'};
				$scope.fontColor = {'color':'green'};
			}
			else if (length <= 3){
				$scope.message = "Enjoy!";
				$scope.backgroundClass = {'border-color':'green'};
				$scope.fontColor = {'color':'green'};
			}
			else{
				$scope.message = "Too much!";
				$scope.backgroundClass = {'border-color':'red'};
				$scope.fontColor = {'color':'red'};
			}
		};
	}
})();