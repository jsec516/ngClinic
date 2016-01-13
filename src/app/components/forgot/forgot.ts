import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, OnActivate, OnDeactivate, ComponentInstruction} from 'angular2/router';

import {AuthService} from '../../services/auth.service';
// import * as TweenMax from 'gsap';
// load tweenmax
declare var gsap: any;
declare var $: any;


@Component({
    selector: 'forgot',
    template: require('./forgot.html'),
    directives: [ROUTER_DIRECTIVES]
})

export class Forgot implements OnInit, OnActivate, OnDeactivate{
    constructor(
        private _router: Router,
        private authService: AuthService
    ){
        
    }
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            return this._router.navigate(['Dashboard']);
        }
    }
    
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        if (!this.authService.isAuthenticated()) {
            console.log("Register Page - initialized");
            gsap.fromTo($(".glab-forgot-form"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });
            // return Rx.Observable.of(true).delay(1000).toPromise();
            return new Promise((res, rej) => setTimeout(() => res(1), 300));
        }
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        if (!this.authService.isAuthenticated()) {
            console.log("Register Page - destroyed");
            gsap.fromTo($(".glab-forgot-form"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });
            // return Rx.Observable.of(true).delay(1000).toPromise();
            return new Promise((res, rej) => setTimeout(() => res(1), 100));
        }
    }
}