var mongoose = require('mongoose');
var customerdb = mongoose.model('Customerdb');

module.exports = (function() {
	return {
		getCustomers: function(req, res){
			customerdb.find({}, function(err, customers){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(customers);
				}
			})
		},

		get3Customers: function(req, res){
			var q = customerdb.find({}).sort({'created_at': -1}).limit(3);
			q.exec(function(err, customers){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(customers);
				}
			})
		},
		addCustomer: function(req, res){
			// if(customerdb.findOne({customer_name: req.body.customer_name})){
			// 	console.log("found dupe")
			// 	res.json({err_message:"NO DUPLICATE NAMES"})
			// } else {
			var newCustomer = new customerdb(req.body);

			newCustomer.save(function(err, customer){
				if(err){
					console.log(err);
					res.json(err);
				} else {
					res.json(newCustomer);
				}
			})
			// }
		},
		destroyCustomer: function(req, res){
			customerdb.remove({_id: req.params.id}, function(err, customer){
				if(err){
					console.log(err);
					console.log('looks like we have an error in destroyCustomer Controller');
				} else {
					res.json(customer);
				}
			})
		}, 
		getCustomer: function(req, res){
			customerdb.findOne({_id: req.params.id}, function(err, customer){
				if(err){
					console.log(err);
					console.log('looks like there was an error in getCustomer Controller');
				} else {
					res.json(customer);
				}
			})
		}, 
		updateCustomer: function(req, res){
			customerdb.findOneAndUpdate({_id: req.params.id}, req.body, function(err, customer){
				if(err){
					console.log(err);
				} else {
					console.log(customer);
				}
			})
			// customerdb.findOne({_id: req.params.id}, function(err, mong){
			// 	if(err){
			// 		console.log('could not find mongoose or something happened update mongoose');
			// 	} else {
			// 		mong.name = req.body.name
			// 		mong.age = req.body.age
			// 		mong.color = req.body.color
			// 		mong.save(function(err, updatedMongoose){
			// 			if(err){
			// 				console.log(err);
			// 				console.log('saving updated mongoose');
			// 			} else {
			// 				res.json(updatedMongoose);
			// 			}
			// 		})
			// 	}
			// })
		}
	}
})();