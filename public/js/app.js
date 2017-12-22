var app=angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
	$scope.newStudent={};

	$scope.allData=[];


	$scope.save=function(){
		console.log($scope.newStudent);
		$http({
			method : "POST",
			url : "/student/savedata",
			data : $scope.newStudent
		}).then(function(res){
			console.log(res);
			$scope.allData.push(res.data.data);

		});
	}

	$scope.getData=function(){
		$http({
			method : "GET",
			url : '/student/getdata'
		}).then(function(res){
			console.log(res, '-----------');
			$scope.allData=res.data.data;
		});
	}


});