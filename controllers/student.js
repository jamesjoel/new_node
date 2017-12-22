var path = require('path');
var express=require('express');
var router=express.Router();


var Student=require('../models/student');

router.get('/', function(req, res){
	res.sendFile(path.resolve('views/angular/index.html'));
	// res.render('angular/new');
	// res.send("hello");
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
})


module.exports=router;