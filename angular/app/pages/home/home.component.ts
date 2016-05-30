import { Component } from '@angular/core';

import { Auth } from '../../services/auth/auth.service';

@Component({
    selector: 'avl-home',
    template: require('html!./home.component.html'),
    styles: [require('!raw!sass!./home.component.scss')],
    directives: []
})
export class HomeComponent {
    credentials: Object = {
        email: '',
        password: ''
    };

    constructor(private auth: Auth) {
    }

    login() {
        this.auth.login(this.credentials)
            .subscribe((response: any) => {
                console.log(response);
            }, (test: any) => {
                console.log(test);
            });
    }
}
