//These first 3 lines will be deprecated by the final release
import {Component} from "angular2/core";

import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'navbar',
    template: require('./navbar.html'),
    // providers: [AuthService],
    inputs: ['nav'],
    directives: [ROUTER_DIRECTIVES]
})

export class NavBar{
    
    constructor(private router:Router, private authService:AuthService) {
    }
    
    get authenticated() {
        return this.authService.isAuthenticated();
    }
    
    doLogout(){
        this.authService.doLogout();
    }
}