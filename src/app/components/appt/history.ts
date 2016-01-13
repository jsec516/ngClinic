import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location, OnActivate, OnDeactivate, ComponentInstruction} from 'angular2/router';

import {AuthService} from '../../services/auth.service';
import {HistoryService} from '../../services/history.service';

// import * as TweenMax from 'gsap';
// load tweenmax
declare var gsap: any;
declare var $: any;

@Component({
    selector: 'appt-history',
    template: require('./history.html'),
    directives: [ROUTER_DIRECTIVES],
    providers: [HistoryService]
})

export class ApptHistory implements OnInit, OnActivate, OnDeactivate {

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

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("history Page - initialized");

        gsap.fromTo($(".glab-app-history"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });

        // return Rx.Observable.of(true).delay(1000).toPromise();
        return new Promise((res, rej) => setTimeout(() => res(1), 300));
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("history Page - destroyed");
        gsap.fromTo($(".glab-app-history"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });

        // return Rx.Observable.of(true).delay(1000).toPromise();
        return new Promise((res, rej) => setTimeout(() => res(1), 100));
    }
}