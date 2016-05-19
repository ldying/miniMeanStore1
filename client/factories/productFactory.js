myApp.factory('productFactory', function($http){
	var factory = {}
	var products = []

	factory.getProducts = function(callback){
		$http.get('/products').then(function(data){
			products = data.data;
			callback(data.data);
		});
	}
	factory.get5Products = function(callback){
		$http.get('/5products').then(function(data){
			products = data.data;
			callback(data.data);
		});
	}

	factory.addProduct = function(info, callback){
		$http.post('/products', info).then(function(data){
			console.log(data)
			if(data.data.errors){
				if(data.data.errors.product_name){
				alert(data.data.errors.product_name.message);
				} else if(data.data.errors.item_name){
				alert(data.data.errors.item_name.message);
				} else if(data.data.errors.quantity){
				alert(data.data.errors.quantity.message);
				} 
			} else {
			products.push(data.data)
			callback(products);
			}
		})
	}

	// factory.removeMongoose = function(mongoose, callback){
	// 	$http.post('/mongooses/' + mongoose._id  + '/delete').then(function(data){
	// 		console.log(data);
	// 		mongooses.splice(mongooses.indexOf(mongoose), 1);
	// 		callback(mongooses);
	// 	})
	// }
	// factory.getMongoose = function(mongooseId, callback){
	// 	$http.get('/mongooses/' + mongooseId).then(function(data){
	// 		callback(data.data);
	// 	})
	// }
	// factory.updateMongoose = function(mongoose, callback){
	// 	$http.post('/mongooses/' + mongoose._id + '/update', mongoose).then(function(data){
	// 		mongooses[mongooses.indexOf(data.data)] = data.data;
	// 		callback(data);
	// 	})
	// } 

	return factory;
})