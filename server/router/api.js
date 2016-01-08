/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//              Route definitions for the api part of application
//
//==============================================================================

var express = require('express');
var bodyParser = require('body-parser');

// get an instance of express router
var router = express.Router();

// register routers for api
var jwtAuth = require(__base + 'lib/jwt').jwtAuth(); 
router.use(jwtAuth);

// this will let us get the data from a POST
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

// define routes api/***
router.get('/dashboard', function (req, res) {
    res.send('protected area');
});

//============================EXPORTS====================================

// Provides the api routers
exports.router = function(){ return router; };