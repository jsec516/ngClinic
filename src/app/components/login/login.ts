import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'login',
    template: require('./login.html'),
    directives: [ROUTER_DIRECTIVES],
    // providers: [AuthService]
})

export class Login{
    
    constructor(
		private _router: Router,
		private authService: AuthService
	){}
    
    doLogin(){
        this.authService.doLogin();
        this._router.navigate(['Dashboard']);
    }
}