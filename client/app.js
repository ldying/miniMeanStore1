var myApp = angular.module('Myapp', ['ngRoute','angularMoment']);

(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/', 
			{
				controller: 'DashboardController',
				templateUrl: "partials/index.html"
			})
			.when('/products', 
			{
				controller: 'ProductController',
				templateUrl: "partials/products.html"
			})
			.when('/orders',{
				controller: 'OrderController',
				templateUrl: "partials/orders.html"
			})
			.when('/customers', 
			{
				controller: 'CustomerController',
				templateUrl: "partials/customers.html"
			})
			.when('/settings', {
				// controller: 'SettingController',
				templateUrl: "partials/settings.html"
			})
			.otherwise({
				redirectTo: "/"
			})
	})
}());