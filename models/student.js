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