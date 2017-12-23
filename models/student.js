var MongoDB=require('mongodb');
var con=require('../config/connection');

module.exports.insert=function(data, callback){
	con.init(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		db.collection('student').insert(data, callback);
	});
}

module.exports.getWhereOne=function(where, callback){
	con.init(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		db.collection('student').findOne(where, callback);
	})
}
module.exports.getAll=function(callback){
	con.init(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		db.collection('student').find().toArray(callback);
	})	
}

module.exports.remove=function(where, callback){
	con.init(function(err, db){
		if(err){
			console.log('Connection Error', err);
			return;
		}
		var obj = { _id : new MongoDB.ObjectID(where._id) };
		db.collection('student').findOneAndDelete(obj, callback);
	})	
}