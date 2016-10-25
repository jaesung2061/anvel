import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Auth } from '../../services';

@Component({
    selector: 'avl-login',
    template: require('./login.component.html'),
    styles: [ require('./login.component.scss') ],
})
export class LoginComponent {
    credentials = {};
    loginForm = new FormControl('loginForm');

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
