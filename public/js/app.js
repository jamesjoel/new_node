var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){

	$scope.getData=function(){
		$http({
			method : "GET",
			url : '/getData'
		}).then(function(res){
			console.log(res, '-----------');
			$scope.allData=res.data;
		});
	}


});