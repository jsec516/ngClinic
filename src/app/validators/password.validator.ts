import { Control, ControlGroup } from "angular2/common";


export class PasswordValidator{
    
    static matchPassword(group): any {
        let password = (<Control>group.controls['password']);
        let confirm = (<Control>group.controls['confirm']);
        // console.log("pre call");
        // Don't kick in until user touches both fields   
        if (password.pristine || confirm.pristine) {
            return null;
        }

        // Mark group as touched so we can add invalid class easily
        group.markAsTouched();
        console.log(password.value, ' and ', confirm.value);
        if (password.value === confirm.value) {
            return null;
        }
        // console.log("calling");
        return {
            isValid: true
        };
    }
    
}