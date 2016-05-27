import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { Api, Auth, Broadcaster, Config, FooterComponent, NavbarComponent, Route } from './shared';

@Component({
    selector: 'avl-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ],
    directives: [ NavbarComponent, FooterComponent, ROUTER_DIRECTIVES ],
    providers: [ Api, Auth, Broadcaster, Config, HTTP_PROVIDERS ]
})
@Routes([
    new Route('/', HomeComponent, {useAsDefault: true}),
    new Route('/about', AboutComponent)
])
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
