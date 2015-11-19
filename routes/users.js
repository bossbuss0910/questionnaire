var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser());

//データベース用意
var model = require('../model/ans.js');
var ansDB  = model.ansDB;	

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('questionnaire',{title:'アンケート'});
});

router.post('/input',function(req,res,next){
	var newansDB = new ansDB();
	console.log(req.body.sex);
	newansDB.sex =req.body.sex;
	newansDB.age =req.body.age;
	newansDB.title =req.body.title;
	newansDB.expensive =req.body.expensive;
	newansDB.cheap =req.body.cheap;
	newansDB.so_expensive =req.body.so_expensive;
	newansDB.so_cheap =req.body.so_cheap;
	console.log(newansDB);
	newansDB.save(function(err){
		if (err){console.log(err);}
		});

	res.render('thank',{title:"ありがとうございました"});	
});

module.exports = router;
