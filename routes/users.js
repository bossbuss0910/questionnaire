var express = require('express');
var router = express.Router();
//データベース用意
var model = require('../model/ans.js');
var ansDB  = model.ansDB;	

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('questionnaire',{title:'アンケート'});
});

router.get('/input',function(req,res,next){
	var newansDB = new ansDB();
	newansDB.sex =req.query.sex;
	newansDB.age =req.query.age;
	newansDB.title =req.query.title;
	newansDB.expensive =req.query.expensive;
	newansDB.cheap =req.query.cheap;
	newansDB.so_expensive =req.query.so_expensive;
	newansDB.so_cheap =req.query.so_cheap;
	console.log(newansDB);
	newansDB.save(function(err){
		if (err){console.log(err);}
		});

	res.render('thank',{title:"ありがとうございました"});	
});

module.exports = router;
