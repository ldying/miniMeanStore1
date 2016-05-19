var mongoose = require('mongoose');
var orderdb = mongoose.model('Orderdb');
var Productdb = mongoose.model('Productdb');

module.exports = (function() {
	return {
		getOrders: function(req, res){
			orderdb.find({}, function(err, orders){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(orders);
				}
			})
		},
		get3Orders: function(req, res){
			var q = orderdb.find({}).sort({'created_at': -1}).limit(3);
			q.exec(function(err, orders){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(orders);
				}
			})
		},
		addOrder: function(req, res){
			console.log(req.body)
			var name_qty = req.body.product_name.split(",");
			req.body.product_name = name_qty[0];
			console.log(req.body)
			var old_quantity = parseInt(name_qty[1]);
			var new_quantity = old_quantity - req.body.quantity;
			if (req.body.quantity > old_quantity) {
				res.json({message:"Quantity error. Not enough product in stock.", errors:"quantity error"})
			}else{
				var newOrder = new orderdb(req.body);
				// var orderQuantity = req.body.quantity;
				newOrder.save(function(err, order){
					if(err){
						console.log(err);
						res.json(err);
					} else {
						Productdb.findOneAndUpdate({product_name: req.body.product_name}, {quantity: new_quantity}, function(err, Product){
							if(err){
								console.log(err);
							} else {
								console.log(Product);
							}
						})

						res.json(newOrder);
					}
				})
			}
		}
		// destroyOrder: function(req, res){
		// 	orderdb.remove({_id: req.params.id}, function(err, order){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('looks like we have an error in destroyOrder Controller');
		// 		} else {
		// 			res.json(order);
		// 		}
		// 	})
		// }, 
		// getOrder: function(req, res){
		// 	orderdb.findOne({_id: req.params.id}, function(err, order){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('looks like there was an error in getOrder Controller');
		// 		} else {
		// 			res.json(order);
		// 		}
		// 	})
		// }, 
		// updateOrder: function(req, res){
		// 	orderdb.findOneAndUpdate({_id: req.params.id}, req.body, function(err, order){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			console.log(order);
		// 		}
		// 	})
			// orderdb.findOne({_id: req.params.id}, function(err, mong){
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
		// }
	}
})();