myApp.controller('OrderController', function($scope, $routeParams, $location, orderFactory, 
	customerFactory, productFactory){
	orderFactory.getOrders(function(data){
		$scope.orders = data;
	})
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
	})
	productFactory.getProducts(function(data){
		$scope.products = data;
	})

	$scope.addOrder = function(){
		// console.log(newOrder);
		// console.log($scope.newOrder);

		orderFactory.addOrder($scope.newOrder, function(data){
			// console.log(data);
			$scope.orders = data;
			$scope.newOrder = {};
		})
	}

	// $scope.removeOrder = function(order){
	// 	orderFactory.removeOrder(order, function(data){
	// 		$scope.orders = data;
	// 	})
	// }
	// $scope.showOrder = function(orderId){
	// 	console.log(orderId);
	// 	$location.path('/order/' + orderId);
	// }
})