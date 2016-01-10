import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

// load form related functionality
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES, AbstractControl}    from 'angular2/common';
import { EmailValidator } from '../../validators/email.validator.ts';
import { PasswordValidator } from '../../validators/password.validator.ts';

import {User} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'register',
    template: require('./register.html'),
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})

export class Register implements OnInit{
    
    // for related variables
    // payLoad = null;
    registerForm: ControlGroup;
    passwordGroup: any;
    // matchPass: any;
    // fields
    email: Control;
    asyncEmail: Control;

    constructor(
        private _router: Router,
        private authService: AuthService,
        private fb: FormBuilder
    ) {
        this.email = new Control('', Validators.compose([Validators.required, EmailValidator.validEmail]), EmailValidator.emailAlreadyExist);
        this.registerForm = fb.group({
            firstName: new Control('', Validators.required),
            "lastName": new Control('', Validators.required),
            matching_password: fb.group({
                password: ['', Validators.required],
                confirm: ['', Validators.required]
            }, {validator : PasswordValidator.matchPassword}),
            "email": this.email,
            "phone": ['', Validators.required]
        });
        // console.log(this.matching_password.errors);
        // expose easy access to passworGroup to html
        this.passwordGroup = (<ControlGroup>this.registerForm.controls['matching_password']);
    }

    

    get formStatus() {
        return JSON.stringify(this.registerForm.value);
    }


    doRegister() {
        // this.payLoad = JSON.stringify(this.registerForm.errors);
        this.authService.doRegister(this.registerForm.value);
    }
    
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this._router.navigate(['Dashboard']);
        }
    }
}