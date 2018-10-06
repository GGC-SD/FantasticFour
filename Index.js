//Import the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchoolSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	degreeReq: String,
	gpaReq: Number,
	gre: Boolean,
	greReq: Number,
	hoursReq: Number,
})

module.exports = mongoose.model('School',SchoolSchema);

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/schools';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));