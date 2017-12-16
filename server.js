var express		 	= require('express');
var app = express();

var MongoClient=require('mongodb').MongoClient;
var dburl="mongodb://localhost:27017/tss";

MongoClient.connect(dburl, function(err, db){
	db.collection('student').find().toArray(function(err, result){
		console.log(result);
	})
});
