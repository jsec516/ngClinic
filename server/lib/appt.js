/* global __base */
/// <reference path="../../typings/tsd.d.ts" />
"use strict";

//==============================================================================
//                       Appointment logic - appt.js
//==============================================================================

var router = require('express').Router();
var bodyParser = require('body-parser');
var Appointment = require(__base + 'model/appointment');
var Practitioner = require(__base + 'model/practitioner');
var Service = require(__base + "model/service");
var async = require('async');

//==============================================================================
//                Private, internal helper functions
//==============================================================================

function saveAppt(req, res, done) {
    // console.log(req.body);
    req.assert('service', 'Please select a service.').isValidService();

    var errors = req.validationErrors();
    if (errors) {
        return done(errors, null);
    }

    // save appointment
    var doSave = function () {

        var tasks = {
            // fetch service record
            service: function (callback) {
                Service.findOne({
                    _id: req.body.service
                }, function(err, service){
                    if(err) { return callback(err); }
                    callback(null, 1);    
                });
            },
            
            // fetch practitioner record
            pracitioner: function (callback) {
                Practitioner.findOne({
                    _id: req.body.practitioner
                }, function(err, practitioner){
                    if(err) { return callback(err); }
                    callback(null, 2);    
                });
            }
        };

        // process result of series operation
        // results.service is service record
        // result.practitioner is practitioner record
        // call done method with success method if everything ok
        // call done with error if something wrong
        var callback = function (err, results) {
            return done(null, 'Appointment created successfully');
        };
        
        // save appointment
        async.series(tasks, callback);

        
    }

    process.nextTick(doSave);
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
router.post('/save', function (req, res) {
    console.log('head ', req.head);
    console.log('body ', req.body);
    // TODO need to change with configuration 
    saveAppt(req, res, function (err, message) {
        var result;

        if (err) {
            result = { 'success': false, 'message': err };
        } else {
            result = { 'success': true, 'message': message };
        }

        res.send(result);
    });
});

//============================EXPORTS====================================
// Provides the router for authentications
exports.router = function () { return router; };