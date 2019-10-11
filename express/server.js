'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
var monk = require('monk');
var db = monk('admin:uakfvhhz@cluster0-shard-00-00-oeoo3.mongodb.net:27017,cluster0-shard-00-01-oeoo3.mongodb.net:27017,cluster0-shard-00-02-oeoo3.mongodb.net:27017/exam?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');

app.use(function (req, res, next) {
  req.db = db;
  next();
});
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
