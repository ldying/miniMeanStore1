var customerController = require('./../controllers/customers.js')
var orderController = require('./../controllers/orders.js')
var productController = require('./../controllers/products.js')


module.exports = function(app){
	app.get('/customers', function(req, res){
		customerController.getCustomers(req, res);
	})
	app.get('/3customers', function(req, res){
		customerController.get3Customers(req, res);
	})
	app.post('/customers', function(req, res){
		customerController.addCustomer(req, res);
	})
	app.post('/customers/:id/delete', function(req, res){
		console.log('im getting the route');
		customerController.destroyCustomer(req, res);
	})
	// app.get('/customers/:id', function(req, res){
	// 	console.log('getting to show route');
	// 	customerController.getCustomer(req, res);
	// })
	// app.post('/customers/:id/update', function(req, res){
	// 	console.log('getting to the update route');
	// 	customerController.updateCustomer(req, res);
	// })
	app.get('/orders', function(req, res){
		console.log("app.get /orders")
		orderController.getOrders(req, res);
	})
	app.get('/3orders', function(req, res){
		console.log("app.get /3orders")
		orderController.get3Orders(req, res);
	})
	app.post('/orders', function(req, res){
		console.log("post /orders")
		orderController.addOrder(req, res);
	})

	app.get('/products', function(req, res){
		console.log("app.get /products")
		productController.getProducts(req, res);
	})
	app.get('/5products', function(req, res){
		console.log("app.get /5products")
		productController.get5Products(req, res);
	})
	app.post('/products', function(req, res){
		productController.addProduct(req, res);
	})
	// app.get('/get_topic', function(req, res){
	// 	topicController.getTopics(req, res);
	// })
}