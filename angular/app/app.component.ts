import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { AboutComponent, DocsComponent, HomeComponent } from './pages';
import { Api, Auth, Broadcaster, Config } from './services';
import { FooterComponent, LoginComponent, NavbarComponent } from './components';
import { EVENTS } from './events';

@Component({
    selector: 'avl-app',
    template: require('html!./app.component.html'),
    styles: [ require('!raw!sass!./app.component.scss') ],
    directives: [ NavbarComponent, LoginComponent, FooterComponent, ROUTER_DIRECTIVES ],
    providers: [ Api, Auth, Broadcaster, Config, HTTP_PROVIDERS ]
})
@Routes([
    {path: '/', component: HomeComponent},
    {path: '/docs', component: DocsComponent},
    {path: '/about', component: AboutComponent}
])
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
            this.auth.verify(token) .subscribe(
                (response) => this.currentUser = response,
                () => localStorage.removeItem('token')
            );
        }
    }
}
