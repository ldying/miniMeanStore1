myApp.factory('orderFactory', function($http){
	var factory = {}
	var orders = []

	factory.getOrders = function(callback){
		$http.get('/orders').then(function(data){
			orders = data.data;
			callback(data.data);
		});
	}

	factory.get3Orders = function(callback){
		$http.get('/3orders').then(function(data){
			orders = data.data;
			callback(data.data);
		});
	}

	factory.addOrder = function(info, callback){
		// console.log(info);
		// var name_qty = info.product_name 
		$http.post('/orders', info).then(function(data){
			// console.log(data)
			if(data.data.errors){
				if(data.data.errors.customer_name){
				alert(data.data.errors.customer_name.message);
				} else if(data.data.errors.item_name){
				alert(data.data.errors.item_name.message);
				} else if(data.data.errors.quantity){
				alert(data.data.errors.quantity.message);
				} 
			} else {
			orders.push(data.data)
			callback(orders);
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