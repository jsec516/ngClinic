"use strict";
/*============================================================================
                          Application setup
==============================================================================*/

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express

// REGISTER OUR ROUTES -------------------------------

// Register static route for client files
app.use(express.static("client"));

// ========================= Export de l'appli ==============================
exports.app = function(){return app;};