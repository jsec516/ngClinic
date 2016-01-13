/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Practitioner logic - prac.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var Practitioner = require(__base + 'model/practitioner');
var User = require(__base + 'model/user');
var async = require('async');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function all(req, res, done) {
    // console.log('clinic', req.payload._doc._clinicId);
    
    var handleFetchResult = function (err, pracs) {
        console.log('practitioners', pracs);
        
        if (err) { return done(err); }
        if (pracs) {
            return done(null, pracs);
        }
        
        return done('NO_PRAC');
    };
    
    // fetch profile
    var doFetch = function () {
        Practitioner.find({}, handleFetchResult);
    //     Practitioner.count({'email': 'r@gmai.com'}, function(err, c) {
    //        console.log('Count is ' + c);
    //   });
    
    // var prac = new Practitioner({
    //         firstName: 'tada',
    //         lastName: 'dada',
    //         email: 'tada@tada.com'
    //     });

    //     prac.save(function (err) {
    //         if (err) return done('Error saving user.');
    //         console.log('saved');
    //         Practitioner.count({}, function(err, c) {
    //             console.log('Count is ' + c);
    //         });
    //         return done(null, "Thanks for signing up!!");
    //     });
    }

    process.nextTick(doFetch);
}

//==============================================================================
//                        Route management
//==============================================================================

// this will let us get the data from a POST
// either urlencoded, or in json
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Process a user registration request.
// user related data as x-www-form-urlencoded values in POST body
// Register user, send success message,
// or error message if registration failed
router.get('/', function (req, res) {
    
    all(req, res, function (err, message) {
        var result;

        if (err) {
            result = { 'success': false, 'message': err };
        } else {
            result = { 'success': true, 'message': message };
        }

        res.json(result).end();
    });
});

//============================EXPORTS====================================
// Provides the router for authentications
exports.router = function () { return router; };