import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'logged-out',
    template: require('./loggedout.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService]
})

export class Loggedout{
    
    constructor(
		private _router: Router,
		private _service: AuthService
	){}
    
}