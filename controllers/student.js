var path = require('path');
var express=require('express');
var router=express.Router();


var Student=require('../models/student');

router.get('/', function(req, res){
	res.sendFile(path.resolve('views/angular/index.html'));
	
});
router.get('/getdata', function(req, res){
	
	Student.getAll(function(err, doc){
		if(err)
			return;
		res.send({ data : doc });
	})
});

router.post('/savedata', function(req, res){
	Student.insert(req.body, function(err, doc){
		if(err)
			return;

		console.log(doc);
		res.send({ data : doc.ops[0] });
	})
	
});
router.post('/student', function(req, res){
	console.log(req.body);
});
router.post('/deleteData', function(req, res){
	console.log(req.body);
	Student.remove(req.body, function(err, result){
		if(err){
			console.log('error while deleting', err);
			return;
		}
		console.log("success",result);
		res.send({ data :result});
	});
});


module.exports=router;