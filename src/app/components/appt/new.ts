import {Component, ElementRef, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';

// load form related functionality
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES, AbstractControl}    from 'angular2/common';

// load local dependency
import {AuthService} from '../../services/auth.service';

declare var $: any;

@Component({
    selector: 'new-appt',
    template: require('./new.html'),
    directives: [ROUTER_DIRECTIVES],
})

export class NewAppt implements OnInit{
    elementRef: ElementRef;
    registerForm: ControlGroup;
     
    constructor(
		private _router: Router,
		private _service: AuthService,
        elementRef: ElementRef
	){
        this.elementRef = elementRef;
    }
   
    ngOnInit(){
        if(!this._service.isAuthenticated()){
            this._router.navigate(['Default']);
        }
        
        $(this.elementRef.nativeElement).find('.datepicker').datepicker({autoclose
:true});
        // console.log(window['jQuery']);
        // $(this.elementRef.nativeElement).datepicker();
    }
}