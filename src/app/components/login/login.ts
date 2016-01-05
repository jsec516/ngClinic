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
    user: string = "";
    password: string = "";
  
    constructor(
		private _router: Router,
		private authService: AuthService
	){}
    
    doLogin(){
        console.log('calling auth service');
        this.authService.doLogin(this.user, this.password);
        // this._router.navigate(['Dashboard']);
    }
}