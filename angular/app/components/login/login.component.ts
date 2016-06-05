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
        this.auth.login(credentials).subscribe(
            () => {
                console.log('Login success.');
            },
            (error) => {
                console.log(error);
            }
        );
    }
}
