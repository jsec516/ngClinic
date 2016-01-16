import {Injectable, Inject, EventEmitter} from "angular2/core";
import {CookieService} from './cookie.service';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from './auth.service';

@Injectable()
export class AppointmentService {

    services: Array<any>;
    practitioners: Array<any>;
    slots: Array<any>;
    reminders: Array<any>;
    loading: string;
    errorMsg: string;
    successMsg: string;
    
    constructor(private router: Router, private http: Http, private _auth: AuthService) {
        this.loading = '';
        this.services = [{ name: 'Acupuncture', id: 1 }, { id: 2, name: 'Bio-Meridian' }];
        this.reminders = ['Email', 'Phone'];
    }

    fetchPractitioners(service: number) {
        this.loading = 'practitioners';
         let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        
        // this.practitioners = [{ name: 'Kevin fojfer', id: 1 }, { id: 2, name: 'Rebecca Risk' }];
        this.http.get("/api/practitioners", options)
        .subscribe((rep, err) => {
                if (err) {
                    console.log("Error : ", err);
                    throw err;
                }
                console.log("Answer is : ", rep);
                var response = rep.json();
                if (response.success) {
                    this.practitioners = response.message;
                }
                this.loading = '';  
            });
        
    }

    fetchSlots(date: string) {
        this.slots = ['10:00AM', '10:30AM', '11:00AM'];
    }
    
    doAppointment(apptFormData){
        // clear the messages
        this.errorMsg = '';
        this.successMsg = '';
        
        // prepare the request params
        let body = JSON.stringify(apptFormData);
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        
        
        // submit the request
        this.http.post("/api/appt/save", body, options)
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
                    this.errorMsg = response.message;
                }
            });
    }
 
}