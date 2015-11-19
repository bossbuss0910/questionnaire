var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI||'mongodb://localhost/ansdb');

var ansSchema = mongoose.Schema({
		  sex:   { type: String },
		  age:   { type: String },
		  title: { type: String },
		  expensive: {type: Number},
		  cheap:{type:Number},
		  so_expensive:{type:Number},
		  so_cheap:{type:Number}
});
var ansDB = mongoose.model('ansDB', ansSchema);

exports.ansDB = ansDB;
