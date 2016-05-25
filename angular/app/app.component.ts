import { Component, OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouteConfig, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { FooterComponent, Api, NavbarComponent, Route, Config } from './shared';

@Component({
    selector: 'avl-app',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ],
    directives: [ NavbarComponent, FooterComponent ],
    providers: [ ROUTER_PROVIDERS, HTTP_PROVIDERS, Api, Config ]
})
@RouteConfig([
    new Route('/', 'Home', HomeComponent, {useAsDefault: true}),
    new Route('/about', 'About', AboutComponent)
])
export class AppComponent implements OnInit {
    constructor(private api: Api,
                private config: Config) {
    }

    ngOnInit() {
        this.api.get('users', {body: JSON.stringify({test: 'test'})})
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );

        this.api.post('users', {name: 'jeff', email: 'jeff@yeon.com'})
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );

        this.api.get('users/1', {body: JSON.stringify({name: 'jeff', email: 'jeff@yeon.com'})})
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );

        this.api.put('users/1', {name: 'yo', test: 'test'})
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );

        this.api.put('users/1', {name: 'yo', test: 'test'})
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }
}
