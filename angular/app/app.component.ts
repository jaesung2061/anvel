import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { AboutComponent, DocsComponent, HomeComponent } from './pages';
import { Api, Auth, Broadcaster, Config } from './services';
import { FooterComponent, NavbarComponent } from './shared';

@Component({
    selector: 'avl-app',
    template: require('html!./app.component.html'),
    styles: [ require('!raw!sass!./app.component.scss') ],
    directives: [ NavbarComponent, FooterComponent, ROUTER_DIRECTIVES ],
    providers: [ Api, Auth, Broadcaster, Config, HTTP_PROVIDERS ]
})
@Routes([
    {path: '/', component: HomeComponent},
    {path: '/docs', component: DocsComponent},
    {path: '/about', component: AboutComponent}
])
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
