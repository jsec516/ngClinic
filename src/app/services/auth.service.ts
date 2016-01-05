import {Injectable, Inject, EventEmitter} from "angular2/core";
import {WindowService} from './window.service';
import {Http, Headers} from 'angular2/http'

@Injectable()
export class AuthService {
    
    private authenticated:boolean = false;
    private token:string;
    private expires:any = 0;

    constructor(private windows: WindowService, private http:Http) {
        console.log("called auth service with "+this.authenticated);
    }

    public doLogin() {
        this.authenticated = true;
    }

    public doLogout() {
    }

    public isAuthenticated() {
        return this.authenticated;
    }
}