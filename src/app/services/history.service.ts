import {Injectable, Inject, EventEmitter} from "angular2/core";
import {CookieService} from './cookie.service';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from './auth.service';

@Injectable()
export class HistoryService {
    appointments: Array<any>;
    loading: string;
    
    constructor(private router: Router, private http: Http, private _auth: AuthService) {
        this.loading = '';
    }
    
    load(){
        setTimeout(()=>{
            this.appointments = [
                {service: 'Acupuncture', practitioner: 'Rebecca Risk', date: '12-12-2016', time: '12:30pm', status: 'expired'},
                {service: 'Acupuncture', practitioner: 'Rebecca Risk', date: '12-12-2016', time: '12:30pm', status: 'upcoming'}
            ];
        });
    }
}