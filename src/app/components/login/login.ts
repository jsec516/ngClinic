import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

// load form related functionality
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES}    from 'angular2/common';

import {LoginForm} from '../../forms/login.form';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'login',
    template: require('./login.html'),
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    // providers: [AuthService]
})

export class Login {
    user: string = "";
    password: string = "";
    model: LoginForm;

    constructor(
        private _router: Router,
        private authService: AuthService
    ) {
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
}