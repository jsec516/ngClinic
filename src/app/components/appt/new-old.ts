import {Component, ElementRef, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';

// load form related functionality
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES, AbstractControl}    from 'angular2/common';

// load local dependency
import {AuthService} from '../../services/auth.service';
import {AppointmentService} from '../../services/appointment.service';

declare var $: any;

@Component({
    selector: 'new-appt',
    template: require('./new.html'),
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [AppointmentService]
})

export class NewAppt implements OnInit{
    elementRef: ElementRef;
    apptForm: ControlGroup;
    counter: number = 0;
     
    constructor(
		private _router: Router,
		private _service: AuthService,
        private _apptService: AppointmentService,
        elementRef: ElementRef,
        private fb: FormBuilder
	){
        this.elementRef = elementRef;
        // console.log(this._apptService.services);
        this.apptForm = fb.group({
            service: new Control('', Validators.required),
            "practitioner": new Control('', Validators.required),
            "date": new Control('', Validators.required),
            "slot": ['', Validators.required],
            "reminderType": ['', Validators.required],
            "comment": []
        });
        
        // watch simple select
        // fired twice so far
        this.apptForm.controls['date'].valueChanges.subscribe((value)=>{
            console.log(this.counter, "Value: ", value);
            this.counter++;
        });
    }
   
    ngOnInit(){
        if(!this._service.isAuthenticated()){
            this._router.navigate(['Default']);
        }
        
        // for bootstrap datepicker enable it
        $(this.elementRef.nativeElement).find('.datepicker').datepicker({autoclose
:true, immediateUpdates: true});

        // console.log(window['jQuery']);
        // $(this.elementRef.nativeElement).datepicker();
    }
    
    changePractitioners($event){
        this._apptService.fetchPractitioners($event.target.value);
    }
    
    changeSlots(value){
        console.log(value);
        console.log('firing with , ', value)
        this._apptService.fetchSlots(value);
    }
    
}