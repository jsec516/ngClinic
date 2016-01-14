webpackJsonp([0],{

/***/ 0:
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var http_1 = __webpack_require__(/*! angular2/http */ 212);
	var browser_1 = __webpack_require__(/*! angular2/platform/browser */ 227);
	var common_1 = __webpack_require__(/*! angular2/common */ 230);
	var register_1 = __webpack_require__(/*! ./components/register/register */ 331);
	var login_1 = __webpack_require__(/*! ./components/login/login */ 339);
	var forgot_1 = __webpack_require__(/*! ./components/forgot/forgot */ 342);
	var new_1 = __webpack_require__(/*! ./components/appt/new */ 344);
	var new_2 = __webpack_require__(/*! ./components/wait/new */ 347);
	var history_1 = __webpack_require__(/*! ./components/appt/history */ 349);
	var edit_1 = __webpack_require__(/*! ./components/profile/edit */ 352);
	var loggedout_1 = __webpack_require__(/*! ./components/loggedout/loggedout */ 356);
	var app_service_1 = __webpack_require__(/*! ./services/app.service */ 358);
	var auth_service_1 = __webpack_require__(/*! ./services/auth.service */ 335);
	var window_service_1 = __webpack_require__(/*! ./services/window.service */ 359);
	var cookie_service_1 = __webpack_require__(/*! ./services/cookie.service */ 336);
	var navbar_1 = __webpack_require__(/*! ./components/navbar/navbar */ 360);
	var App = (function () {
	    function App(appService) {
	        this.appService = appService;
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [navbar_1.NavBar, router_1.RouterOutlet, router_1.ROUTER_DIRECTIVES],
	            viewProviders: [auth_service_1.AuthService, app_service_1.AppService, cookie_service_1.CookieService],
	            template: __webpack_require__(/*! ./app.html */ 362)
	        }),
	        router_1.RouteConfig([
	            { path: '/', name: 'Default', component: login_1.Login },
	            { path: '/login', name: 'Login', component: login_1.Login, useAsDefault: true },
	            { path: '/register', name: 'Register', component: register_1.Register },
	            { path: '/forgot', name: 'Forgot', component: forgot_1.Forgot },
	            { path: '/dashboard', name: 'Dashboard', component: new_1.NewAppt },
	            { path: '/appt', name: 'NewAppt', component: new_1.NewAppt },
	            { path: '/wait', name: 'NewWait', component: new_2.NewWait },
	            { path: '/history/app', name: 'ApptHistory', component: history_1.ApptHistory },
	            { path: '/edit-profile', name: 'EditProfile', component: edit_1.EditProfile },
	            { path: '/loggedout', name: 'Loggedout', component: loggedout_1.Loggedout }
	        ]), 
	        __metadata('design:paramtypes', [app_service_1.AppService])
	    ], App);
	    return App;
	})();
	exports.App = App;
	browser_1.bootstrap(App, [window_service_1.WindowService, common_1.COMMON_DIRECTIVES, router_1.ROUTER_DIRECTIVES, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);


/***/ },

/***/ 331:
/*!*************************************************!*\
  !*** ./src/app/components/register/register.ts ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var common_1 = __webpack_require__(/*! angular2/common */ 230);
	var email_validator_ts_1 = __webpack_require__(/*! ../../validators/email.validator.ts */ 333);
	var password_validator_ts_1 = __webpack_require__(/*! ../../validators/password.validator.ts */ 334);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var Register = (function () {
	    function Register(_router, authService, fb) {
	        this._router = _router;
	        this.authService = authService;
	        this.fb = fb;
	        this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, email_validator_ts_1.EmailValidator.validEmail]), email_validator_ts_1.EmailValidator.emailAlreadyExist);
	        this.registerForm = fb.group({
	            firstName: new common_1.Control('', common_1.Validators.required),
	            "lastName": new common_1.Control('', common_1.Validators.required),
	            matching_password: fb.group({
	                password: ['', common_1.Validators.required],
	                confirm: ['', common_1.Validators.required]
	            }, { validator: password_validator_ts_1.PasswordValidator.matchPassword }),
	            "email": this.email,
	            "phone": ['', common_1.Validators.required]
	        });
	        this.passwordGroup = this.registerForm.controls['matching_password'];
	    }
	    Object.defineProperty(Register.prototype, "formStatus", {
	        get: function () {
	            return JSON.stringify(this.registerForm.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Register.prototype.doRegister = function () {
	        this.authService.doRegister(this.registerForm.value);
	    };
	    Register.prototype.ngOnInit = function () {
	        if (this.authService.isAuthenticated()) {
	            return this._router.navigate(['Dashboard']);
	        }
	    };
	    Register.prototype.routerOnActivate = function (next, prev) {
	        if (!this.authService.isAuthenticated()) {
	            console.log("Register Page - initialized");
	            gsap.fromTo($("#glab-register"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });
	            return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 300); });
	        }
	    };
	    Register.prototype.routerOnDeactivate = function (next, prev) {
	        if (!this.authService.isAuthenticated()) {
	            console.log("Register Page - destroyed");
	            gsap.fromTo($("#glab-register"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });
	            return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 100); });
	        }
	    };
	    Register = __decorate([
	        core_1.Component({
	            selector: 'register',
	            template: __webpack_require__(/*! ./register.html */ 338),
	            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, common_1.FormBuilder])
	    ], Register);
	    return Register;
	})();
	exports.Register = Register;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 332)))

/***/ },

/***/ 333:
/*!***********************************************!*\
  !*** ./src/app/validators/email.validator.ts ***!
  \***********************************************/
/***/ function(module, exports) {

	var EmailValidator = (function () {
	    function EmailValidator() {
	    }
	    EmailValidator.validEmail = function (control) {
	        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
	        if (!EMAIL_REGEXP.test(control.value)) {
	            return { 'validEmail': true };
	        }
	    };
	    EmailValidator.emailAlreadyExist = function (control) {
	        return new Promise(function (resolve, reject) {
	            setTimeout(function () {
	                if (control.value === "some@gmail.com") {
	                    resolve({ "emailAlreadyExist": true });
	                }
	                else {
	                    resolve(null);
	                }
	                ;
	            }, 1000);
	        });
	    };
	    return EmailValidator;
	})();
	exports.EmailValidator = EmailValidator;


/***/ },

/***/ 334:
/*!**************************************************!*\
  !*** ./src/app/validators/password.validator.ts ***!
  \**************************************************/
/***/ function(module, exports) {

	var PasswordValidator = (function () {
	    function PasswordValidator() {
	    }
	    PasswordValidator.matchPassword = function (group) {
	        var password = group.controls['password'];
	        var confirm = group.controls['confirm'];
	        if (password.pristine || confirm.pristine) {
	            return null;
	        }
	        group.markAsTouched();
	        console.log(password.value, ' and ', confirm.value);
	        if (password.value === confirm.value) {
	            return null;
	        }
	        return {
	            isValid: true
	        };
	    };
	    return PasswordValidator;
	})();
	exports.PasswordValidator = PasswordValidator;


/***/ },

/***/ 335:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var cookie_service_1 = __webpack_require__(/*! ./cookie.service */ 336);
	var http_1 = __webpack_require__(/*! angular2/http */ 212);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var AuthService = (function () {
	    function AuthService(router, cookies, http) {
	        this.router = router;
	        this.cookies = cookies;
	        this.http = http;
	        this.authenticated = false;
	        this.expires = 0;
	        this.tokenCookieName = 'glab-tkn';
	        this.jwt = "";
	        this.loginError = "";
	        this.registerError = "";
	        this.successMsg = "";
	        console.log("called auth service with " + this.authenticated);
	        this.jwt = this.getToken();
	    }
	    AuthService.prototype.doLogin = function (user, password) {
	        var _this = this;
	        this.loginError = '';
	        this.jwt = "";
	        var body = JSON.stringify({ "user": user, "password": password });
	        var options = { "headers": new http_1.Headers({ "Content-Type": "application/json" }) };
	        this.http.post("http://localhost:8000/jwt", body, options)
	            .subscribe(function (rep, err) {
	            if (err) {
	                console.log("Error : ", err);
	                throw err;
	            }
	            console.log("Answer is : ", rep);
	            var response = rep.json();
	            if (response.success) {
	                _this.cookies.setCookie(_this.tokenCookieName, response.message, '/', '');
	                if (_this.cookies.getCookie(_this.tokenCookieName)) {
	                    _this.jwt = response.message;
	                    _this.authenticated = true;
	                    _this.router.navigate(['Dashboard']);
	                }
	            }
	            else {
	                _this.jwt = "";
	                _this.loginError = response.message;
	            }
	        });
	    };
	    AuthService.prototype.doRegister = function (registerFormData) {
	        var _this = this;
	        this.registerError = '';
	        this.successMsg = '';
	        var body = JSON.stringify(registerFormData);
	        var options = { "headers": new http_1.Headers({ "Content-Type": "application/json" }) };
	        this.http.post("http://localhost:8000/register", body, options)
	            .subscribe(function (rep, err) {
	            if (err) {
	                console.log("Error : ", err);
	                throw err;
	            }
	            console.log("Answer is : ", rep);
	            var response = rep.json();
	            if (response.success) {
	                _this.successMsg = response.message;
	            }
	            else {
	                _this.registerError = response.message;
	            }
	        });
	    };
	    AuthService.prototype.clearCookie = function () {
	        this.cookies.removeCookie(this.tokenCookieName);
	    };
	    AuthService.prototype.doLogout = function () {
	        this.clearCookie();
	    };
	    AuthService.prototype.isAuthenticated = function () {
	        return this.cookies.getCookie(this.tokenCookieName);
	    };
	    AuthService.prototype.getToken = function () {
	        return this.cookies.getCookie(this.tokenCookieName);
	    };
	    AuthService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router, cookie_service_1.CookieService, http_1.Http])
	    ], AuthService);
	    return AuthService;
	})();
	exports.AuthService = AuthService;


/***/ },

/***/ 336:
/*!********************************************!*\
  !*** ./src/app/services/cookie.service.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Cookies) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var CookieService = (function () {
	    function CookieService() {
	        this.cookies = Cookies;
	    }
	    CookieService.prototype.getCookie = function (cookieName) {
	        return this.cookies.get(cookieName);
	    };
	    CookieService.prototype.getAllCookies = function () {
	        return this.cookies.get();
	    };
	    CookieService.prototype.setCookie = function (name, value, path, domain, expiresInDays) {
	        if (path === void 0) { path = '/'; }
	        if (expiresInDays === void 0) { expiresInDays = 0; }
	        var options = {};
	        options.path = path;
	        if (domain) {
	            options.domain = domain;
	        }
	        if (expiresInDays > 0) {
	            options.expires = expiresInDays;
	        }
	        this.cookies.set(name, value, options);
	    };
	    CookieService.prototype.removeCookie = function (name) {
	        this.cookies.remove(name);
	    };
	    CookieService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], CookieService);
	    return CookieService;
	})();
	exports.CookieService = CookieService;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! js-cookie */ 337)))

/***/ },

/***/ 337:
/*!**************************************!*\
  !*** ./~/js-cookie/src/js.cookie.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * JavaScript Cookie v2.1.0
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	(function (factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			module.exports = factory();
		} else {
			var _OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = _OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init (converter) {
			function api (key, value, attributes) {
				var result;
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value))
							.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					return (document.cookie = [
						key, '=', value,
						attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
						attributes.path    && '; path=' + attributes.path,
						attributes.domain  && '; domain=' + attributes.domain,
						attributes.secure ? '; secure' : ''
					].join(''));
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var name = parts[0].replace(rdecode, decodeURIComponent);
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						cookie = converter.read ?
							converter.read(cookie, name) : converter(cookie, name) ||
							cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.get = api.set = api;
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	}));


/***/ },

/***/ 338:
/*!***************************************************!*\
  !*** ./src/app/components/register/register.html ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = "<div id=\"glab-register\" data-title=\"Register to be a member of anantahealth\">\n    <div  [hidden]=\"!authService.successMsg\" class=\"alert alert-success\"  role=\"alert\">{{authService.successMsg}}</div>\n    <div  [hidden]=\"!authService.registerError\" class=\"alert alert-danger\"  role=\"alert\">{{authService.registerError}}</div>\n    \n    <form role=\"form\" *ngIf=\"!authService.successMsg\" (ngSubmit)=\"doRegister()\" [ngFormModel]=\"registerForm\" #f=\"ngForm\" method=\"post\" data-update=\"#regSuccess\" action=\"submitRegister\" class=\"glab-register-form glab-form\">\n\n        <div class=\"form-group required\">\n            <label for=\"fName\" class=\"col-md-8 control-label\">First Name</label>\n            <input type=\"text\" ngControl=\"firstName\" class=\"form-control\" id=\"fName\" name=\"fName\" required=\"required\" placeholder=\"First Name\">\n        </div>\n\n        <div class=\"form-group required\">\n            <label for=\"lName\" class=\"col-md-8 control-label\">Last Name</label>\n            <input type=\"text\" ngControl=\"lastName\" class=\"form-control\" id=\"lName\" name=\"lName\" required=\"required\" placeholder=\"Last Name\">\n        </div>\n\n        <div class=\"form-group required\">\n            <label for=\"email\" class=\"col-md-8 control-label\">Email address</label>\n            <input type=\"email\" ngControl=\"email\" class=\"form-control\" id=\"email\" name=\"email\" required=\"required\" placeholder=\"Email\">\n            <p *ngIf=\"email.pending\">Fetching data from the server...</p>\n            <div *ngIf=\"email.touched && !email.valid && !email.pending\">\n                <p *ngIf=\"email.errors.required\">Email is required.</p>\n                <p *ngIf=\"email.errors.validEmail\">Your email is not in valid format</p>\n                <p *ngIf=\"email.errors.emailAlreadyExist\">This email is already registered</p>\n            </div>\n        </div>\n\n        <!--<div class=\"form-group required\">\n            <label for=\"passwd\" class=\"col-md-8 control-label\">Password</label>\n            <input type=\"password\" ngControl=\"password\" class=\"form-control\" id=\"passwd\" name=\"passwd\" required=\"required\" placeholder=\"Password\">\n        </div>\n\n        <div class=\"form-group required\">\n            <label for=\"rPasswd\" class=\"col-md-8 control-label\">Retype Password</label>\n            <input type=\"password\" ngControl=\"confirm\" class=\"form-control\" id=\"rPasswd\" name=\"rPasswd\" required=\"required\" placeholder=\"Retype Password\">\n        </div>-->\n        <!--[class.invalid]=\"passwordGroup.touched && !passwordGroup.valid\"-->\n        <div ngControlGroup=\"matching_password\" >\n            <div class=\"form-group\">\n                <label class=\"col-md-8 control-label\" for=\"passwd\">Password</label>\n                <input class=\"form-control\" required type=\"password\" ngControl=\"password\" id=\"passwd\" placeholder=\"Your password\" />\n            </div>\n            <div class=\"form-group\">\n                <label for=\"rPasswd\" class=\"col-md-8 control-label\">Password Confirmation</label>\n                <input class=\"form-control\" required type=\"password\" ngControl=\"confirm\" id=\"rPasswd\" placeholder=\"Password Confirmation\" />\n                <div *ngIf=\"passwordGroup.touched && !passwordGroup.valid\">\n                    <p *ngIf=\"passwordGroup.touched && !passwordGroup.valid\">Passwords must match.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group required\">\n            <label for=\"phone\" class=\"col-md-8 control-label\">Phone</label>\n            <input type=\"text\" ngControl=\"phone\" class=\"form-control\" id=\"phone\" name=\"phone\" required=\"required\" placeholder=\"phone number\">\n        </div>\n\n        <button type=\"submit\" [disabled]=\"!f.valid\" class=\"btn btn-default glab-btn\">Submit</button>\n        <div class=\"form-group account-options\">\n            <a href=\"#\" class=\"login-btn\" [routerLink]=\"['Login']\">Back to <strong>login</strong>?</a>\n        </div>\n        <!--<p>{{registerForm.value|json}}</p>-->\n    </form>\n    <!--TODO Remove this later: {{formStatus}}-->\n</div>";

/***/ },

/***/ 339:
/*!*******************************************!*\
  !*** ./src/app/components/login/login.ts ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var common_1 = __webpack_require__(/*! angular2/common */ 230);
	var login_form_1 = __webpack_require__(/*! ../../forms/login.form */ 340);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var Login = (function () {
	    function Login(_router, authService) {
	        this._router = _router;
	        this.authService = authService;
	        this.user = "";
	        this.password = "";
	        this.model = new login_form_1.LoginForm('', '');
	    }
	    Object.defineProperty(Login.prototype, "hasError", {
	        get: function () {
	            return this.authService.loginError;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Login.prototype, "error", {
	        get: function () {
	            return this.authService.loginError;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Login.prototype.onSubmit = function () {
	        console.log('calling auth service');
	        this.authService.doLogin(this.model.email, this.model.password);
	    };
	    Object.defineProperty(Login.prototype, "diagnostic", {
	        get: function () { return JSON.stringify(this.model); },
	        enumerable: true,
	        configurable: true
	    });
	    Login.prototype.ngOnInit = function () {
	        if (this.authService.isAuthenticated()) {
	            return this._router.navigate(['Dashboard']);
	        }
	    };
	    Login.prototype.routerOnActivate = function (next, prev) {
	        if (!this.authService.isAuthenticated()) {
	            console.log("Login Page - initialized");
	            gsap.fromTo($(".glab-login-form"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });
	            return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 300); });
	        }
	    };
	    Login.prototype.routerOnDeactivate = function (next, prev) {
	        if (!this.authService.isAuthenticated()) {
	            console.log("Login Page - destroyed");
	            gsap.fromTo($(".glab-login-form"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });
	            return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 100); });
	        }
	    };
	    Login = __decorate([
	        core_1.Component({
	            selector: 'login',
	            template: __webpack_require__(/*! ./login.html */ 341),
	            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
	    ], Login);
	    return Login;
	})();
	exports.Login = Login;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 332)))

/***/ },

/***/ 340:
/*!*************************************!*\
  !*** ./src/app/forms/login.form.ts ***!
  \*************************************/
/***/ function(module, exports) {

	var LoginForm = (function () {
	    function LoginForm(email, password) {
	        this.email = email;
	        this.password = password;
	    }
	    return LoginForm;
	})();
	exports.LoginForm = LoginForm;


/***/ },

/***/ 341:
/*!*********************************************!*\
  !*** ./src/app/components/login/login.html ***!
  \*********************************************/
/***/ function(module, exports) {

	module.exports = "<div id=\"glab-login\" style=\"padding-top: 20px;\" data-title=\"Please Login First To Book Appointment\">\n    <div id=\"\" *ngIf=\"hasError\" class=\"alert alert-danger\" role=\"alert\">{{ error }}</div>\n    <form role=\"form\" action=\"login\" (ngSubmit)=\"onSubmit()\"  #loginForm=\"ngForm\" method=\"post\" class=\"glab-login-form glab-form\">\n        <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"model.email\" ngControl=\"email\" #spy\n            #email=\"ngForm\" placeholder=\"Enter email\">\n            <div [hidden]=\"email.untouched || email.valid\" class=\"alert alert-danger\">\n                Email is required\n            </div>\n            <!--TODO: remove this: {{model.email}} TODO: remove this: {{spy.className}}-->\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"model.password\" ngControl=\"password\"\n            placeholder=\"Password\">\n        </div>\n\n        <button type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"btn btn-default glab-btn\">Submit</button>\n\n        <div class=\"form-group account-options\">\n            <a href=\"#\" class=\"forgot-btn\" [routerLink]=\"['Forgot']\">Forgot <strong>Password</strong>?</a>\n            <br/>\n            <a href=\"#\" class=\"register-btn\" [routerLink]=\"['Register']\">Create <strong>Account</strong>?</a>\n        </div>\n    </form>\n</div>";

/***/ },

/***/ 342:
/*!*********************************************!*\
  !*** ./src/app/components/forgot/forgot.ts ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var Forgot = (function () {
	    function Forgot(_router, authService) {
	        this._router = _router;
	        this.authService = authService;
	    }
	    Forgot.prototype.ngOnInit = function () {
	        if (this.authService.isAuthenticated()) {
	            return this._router.navigate(['Dashboard']);
	        }
	    };
	    Forgot.prototype.routerOnActivate = function (next, prev) {
	        if (!this.authService.isAuthenticated()) {
	            console.log("Register Page - initialized");
	            gsap.fromTo($(".glab-forgot-form"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });
	            return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 300); });
	        }
	    };
	    Forgot.prototype.routerOnDeactivate = function (next, prev) {
	        if (!this.authService.isAuthenticated()) {
	            console.log("Register Page - destroyed");
	            gsap.fromTo($(".glab-forgot-form"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });
	            return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 100); });
	        }
	    };
	    Forgot = __decorate([
	        core_1.Component({
	            selector: 'forgot',
	            template: __webpack_require__(/*! ./forgot.html */ 343),
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
	    ], Forgot);
	    return Forgot;
	})();
	exports.Forgot = Forgot;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 332)))

/***/ },

/***/ 343:
/*!***********************************************!*\
  !*** ./src/app/components/forgot/forgot.html ***!
  \***********************************************/
/***/ function(module, exports) {

	module.exports = "<div id=\"glab-forgot\" data-title=\"Enter Email Address To Get Password\">\n    <form role=\"form\" data-update=\"#forgotSuccess\" class=\"glab-forgot-form glab-form\" action=\"forgotPassword.php\" method=\"post\">\n\n        <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" required id=\"email\" placeholder=\"Enter email\">\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default glab-btn\">Submit</button>\n\n        <div class=\"form-group account-options\">\n            <a href=\"#\" class=\"login-btn\" [routerLink]=\"['Login']\">Back To <strong>Login</strong>?</a>\n        </div>\n\n    </form>\n</div>";

/***/ },

/***/ 344:
/*!****************************************!*\
  !*** ./src/app/components/appt/new.ts ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var common_1 = __webpack_require__(/*! angular2/common */ 230);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var appointment_service_1 = __webpack_require__(/*! ../../services/appointment.service */ 345);
	var NewAppt = (function () {
	    function NewAppt(_router, _service, _apptService, elementRef, fb) {
	        var _this = this;
	        this._router = _router;
	        this._service = _service;
	        this._apptService = _apptService;
	        this.fb = fb;
	        this.elementRef = elementRef;
	        this.apptForm = fb.group({
	            service: new common_1.Control('', common_1.Validators.required),
	            "practitioner": new common_1.Control('', common_1.Validators.required),
	            "date": new common_1.Control('', common_1.Validators.required),
	            "slot": ['', common_1.Validators.required],
	            "reminder": ['', common_1.Validators.required],
	            "comment": []
	        });
	        this.apptForm.controls['date'].valueChanges.subscribe(function (value) {
	            _this.changeSlots(value);
	        });
	    }
	    NewAppt.prototype.ngOnInit = function () {
	        var _this = this;
	        if (!this._service.isAuthenticated()) {
	            this._router.navigate(['Default']);
	        }
	        $(this.elementRef.nativeElement).find('.datepicker').datepicker({ autoclose: true, immediateUpdates: true })
	            .on('changeDate', function (e) {
	            console.log("date changed");
	            _this.apptForm.controls['date'].updateValue(e.format('mm/dd/yyyy'));
	        });
	    };
	    NewAppt.prototype.routerOnActivate = function (next, prev) {
	        console.log("NewAppt Page - initialized");
	        gsap.fromTo($(".glab-new-form"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });
	        return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 300); });
	    };
	    NewAppt.prototype.routerOnDeactivate = function (next, prev) {
	        console.log("NewAppt Page - destroyed");
	        gsap.fromTo($(".glab-new-form"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });
	        return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 100); });
	    };
	    NewAppt.prototype.changePractitioners = function ($event) {
	        this._apptService.fetchPractitioners($event.target.value);
	    };
	    NewAppt.prototype.changeSlots = function (value) {
	        this._apptService.fetchSlots(value);
	    };
	    NewAppt.prototype.doAppointment = function () {
	        this._apptService.doAppointment(this.apptForm.value);
	    };
	    NewAppt = __decorate([
	        core_1.Component({
	            selector: 'new-appt',
	            template: __webpack_require__(/*! ./new.html */ 346),
	            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
	            providers: [appointment_service_1.AppointmentService]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, appointment_service_1.AppointmentService, core_1.ElementRef, common_1.FormBuilder])
	    ], NewAppt);
	    return NewAppt;
	})();
	exports.NewAppt = NewAppt;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 332)))

/***/ },

/***/ 345:
/*!*************************************************!*\
  !*** ./src/app/services/appointment.service.ts ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var http_1 = __webpack_require__(/*! angular2/http */ 212);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var auth_service_1 = __webpack_require__(/*! ./auth.service */ 335);
	var AppointmentService = (function () {
	    function AppointmentService(router, http, _auth) {
	        this.router = router;
	        this.http = http;
	        this._auth = _auth;
	        this.loading = '';
	        this.services = [{ name: 'Acupuncture', id: 1 }, { id: 2, name: 'Bio-Meridian' }];
	        this.reminders = ['Email', 'Phone'];
	    }
	    AppointmentService.prototype.fetchPractitioners = function (service) {
	        var _this = this;
	        this.loading = 'practitioners';
	        var options = { "headers": new http_1.Headers({
	                "Authorization": "Bearer " + this._auth.getToken(),
	                "Content-Type": "application/json"
	            }) };
	        this.http.get("http://localhost:8000/api/practitioners", options)
	            .subscribe(function (rep, err) {
	            if (err) {
	                console.log("Error : ", err);
	                throw err;
	            }
	            console.log("Answer is : ", rep);
	            var response = rep.json();
	            if (response.success) {
	                _this.practitioners = response.message;
	            }
	            _this.loading = '';
	        });
	    };
	    AppointmentService.prototype.fetchSlots = function (date) {
	        this.slots = ['10:00AM', '10:30AM', '11:00AM'];
	    };
	    AppointmentService.prototype.doAppointment = function (apptFormData) {
	        var _this = this;
	        this.errorMsg = '';
	        this.successMsg = '';
	        var body = JSON.stringify(apptFormData);
	        var options = { "headers": new http_1.Headers({
	                "Authorization": "Bearer " + this._auth.getToken(),
	                "Content-Type": "application/json"
	            }) };
	        this.http.post("http://localhost:8000/api/appt/save", body, options)
	            .subscribe(function (rep, err) {
	            if (err) {
	                console.log("Error : ", err);
	                throw err;
	            }
	            console.log("Answer is : ", rep);
	            var response = rep.json();
	            if (response.success) {
	                _this.successMsg = response.message;
	            }
	            else {
	                _this.errorMsg = response.message;
	            }
	        });
	    };
	    AppointmentService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router, http_1.Http, auth_service_1.AuthService])
	    ], AppointmentService);
	    return AppointmentService;
	})();
	exports.AppointmentService = AppointmentService;


/***/ },

/***/ 346:
/*!******************************************!*\
  !*** ./src/app/components/appt/new.html ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "<div id=\"glab-new-appt\" data-title=\"Make an appointment\">\n    <div  [hidden]=\"!_apptService.successMsg\" class=\"alert alert-success\"  role=\"alert\">{{_apptService.successMsg}}</div>\n    <div  [hidden]=\"!_apptService.errorMsg\" class=\"alert alert-danger\"  role=\"alert\">{{_apptService.errorMsg}}</div>\n    \n    <form [hidden]=\"_apptService.successMsg\" [ngFormModel]=\"apptForm\" #f=\"ngForm\" (ngSubmit)=\"doAppointment()\" role=\"form\" method=\"post\" action=\"submitApp\" data-update=\"#glab-main-container\" class=\"glab-new-form glab-form\">\n        \n        <div class=\"form-group\">\n            <label for=\"service\">Service</label>\n            <select ngControl=\"service\" (change)=\"changePractitioners($event)\" required id=\"service\" class=\"form-control\" name=\"services\" placeholder=\"Select Service\">\n                <option value=\"\" disabled selected>Select Service</option>\n                <option *ngFor=\"#s of _apptService.services\" [value]=\"s.id\">{{ s.name }}</option>\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"practitioner\">Practitioner</label>\n            <select ngControl=\"practitioner\" id=\"practitioner\" required  class=\"form-control\" name=\"practitioners\">\n                <option value=\"\" disabled selected>Select Pracitioner</option>\n                <option *ngFor=\"#p of _apptService.practitioners\" [value]=\"p._id\">{{ p.firstName + ' ' + p.lastName }}</option>\n            </select>\n            <span *ngIf=\"_apptService.loading==='practitioners'\">loading....</span>\n        </div>\n\n        <div class=\"form-group app-date-container\">\n            <label for=\"app_date\">Appointment Date:</label>\n            <input #date ngControl=\"date\" required   placeholder=\"Select Date\" type=\"text\" class=\"form-control datepicker\" name=\"app_date\" id=\"app_date\" />\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"app_time\">Time:</label>\n            <select ngControl=\"slot\" required  id=\"app_time\" class=\"form-control\" name=\"app_time\">\n                <option value=\"\" disabled selected>Select Slot</option>\n                <option *ngFor=\"#slot of _apptService.slots\" [value]=\"slot\">{{ slot }}</option>\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"app_reminder\">Reminder Type:</label>\n            <select ngControl=\"reminder\" required id=\"app_reminder\" class=\"form-control\" name=\"app_reminder\">\n                <option value=\"\" disabled selected>Select Reminder</option>\n                <option *ngFor=\"#reminder of _apptService.reminders\" [value]=\"reminder\">{{ reminder }}</option>\n            </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"pt_comments\">Add Comment:</label>\n            <textarea ngControl=\"comment\" #comment class=\"form-control\" id=\"pt_comments\" name=\"pt_comments\"></textarea>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default glab-btn\">Submit</button>\n\n        <!--<div class=\"form-group account-options\">\n            <a href=\"#\" class=\"wait-btn\">or Request an <strong>waiting appointment</strong></a>\n            <a href=\"#\" class=\"new-btn\">or Create an <strong> appointment</strong></a>\n        </div>-->\n    </form>\n</div>";

/***/ },

/***/ 347:
/*!****************************************!*\
  !*** ./src/app/components/wait/new.ts ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var NewWait = (function () {
	    function NewWait(_router, _service) {
	        this._router = _router;
	        this._service = _service;
	    }
	    NewWait.prototype.doLogin = function () {
	    };
	    NewWait = __decorate([
	        core_1.Component({
	            selector: 'new-wait',
	            template: __webpack_require__(/*! ./new.html */ 348),
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [auth_service_1.AuthService]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
	    ], NewWait);
	    return NewWait;
	})();
	exports.NewWait = NewWait;


/***/ },

/***/ 348:
/*!******************************************!*\
  !*** ./src/app/components/wait/new.html ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = "";

/***/ },

/***/ 349:
/*!********************************************!*\
  !*** ./src/app/components/appt/history.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var history_service_1 = __webpack_require__(/*! ../../services/history.service */ 350);
	var ApptHistory = (function () {
	    function ApptHistory(_router, _service, _historyService) {
	        this._router = _router;
	        this._service = _service;
	        this._historyService = _historyService;
	    }
	    ApptHistory.prototype.ngOnInit = function () {
	        if (!this._service.isAuthenticated()) {
	            this._router.navigate(['Default']);
	        }
	        this._historyService.load();
	    };
	    ApptHistory.prototype.routerOnActivate = function (next, prev) {
	        console.log("history Page - initialized");
	        gsap.fromTo($(".glab-app-history"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });
	        return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 300); });
	    };
	    ApptHistory.prototype.routerOnDeactivate = function (next, prev) {
	        console.log("history Page - destroyed");
	        gsap.fromTo($(".glab-app-history"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });
	        return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 100); });
	    };
	    ApptHistory = __decorate([
	        core_1.Component({
	            selector: 'appt-history',
	            template: __webpack_require__(/*! ./history.html */ 351),
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [history_service_1.HistoryService]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, history_service_1.HistoryService])
	    ], ApptHistory);
	    return ApptHistory;
	})();
	exports.ApptHistory = ApptHistory;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 332)))

/***/ },

/***/ 350:
/*!*********************************************!*\
  !*** ./src/app/services/history.service.ts ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var http_1 = __webpack_require__(/*! angular2/http */ 212);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var auth_service_1 = __webpack_require__(/*! ./auth.service */ 335);
	var HistoryService = (function () {
	    function HistoryService(router, http, _auth) {
	        this.router = router;
	        this.http = http;
	        this._auth = _auth;
	        this.loading = '';
	    }
	    HistoryService.prototype.load = function () {
	        var _this = this;
	        setTimeout(function () {
	            _this.appointments = [
	                { service: 'Acupuncture', practitioner: 'Rebecca Risk', date: '12-12-2016', time: '12:30pm', status: 'expired' },
	                { service: 'Acupuncture', practitioner: 'Rebecca Risk', date: '12-12-2016', time: '12:30pm', status: 'upcoming' }
	            ];
	        });
	    };
	    HistoryService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router, http_1.Http, auth_service_1.AuthService])
	    ], HistoryService);
	    return HistoryService;
	})();
	exports.HistoryService = HistoryService;


/***/ },

/***/ 351:
/*!**********************************************!*\
  !*** ./src/app/components/appt/history.html ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = "<div id=\"glab-app-history\" class=\"glab-app-history\" data-title=\"Appointment History\">\n    <table class=\"table table-hover\">\n        <thead>\n            <tr>\n                <th>Service</th>\n                <th>Practitioner</th>\n                <th>Date</th>\n                <th>Time</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"#appt of _historyService.appointments\" >\n                <td>\n                    {{appt.service}}\n                </td>\n                <td>\n                    {{appt.practitioner}}\n                </td>\n                <td>\n                    {{appt.date}}\n                </td>\n                <td>\n                    {{appt.time}}\n                </td>\n                <td>\n                    <a *ngIf=\"appt.status==='upcoming'\" class=\"cancel-appt-btn\" href=\"#\">Cancel</a>\n                    <span *ngIf=\"appt.status==='expired'\" >N/A</span>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>";

/***/ },

/***/ 352:
/*!********************************************!*\
  !*** ./src/app/components/profile/edit.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var common_1 = __webpack_require__(/*! angular2/common */ 230);
	var radio_value_accessor_1 = __webpack_require__(/*! ../../directives/radio_value_accessor */ 353);
	var profile_service_1 = __webpack_require__(/*! ../../services/profile.service */ 354);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var EditProfile = (function () {
	    function EditProfile(_router, _service, fb, _profileService) {
	        this._router = _router;
	        this._service = _service;
	        this.fb = fb;
	        this._profileService = _profileService;
	        this.profileForm = fb.group({
	            firstName: new common_1.Control('', common_1.Validators.required),
	            lastName: new common_1.Control('', common_1.Validators.required),
	            email: new common_1.Control('', common_1.Validators.required),
	            phone: ['', common_1.Validators.required],
	            contactMethod: ['email', common_1.Validators.required]
	        });
	    }
	    EditProfile.prototype.ngOnInit = function () {
	        var _this = this;
	        if (!this._service.isAuthenticated()) {
	            return this._router.navigate(['Default']);
	        }
	        this._profileService.fetch().subscribe(function (rep, err) {
	            if (err) {
	                console.log("Error : ", err);
	                throw err;
	            }
	            var response = rep.json();
	            var profile = response.message;
	            _this.profileForm.controls['firstName'].updateValue(profile.firstName);
	            _this.profileForm.controls['lastName'].updateValue(profile.lastName);
	            _this.profileForm.controls['email'].updateValue(profile.email);
	            _this.profileForm.controls['phone'].updateValue(profile.phone);
	            _this.profileForm.controls['contactMethod'].updateValue(profile.contactInfo);
	        });
	    };
	    EditProfile.prototype.routerOnActivate = function (next, prev) {
	        console.log("profile Page - initialized");
	        gsap.fromTo($(".glab-edit-profile-form"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });
	        return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 300); });
	    };
	    EditProfile.prototype.routerOnDeactivate = function (next, prev) {
	        console.log("profile Page - destroyed");
	        gsap.fromTo($(".glab-edit-profile-form"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });
	        return new Promise(function (res, rej) { return setTimeout(function () { return res(1); }, 100); });
	    };
	    EditProfile = __decorate([
	        core_1.Component({
	            selector: 'edit-profile',
	            template: __webpack_require__(/*! ./edit.html */ 355),
	            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, radio_value_accessor_1.RadioControlValueAccessor],
	            providers: [profile_service_1.ProfileService]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService, common_1.FormBuilder, profile_service_1.ProfileService])
	    ], EditProfile);
	    return EditProfile;
	})();
	exports.EditProfile = EditProfile;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 332)))

/***/ },

/***/ 353:
/*!****************************************************!*\
  !*** ./src/app/directives/radio_value_accessor.ts ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var common_1 = __webpack_require__(/*! angular2/common */ 230);
	var lang_1 = __webpack_require__(/*! angular2/src/facade/lang */ 73);
	var RADIO_VALUE_ACCESSOR = lang_1.CONST_EXPR(new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }), multi: true }));
	var RadioControlValueAccessor = (function () {
	    function RadioControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef, 'checked', value == this._elementRef.nativeElement.value);
	    };
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    RadioControlValueAccessor = __decorate([
	        core_1.Directive({
	            selector: 'input[type=radio][ngControl],input[type=radio][ngFormControl],input[type=radio][ngModel]',
	            host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	            bindings: [RADIO_VALUE_ACCESSOR]
	        }), 
	        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
	    ], RadioControlValueAccessor);
	    return RadioControlValueAccessor;
	})();
	exports.RadioControlValueAccessor = RadioControlValueAccessor;


/***/ },

/***/ 354:
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var http_1 = __webpack_require__(/*! angular2/http */ 212);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var auth_service_1 = __webpack_require__(/*! ./auth.service */ 335);
	var ProfileService = (function () {
	    function ProfileService(router, http, _auth) {
	        this.router = router;
	        this.http = http;
	        this._auth = _auth;
	        console.log('instantiation');
	    }
	    ProfileService.prototype.fetch = function (user) {
	        if (!user) {
	            user = 'bearer';
	        }
	        var options = { "headers": new http_1.Headers({
	                "Authorization": "Bearer " + this._auth.getToken(),
	                "Content-Type": "application/json"
	            }) };
	        return this.http.get("http://localhost:8000/api/profile/" + user, options);
	    };
	    ProfileService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [router_1.Router, http_1.Http, auth_service_1.AuthService])
	    ], ProfileService);
	    return ProfileService;
	})();
	exports.ProfileService = ProfileService;


/***/ },

/***/ 355:
/*!**********************************************!*\
  !*** ./src/app/components/profile/edit.html ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = "<div id=\"glab-edit-profile\" data-title=\"Please Login First To Book Appointment\">\n    <form role=\"form\" [ngFormModel]=\"profileForm\" #f=\"ngForm\" method=\"post\" action=\"updateProfile\" data-update=\"#glab-edit-status\" class=\"glab-edit-profile-form glab-form\">\n\n        <div class=\"form-group\">\n            <label for=\"editFirstName\">First Name</label>\n            <input type=\"text\" required id=\"editFirstName\" class=\"form-control\" ngControl=\"firstName\" />\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"editLastName\">Last Name</label>\n            <input type=\"text\" required id=\"editLastName\" class=\"form-control\" ngControl=\"lastName\" value=\"\" />\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"editEmail\">E-mail</label>\n            <input type=\"text\" disabled=\"disabled\" id=\"editEmail\" class=\"form-control\" ngControl=\"email\" value=\"\" />\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"pass_option\">Password</label>\n            <a href=\"#\" id=\"pass_option\" name=\"pass_option\">change password?</a>\n        </div>\n\n        <div class=\"form-group pass_options\">\n            <label for=\"new_password\">New Password</label>\n            <input type=\"password\" id=\"new_password\" class=\"form-control\" name=\"new_password\" />\n        </div>\n\n        <div class=\"form-group pass_options\">\n            <label for=\"re_password\">Retype Password (Type your new password again)</label>\n            <input type=\"password\" id=\"re_password\" class=\"form-control\" name=\"re_password\" />\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"editPhone\">Phone</label>\n            <input type=\"text\" required id=\"editPhone\" class=\"form-control\" ngControl=\"phone\" value=\"\" />\n        </div>\n\n\n        <div class=\"form-group\">\n            <label for=\"editContact\">Contact Me</label>\n        </div>\n\n        <div class=\"checkbox\">\n            <label>\n                <input id=\"editContact1\" ngControl=\"contactMethod\" name=\"editContact\" type=\"radio\" value=\"email\"> Email\n            </label>\n        </div>\n\n        <div class=\"checkbox\">\n            <label>\n                <input id=\"editContact2\" ngControl=\"contactMethod\" name=\"editContact\" type=\"radio\" value=\"phone\"> Phone\n            </label>\n        </div>\n\n        <div class=\"checkbox\">\n            <label>\n                <input id=\"editContact3\" ngControl=\"contactMethod\" name=\"editContact\" type=\"radio\" value=\"both\"> Both\n            </label>\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-default glab-btn\" style=\"\">Submit</button>\n    </form>\n</div>";

/***/ },

/***/ 356:
/*!***************************************************!*\
  !*** ./src/app/components/loggedout/loggedout.ts ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var Loggedout = (function () {
	    function Loggedout(_router, _service) {
	        this._router = _router;
	        this._service = _service;
	    }
	    Loggedout = __decorate([
	        core_1.Component({
	            selector: 'logged-out',
	            template: __webpack_require__(/*! ./loggedout.html */ 357),
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [auth_service_1.AuthService]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
	    ], Loggedout);
	    return Loggedout;
	})();
	exports.Loggedout = Loggedout;


/***/ },

/***/ 357:
/*!*****************************************************!*\
  !*** ./src/app/components/loggedout/loggedout.html ***!
  \*****************************************************/
/***/ function(module, exports) {

	module.exports = "";

/***/ },

/***/ 358:
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var http_1 = __webpack_require__(/*! angular2/http */ 212);
	var AppService = (function () {
	    function AppService(http) {
	        this.http = http;
	        this.nav = {};
	        this.nav = { title: 'Please Login First To Book Appointment' };
	    }
	    AppService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], AppService);
	    return AppService;
	})();
	exports.AppService = AppService;


/***/ },

/***/ 359:
/*!********************************************!*\
  !*** ./src/app/services/window.service.ts ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var WindowService = (function () {
	    function WindowService() {
	    }
	    WindowService.prototype.createWindow = function (url, name, width, height, left, top) {
	        if (name === void 0) { name = 'Window'; }
	        if (width === void 0) { width = 500; }
	        if (height === void 0) { height = 600; }
	        if (left === void 0) { left = 0; }
	        if (top === void 0) { top = 0; }
	        if (url == null) {
	            return null;
	        }
	        var options = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
	        return window.open(url, name, options);
	    };
	    WindowService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], WindowService);
	    return WindowService;
	})();
	exports.WindowService = WindowService;


/***/ },

/***/ 360:
/*!*********************************************!*\
  !*** ./src/app/components/navbar/navbar.ts ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! angular2/core */ 70);
	var router_1 = __webpack_require__(/*! angular2/router */ 187);
	var auth_service_1 = __webpack_require__(/*! ../../services/auth.service */ 335);
	var NavBar = (function () {
	    function NavBar(router, authService) {
	        this.router = router;
	        this.authService = authService;
	    }
	    Object.defineProperty(NavBar.prototype, "authenticated", {
	        get: function () {
	            return this.authService.isAuthenticated();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NavBar.prototype.doLogout = function () {
	        this.authService.doLogout();
	    };
	    NavBar = __decorate([
	        core_1.Component({
	            selector: 'navbar',
	            template: __webpack_require__(/*! ./navbar.html */ 361),
	            inputs: ['nav'],
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
	    ], NavBar);
	    return NavBar;
	})();
	exports.NavBar = NavBar;


/***/ },

/***/ 361:
/*!***********************************************!*\
  !*** ./src/app/components/navbar/navbar.html ***!
  \***********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12 banner-container\">\n        <a href=\"#\" [routerLink]=\"['Default']\" class=\"glab-home\"><span class=\"glyphicon glyphicon-home glab-home-icon\"></span></a>\n        <h1 id=\"banner-title\">{{ nav.title }}</h1>\n        <div id=\"nav-menu\">\n            <a *ngIf=\"!authenticated\" href=\"#\" class=\"btn btn-default glab-btn register-btn\" [routerLink]=\"['Register']\">Register</a>\n            <div *ngIf=\"authenticated\" class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-default glab-btn dropdown-toggle\" data-toggle=\"dropdown\">\n                    Actions\n                    <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu actions-menu\" role=\"menu\">\n                    <li><a [routerLink]=\"['NewAppt']\" href=\"#\">New Appt.</a></li>\n                    <li><a [routerLink]=\"['ApptHistory']\" href=\"#glab-app-history\">Appt History</a></li>\n                    <!--<li><a [routerLink]=\"['WaitHistory']\" href=\"#glab-wait-history\">Waiting History</a></li> -->\n                    <li><a [routerLink]=\"['EditProfile']\" href=\"#glab-edit-profile\">Edit Profile</a></li>\n                    <li><a (click)=\"doLogout()\" href=\"#\">Logout</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 362:
/*!**************************!*\
  !*** ./src/app/app.html ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = "<!-- MAIN CONTENT AREA -->\n<div class=\"container-fluid main-wrapper\">\n    <navbar [nav]=\"appService.nav\"></navbar>\n    <div class=\"row\">\n        <div id=\"glab-main-container\" class=\"col-lg-12 main-container\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <div class=\"row footer\">\n        <div class=\"col-lg-12 text-center\">\n            Design & Developed by <a href=\"http://jahid.me\" >jahidul Islam</a>\n        </div>\n    </div>\n</div>\n<!-- END OF MAIN CONTENT -->";

/***/ }

});
//# sourceMappingURL=app.map