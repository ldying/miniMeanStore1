myApp.controller('ProductController', function($scope, $location, productFactory){
	productFactory.getProducts(function(data){
		$scope.products = data;
	})

	$scope.addProduct = function(){
		productFactory.addProduct($scope.newProduct, function(data){
			// console.log(data);
			$scope.products = data;
			$scope.newProduct = {};
		})
	}

	// $scope.removeProduct = function(Product){
	// 	productFactory.removeProduct(order, function(data){
	// 		$scope.products = data;
	// 	})
	// }
	// $scope.showProduct = function(ProductId){
	// 	console.log(ProductId);
	// 	$location.path('/product/' + ProductId);
	// }
})