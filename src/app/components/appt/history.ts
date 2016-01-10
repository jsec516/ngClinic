import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

import {AuthService} from '../../services/auth.service';
import {HistoryService} from '../../services/history.service';

@Component({
    selector: 'appt-history',
    template: require('./history.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [HistoryService]
})

export class ApptHistory implements OnInit{

    constructor(
        private _router: Router,
        private _service: AuthService,
        public _historyService: HistoryService
    ) { 
        
    }


    ngOnInit() {
        if (!this._service.isAuthenticated()) {
            this._router.navigate(['Default']);
        }
        
        this._historyService.load();
    }

}