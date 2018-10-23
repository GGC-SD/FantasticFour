//Import the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchoolSchema = new Schema({
	name: String,
	degreeReq: String,
	gpaReq: Number,
	gre: Boolean,
	greReq: Number,
	hoursReq: Number,
});

module.exports = mongoose.model('School',SchoolSchema);