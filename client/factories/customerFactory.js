myApp.factory('customerFactory', function($http){
	var factory = {}
	var customers = []

	factory.getCustomers = function(callback){
		$http.get('/customers').then(function(data){
			customers = data.data;
			callback(customers);
		});
	}
	factory.get3Customers = function(callback){
		$http.get('/3customers').then(function(data){
			customers = data.data;
			callback(customers);
		});
	}

	factory.addCustomer = function(info, callback){
		$http.post('/customers', info).then(function(data){
			console.log(data)
			if(data.data.errors){
				if(data.data.errors.customer_name){
				alert(data.data.errors.customer_name.message);
				} 
			} else if(data.data.errmsg){
				alert("The name '"+info.customer_name + "' is already taken.");
			} else {
			customers.push(data.data)
			callback(customers);
			}
			// if (data.err_message) {
			// 	alert(data.err_message)
			// }else{
			
		})
	}

	factory.removeCustomer = function(customer, callback){
		$http.post('/customers/' + customer._id  + '/delete').then(function(data){
			console.log(data);
			customers.splice(customers.indexOf(customer), 1);
			callback(customers);
		})
	}
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