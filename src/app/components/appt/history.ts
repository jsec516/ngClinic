import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'appt-history',
    template: require('./history.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService]
})

export class ApptHistory{
    
    constructor(
		private _router: Router,
		private _service: AuthService
	){}
    
}