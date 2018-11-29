var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var School = require('../models/School.js');
var dbUrl = 'mongodb://bmashlum:2019Kuronos@ds121163.mlab.com:21163/paprogram'

/* GET ALL SchoolS */
router.get('/', function(req, res, next) {
  console.log("find school");
  School.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE School BY ID */
router.get('/:id', function(req, res, next) {
  School.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE School */
router.post('/', function(req, res, next) {
	console.log("Saving school");
  School.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE School */
router.put('/:id', function(req, res, next) {
  School.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE School */
router.delete('/:id', function(req, res, next) {
  School.findByIdAndRemove(req.params.id, req.body, function (err, post) {
  	console.log("Deleting school")
    if (err) return next(err);
    res.json(post);
  });
});

mongoose.connect(dbUrl,{useMongoClient:true},(err) => {
    console.log('mongo db connection', err)
});
module.exports = router;
