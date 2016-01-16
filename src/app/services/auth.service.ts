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
    loginError: string = "";
    registerError: string = "";
    successMsg: string = "";

    constructor(private router: Router, private cookies: CookieService, private http: Http) {
        console.log("called auth service with " + this.authenticated);
        this.jwt = this.getToken();
    }

    // Login and save the returned jason-web-token
    public doLogin(user: string, password: string) {
        // clear the messages
        this.loginError = '';
        this.jwt = ""; // erase first, so if error is thrown, user is logged out.
        
        // prepare the params for request
        let body = JSON.stringify({ "user": user, "password": password });
        let options = { "headers": new Headers({ "Content-Type": "application/json" }) };
        
        // send the request 
        this.http.post("/jwt", body, options)
            .subscribe((rep, err) => {
                if (err) {
                    console.log("Error : ", err);
                    throw err;
                }
                console.log("Answer is : ", rep);
                var response = rep.json();
                if (response.success) {
                    this.cookies.setCookie(this.tokenCookieName, response.message, '/', '');
                    if (this.cookies.getCookie(this.tokenCookieName)) {
                        this.jwt = response.message;
                        this.authenticated = true;
                        this.router.navigate(['Dashboard']);
                    }
                } else {
                    this.jwt = "";
                    this.loginError = response.message;
                }
            });

    }
    
    // Registration
    public doRegister(registerFormData) {
        // clear the messages
        this.registerError = '';
        this.successMsg = '';
        
        // prepare the request params
        let body = JSON.stringify(registerFormData);
        let options = { "headers": new Headers({ "Content-Type": "application/json" }) };
        
        // submit the request
        this.http.post("/register", body, options)
            .subscribe((rep, err) => {
                if (err) {
                    console.log("Error : ", err);
                    throw err;
                }
                console.log("Answer is : ", rep);
                var response = rep.json();
                if (response.success) {
                    this.successMsg = response.message;
                } else {
                    this.registerError = response.message;
                }
            });
    }

    private clearCookie() {
        this.cookies.removeCookie(this.tokenCookieName);
    }

    public doLogout() {
        this.clearCookie();
    }

    public isAuthenticated() {
        return this.cookies.getCookie(this.tokenCookieName);
    }
    
    public getToken(){
        return this.cookies.getCookie(this.tokenCookieName);
    }
}