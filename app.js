var express		 	= require('express');
var bodyParser 		= require('body-parser');
var flash			=require('connect-flash');
// var multer			=require('multer');

var app = express();

var session=require('express-session');
var cookieParser=require('cookie-parser');


app.listen(3000,function(){
	console.log('Server Running.......');
});

//convert body data in json format
app.use(function(req, res, next){
	res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
	next();
});
app.use(bodyParser.urlencoded());
app.use(flash());
//set static path
app.use(cookieParser());
app.use(session({ secret : 'tss'}));


app.use(function(req, res, next){
	res.locals.session=req.session;
	next();
});


app.use(require('./controllers/router'));
app.use(express.static(__dirname+'/public'));

// req.session.name="james";
//
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.get('/angular', function(req, res){
	res.sendFile(__dirname+'/views/angular/index.html')
	console.log("CALLING");
});


var MongoClient=require('mongodb').MongoClient;
var dburl="mongodb://localhost:27017/tss";






app.get('/getData', function(req, res){
	
	MongoClient.connect(dburl, function(err, db){
		db.collection('student').find().toArray(function(err, doc){

				res.send(doc);
		});
	});
});


//set view folder

//set file extention


//calling get methods
// app.get('/', function(req,res){
// 	var pageData = {title : 'Home'}
// 	res.render('home',pageData);
// });

// app.get('/about', function(req,res){
// 	var pageData = {title : 'About'}
// 	res.render('about',pageData);
// });

// app.get('/signUp', function(req,res){
// 	var pageData = {title : 'Sign Up'}
// 	res.render('signUp',pageData);
// });

// app.get('/login', function(req,res){
// 	var pageData = {title : 'Login'}
// 	res.render('login',pageData);
// });

// //calling post methods

// //calling get methods
// app.post('/signUp', function(req,res){
// 	console.log(req.body);
// });

// app.post('/login', function(req,res){
// 	console.log(req.body);
// });
