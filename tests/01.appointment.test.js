"use strict";
// jshint mocha:true

/*============================================================================
    Testing acl.js

Note that, using 'supertest', we do not need to launch directly a fully
configured server. Configuring an app is enough to test using volatile ports.

=============================================================================*/

describe("Full test for appointment.js in a test server", function () {
    var base = process.env.PWD
    global.__base = base + '/server/';
    var expect = require("expect");
 
    // NB : ne pas confondre avec les fonctions expect fournies par supertetest

    var express = require("express");
    var supertest = require("supertest");
    var app = express();
    var appt = require("../server/lib/appt");
    var expressValidator = require('express-validator');
    //===================================
    before(function () { // before all ...
        console.log("Running test server");

        expect(appt).toBeTruthy();
        expect(app).toBeTruthy();
        expect(appt.router).toBeTruthy();
        // MIDDLEWARES
        var validatorObj = require(__base + "lib/validator");
        app.use(expressValidator({customValidators: validatorObj.validators}));

        app.use("/api/appt", appt.router());
        app.all("/", function (req, res) { res.send("OK2"); });
    });
    
    //=======================================
    it("test server working", function (done) {
        supertest(app)
            .get("/")
            .expect(200)
            .end(function (err, res) {
                //console.log("Supertest gave : err=",err," res=",res);
                if (err) throw err;
                expect(res.text).toBe("OK2");
                done();
            });
    });
    
    //=======================================
    it("request a save appt", function (done) {
        supertest(app)
            .post("/api/appt/save")
            .set("Content-Type", "application/json")
            .send({service: 1, practitioner: 2})
            .expect(200)
            .end(function (err, res) {
                // if (err) throw err;
                done();
                console.log('final response ', res.text);
                expect(res.text).toBe(2);
                

            });

    });
    

});