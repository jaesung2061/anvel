import { Component, OnInit } from '@angular/core';

import { Auth, Broadcaster } from './services';
import { EVENTS } from './events';

@Component({
    selector: 'avl-app',
    template: require('./app.component.html'),
    styles: [ require('./app.component.scss') ],
})
export class AppComponent implements OnInit {
    currentUser;

    constructor(private auth: Auth,
                private broadcaster: Broadcaster) {
    }

    ngOnInit() {
        // On login success event, set currentUser at
        // highest level since we will likely be using
        // the user object all throughout the application.
        this.broadcaster.subscribe(EVENTS.AUTH.LOGIN_SUCCESS, function (data) {
            this.currentUser = data.user;
        });

        let token = localStorage.getItem('token');

        // If token is present on localStorage,
        // send request to server to verify and
        // get user object.
        if (token) {
            this.auth.verify(token).subscribe(
                (response) => this.currentUser = response,
                () => localStorage.removeItem('token')
            );
        }
    }
}
