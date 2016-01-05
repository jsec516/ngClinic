import {Component, provide} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, RouterOutlet, PathLocationStrategy, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
import {COMMON_DIRECTIVES} from 'angular2/common';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

import {Register} from './components/register/register';
import {Login} from './components/login/login';
import {Forgot} from './components/forgot/forgot';
// import {Dashboard} from './components/dashboard/dashboard';

import {NewAppt} from './components/appt/new';
import {NewWait} from './components/wait/new';
import {ApptHistory} from './components/appt/history';
// import {WaitHistory} from './components/wait/history';
import {EditProfile} from './components/profile/edit';
import {Loggedout} from './components/loggedout/loggedout';

import {AppService} from './services/app.service';
import {AuthService} from './services/auth.service';
import {WindowService} from './services/window.service';
import {CookieService} from './services/cookie.service';
import {NavBar} from './components/navbar/navbar';

@Component({
    selector: 'app',
    directives: [NavBar, RouterOutlet, ROUTER_DIRECTIVES],
    viewProviders: [AuthService, AppService, CookieService],
    // providers: [AppService],
    template: require('./app.html')
})

@RouteConfig([
    { path: '/', name: 'Default', component: Login },
    { path: '/login', name: 'Login', component: Login, useAsDefault: true },
    { path: '/register', name: 'Register', component: Register },
    { path: '/forgot', name: 'Forgot', component: Forgot },
    { path: '/dashboard', name: 'Dashboard', component: NewAppt },
    { path: '/appt', name: 'NewAppt', component: NewAppt },
    { path: '/wait', name: 'NewWait', component: NewWait },
    { path: '/history/app', name: 'ApptHistory', component: ApptHistory },
    // { path: '/history/wait', name: 'WaitHistory', component: WaitHistory },
    { path: '/edit-profile', name: 'EditProfile', component: EditProfile },
    { path: '/loggedout', name: 'Loggedout', component: Loggedout }
])

export class App {
    constructor(private appService: AppService) {

    }
}

bootstrap(App, [WindowService, COMMON_DIRECTIVES, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);