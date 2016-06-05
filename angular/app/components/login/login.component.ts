import { Component } from '@angular/core';

import { Auth } from '../../services';

@Component({
    selector: 'avl-login',
    template: require('html!./login.component.html'),
    styles: [ require('!raw!sass!./login.component.scss') ]
})
export class LoginComponent {
    credentials = {};
    
    constructor(private auth: Auth) {
    }
    
    login(credentials) {
        //noinspection TypeScriptValidateJSTypes
        this.auth.login(credentials).subscribe(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        )
    }
}
