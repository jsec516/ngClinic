import {Component, ElementRef, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location, OnActivate, OnDeactivate, ComponentInstruction} from 'angular2/router';

// load form related functionality
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES, AbstractControl}    from 'angular2/common';
// load local dependency
import {AuthService} from '../../services/auth.service';
import {AppointmentService} from '../../services/appointment.service';

// import * as TweenMax from 'gsap';
// load tweenmax
declare var gsap: any;
declare var $: any;

@Component({
    selector: 'new-appt',
    template: require('./new.html'),
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [AppointmentService]
})

export class NewAppt implements OnInit, OnActivate, OnDeactivate {
    elementRef: ElementRef;
    apptForm: ControlGroup;
    // counter: number = 0;
    testdate: string;
    
    constructor(
        private _router: Router,
        private _service: AuthService,
        private _apptService: AppointmentService,
        elementRef: ElementRef,
        private fb: FormBuilder
    ) {
        this.elementRef = elementRef;
        // console.log(this._apptService.services);
        this.apptForm = fb.group({
            service: new Control('', Validators.required),
            "practitioner": new Control('', Validators.required),
            "date": new Control('', Validators.required),
            "slot": ['', Validators.required],
            "reminder": ['', Validators.required],
            "comment": []
        });
        
        // watch for date change
        this.apptForm.controls['date'].valueChanges.subscribe((value) => {
            this.changeSlots(value);
        });
    }

    ngOnInit() {
        if (!this._service.isAuthenticated()) {
            this._router.navigate(['Default']);
        }
        
        // for bootstrap datepicker enable it
        // $(this.elementRef.nativeElement).find('.datepicker').datepicker();
        $(this.elementRef.nativeElement).find('.datepicker').datepicker({ autoclose: true, immediateUpdates: true })
            .on('changeDate', (e) => {
                console.log("date changed");
                (<Control>this.apptForm.controls['date']).updateValue(e.format('mm/dd/yyyy'));
            });
    }
    
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("NewAppt Page - initialized");

        gsap.fromTo($(".glab-new-form"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });

        // return Rx.Observable.of(true).delay(1000).toPromise();
        return new Promise((res, rej) => setTimeout(() => res(1), 300));
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("NewAppt Page - destroyed");
        gsap.fromTo($(".glab-new-form"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });

        // return Rx.Observable.of(true).delay(1000).toPromise();
        return new Promise((res, rej) => setTimeout(() => res(1), 100));
    }

    changePractitioners($event) {
        this._apptService.fetchPractitioners($event.target.value);
    }

    changeSlots(value) {
        // console.log('firing with , ', value)
        this._apptService.fetchSlots(value);
    }

    doAppointment(){
        this._apptService.doAppointment(this.apptForm.value);
    }
}