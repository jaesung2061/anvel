import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HomeComponent } from './home';
import {
    FooterComponent,
    HttpClient,
    NavbarComponent,
    Route
} from './shared';

@Component({
    selector: 'avl-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ],
    directives: [ NavbarComponent, FooterComponent ],
    providers: [ ROUTER_PROVIDERS, HTTP_PROVIDERS, HttpClient ]
})
@RouteConfig([
    new Route('/', 'Home', HomeComponent, {useAsDefault: true})
])
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
