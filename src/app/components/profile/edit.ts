import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location, OnActivate, OnDeactivate, ComponentInstruction} from 'angular2/router';
// form related directives
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES, AbstractControl}    from 'angular2/common';
import {RadioControlValueAccessor} from "../../directives/radio_value_accessor";

import {Profile} from '../../forms/profile.form';
import {ProfileService} from '../../services/profile.service';
import {AuthService} from '../../services/auth.service';

// import * as TweenMax from 'gsap';
// load tweenmax
declare var gsap: any;
declare var $: any;

@Component({
    selector: 'edit-profile',
    template: require('./edit.html'),
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, RadioControlValueAccessor],
    providers: [ProfileService]
})

export class EditProfile implements OnInit, OnActivate, OnDeactivate {
    profileForm: ControlGroup;
    currentProfile: any;
    model: Profile;
    constructor(
        private _router: Router,
        private _service: AuthService,
        private fb: FormBuilder,
        private _profileService: ProfileService
    ) {
        
        // this approach also works
        // this.model = new Profile();
        // setTimeout(()=>{
        //     this.model = new Profile('dice');
        // }, 1000)
        
        
        this.profileForm = fb.group({
            firstName: new Control('', Validators.required),
            lastName: new Control('', Validators.required),
            email: new Control('', Validators.required),
            phone: ['', Validators.required],
            contactMethod: ['email', Validators.required]
        });

    }

    ngOnInit() {
        if (!this._service.isAuthenticated()) {
            return this._router.navigate(['Default']);
        }
        
        this._profileService.fetch().subscribe((rep, err) => {
            if (err) {
                console.log("Error : ", err);
                throw err;
            }
            
            var response = rep.json();
            var profile = response.message;
            //  console.log(profile.firstName);
            (<Control>this.profileForm.controls['firstName']).updateValue(profile.firstName);
            (<Control>this.profileForm.controls['lastName']).updateValue(profile.lastName);
            (<Control>this.profileForm.controls['email']).updateValue(profile.email);
            (<Control>this.profileForm.controls['phone']).updateValue(profile.phone);
            (<Control>this.profileForm.controls['contactMethod']).updateValue(profile.contactInfo);
        })
    }
    
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("profile Page - initialized");

        gsap.fromTo($(".glab-edit-profile-form"), .3, { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1 });

        // return Rx.Observable.of(true).delay(1000).toPromise();
        return new Promise((res, rej) => setTimeout(() => res(1), 300));
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log("profile Page - destroyed");
        gsap.fromTo($(".glab-edit-profile-form"), .1, { scale: 1, opacity: 1 }, { scale: 0.3, opacity: 0 });

        // return Rx.Observable.of(true).delay(1000).toPromise();
        return new Promise((res, rej) => setTimeout(() => res(1), 100));
    }
}