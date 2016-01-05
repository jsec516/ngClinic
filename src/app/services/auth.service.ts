import {Injectable, Inject, EventEmitter} from "angular2/core";
import {WindowService} from './window.service';
import {CookieService} from './cookie.service';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Injectable()
export class AuthService {

    private authenticated: boolean = false;
    private token: string;
    private expires: any = 0;
    private tokenCookieName: string = 'glab-tkn';
    jwt: string = "";

    constructor(private router: Router, private cookies: CookieService, private http: Http) {
        console.log("called auth service with " + this.authenticated);
    }

    // Login and save the returned jason-web-token
    public doLogin(user: string, password: string) {
        let body = JSON.stringify({ "user": user, "password": password });
        let options = { "headers": new Headers({ "Content-Type": "application/json" }) };
        this.jwt = ""; // erase first, so if error is thrown, user is logged out.
        this.http.post("http://localhost:8000/jwt", body, options)
            .subscribe((rep, err) => {
                if (err) {
                    console.log("Error : ", err);
                    throw err;
                }
                console.log("Answer is : ", rep);
                this.jwt = rep.text();
                if (this.jwt) {
                    this.cookies.setCookie(this.tokenCookieName, this.jwt, '/', '');
                    if(this.cookies.getCookie(this.tokenCookieName)){
                        this.authenticated = true;
                        this.router.navigate(['Dashboard']);
                    }
                } else {
                    this.jwt = "";
                }
            });
        
    }

    public doLogout() {
        this.cookies.removeCookie(this.tokenCookieName);
    }

    public isAuthenticated() {
        return this.cookies.getCookie(this.tokenCookieName);
    }
}