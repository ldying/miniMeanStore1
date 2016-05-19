myApp.controller('CustomerController', function($scope, $routeParams, $location, customerFactory){
	customerFactory.getCustomers(function(data){
		$scope.customers = data;
	})

	$scope.addCustomer = function(){
		// for (var i = 0; i < $scope.customers.length; i++) {
		// 	if($scope.newCustomer && $scope.customers[i].customer_name == $scope.newCustomer.customer_name){
		// 		alert("No duplicate names dummy")
		// 		return false;
		// 	}
		
		// }
		customerFactory.addCustomer($scope.newCustomer, function(data){
			$scope.customers = data;
			$scope.newCustomer = {};
		})
	}

	$scope.removeCustomer = function(customer){
		console.log(customer,"in customer controller")
		customerFactory.removeCustomer(customer, function(data){
			$scope.customers = data;
		})
	}
	// $scope.showCustomer = function(customerId){
	// 	console.log(customerId);
	// 	$location.path('/customer/' + customerId);
	// }
})