var mongoose = require('mongoose');
var Productdb = mongoose.model('Productdb');

module.exports = (function() {
	return {
		getProducts: function(req, res){
			Productdb.find({}, function(err, Products){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(Products);
				}
			})
		},
		get5Products: function(req, res){
			var q = Productdb.find({}).sort({'created_at': -1}).limit(5);
			q.exec(function(err, products){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					res.json(products);
				}
			})
		},
		addProduct: function(req, res){
			var newProduct = new Productdb(req.body);
			newProduct.save(function(err, Product){
				if(err){
					console.log(err);
					res.json(err);
				} else {
					res.json(newProduct);
				}
			})
		},
		// destroyProduct: function(req, res){
		// 	Productdb.remove({_id: req.params.id}, function(err, Product){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('looks like we have an error in destroyProduct Controller');
		// 		} else {
		// 			res.json(Product);
		// 		}
		// 	})
		// }, 
		// getProduct: function(req, res){
		// 	Productdb.findOne({_id: req.params.id}, function(err, Product){
		// 		if(err){
		// 			console.log(err);
		// 			console.log('looks like there was an error in getProduct Controller');
		// 		} else {
		// 			res.json(Product);
		// 		}
		// 	})
		// }, 
		// updateProduct: function(req, res){
		// 	Productdb.findOneAndUpdate({_id: req.params.id}, req.body, function(err, Product){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			console.log(Product);
		// 		}
		// 	})
			// Productdb.findOne({_id: req.params.id}, function(err, mong){
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