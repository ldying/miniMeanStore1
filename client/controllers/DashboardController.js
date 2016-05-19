myApp.controller('DashboardController', function($scope, $location, productFactory,customerFactory,orderFactory){
	$scope.time = new Date
	orderFactory.get3Orders(function(data){
		$scope.orders = data;
	})
	customerFactory.get3Customers(function(data){
		$scope.customers = data;
	})
	productFactory.get5Products(function(data){
		$scope.products = data;
	})


})