import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'edit-profile',
    template: require('./edit.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService]
})

export class EditProfile{
    
    constructor(
		private _router: Router,
		private _service: AuthService
	){}
}