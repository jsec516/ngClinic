import {Injectable, Inject, EventEmitter} from "angular2/core";
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from './auth.service';

@Injectable()
export class ProfileService {


    constructor(private router: Router, private http: Http, private _auth: AuthService) {
        console.log('instantiation');
    }

    // Login and save the returned jason-web-token
    public fetch(user?: string) {
        if(!user) { user = 'bearer'; }
        // prepare the params for request
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
       
        // send the request 
        return this.http.get("http://localhost:8000/api/profile/"+user,  options);

    }
    
}