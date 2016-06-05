import { Component } from '@angular/core';

import { Api } from '../../services'

@Component({
    selector: 'avl-login',
    template: require('html!./login.component.html'),
    styles: [ require('!raw!sass!./login.component.scss') ]
})
export class LoginComponent {
    credentials = {};
    
    constructor(private api: Api) {
    }
    
    login(credentials) {
        //noinspection TypeScriptValidateJSTypes
        this.api.post('auth', credentials).subscribe(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        )
    }
}
