var express=require('express');
var router=express.Router();


// Array containing backdoor controllers link
var protactor=['/user', '/upload'];

router.use(protactor, function(req, res, next){
	if(! req.session.user_logged_in)
	{
		res.redirect('/login');
	}
	else{
		next();
	}
});


router.get('/', function(req, res){
	var pageData={ title : "Home Page", pagename : './home/index' };
	res.render('layout', pageData);
});

// router.post('/login', function(req, res){
// 	console.log('post calling');
// })
router.all('/user', require('../controllers/user'));
router.all('/login', require('../controllers/login'));
router.all('/signup', require('../controllers/signup'));
router.all('/upload', require('../controllers/upload'));
// router.get('/about', require('../controllers/about'));

router.get('/logout', function(req, res){
	req.session.destroy();
	res.redirect('/login');
});

module.exports=router;
