import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { FooterComponent, Api, NavbarComponent, Route } from './shared';

@Component({
    selector: 'avl-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ],
    directives: [ NavbarComponent, FooterComponent ],
    providers: [ ROUTER_PROVIDERS, HTTP_PROVIDERS, Api ]
})
@RouteConfig([
    new Route('/', 'Home', HomeComponent, {useAsDefault: true}),
    new Route('/about', 'About', AboutComponent)
])
export class AppComponent implements OnInit {
    constructor(private api: Api) {
    }

    ngOnInit() {
    }
}
