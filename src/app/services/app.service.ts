import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';

@Injectable()
export class AppService {
    private nav:any = {};
    
    constructor(private http:Http) {
        this.nav = {title: 'Please Login First To Book Appointment'}
    }
}