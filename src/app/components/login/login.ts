import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, ComponentInstruction} from 'angular2/router';

// load form related functionality
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES}    from 'angular2/common';

import {LoginForm} from '../../forms/login.form';
import {AuthService} from '../../services/auth.service';
// import * as TweenMax from 'gsap';
// load tweenmax
declare var gsap: any;
declare var $: any;

@Component({
    selector: 'login',
    template: require('./login.html'),
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    // providers: [AuthService]
})

export class Login implements OnInit, OnActivate, OnDeactivate {
    user: string = "";
    password: string = "";
    model: LoginForm;

    constructor(
        private _router: Router,
        private authService: AuthService
    ) {
        this.authService.loginError='';
        this.model = new LoginForm('', '');
    }

    // whether login request contains an error or not
    // when user submit a request for login to server
    get hasError() {
        return this.authService.loginError;
    }

    get error() {
        return this.authService.loginError;
    }

    onSubmit() {
        console.log('calling auth service');
        this.authService.doLogin(this.model.email, this.model.password);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }


    // doLogin() {
    //     console.log('calling auth service');
    //     this.authService.doLogin(this.user, this.password);
    //     // this._router.navigate(['Dashboard']);
    // }
    
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            return this._router.navigate(['Dashboard']);
        }
    }

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        if (!this.authService.isAuthenticated()) {
            console.log("Login Page - initialized");
            gsap.fromTo($(".glab-login-form"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });
            // return Rx.Observable.of(true).delay(1000).toPromise();
            return new Promise((res, rej) => setTimeout(() => res(1), 300));
        }
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        if (!this.authService.isAuthenticated()) {
            console.log("Login Page - destroyed");
            gsap.fromTo($(".glab-login-form"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });
            // return Rx.Observable.of(true).delay(1000).toPromise();
            return new Promise((res, rej) => setTimeout(() => res(1), 100));
        }
    }

}