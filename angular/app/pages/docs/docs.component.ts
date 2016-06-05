import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { ApiComponent } from './api';
import { AuthenticationComponent } from './authentication';
import { RoutingComponent } from './routing';

@Component({
    selector: 'docs',
    template: require('html!./docs.component.html'),
    styles: [ require('!raw!sass!./docs.component.scss') ]
})
@Routes([
    {path: '/api', component: ApiComponent},
    {path: '/authentication', component: AuthenticationComponent},
    {path: '/routing', component: RoutingComponent}
])
export class DocsComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit(): any {
        // Ugly way of checking if we are in a subroute of /docs
        // to prevent rerouting if we are already in a subroute.
        if (this.getRouteSections().length === 1) {
            this.router.navigate(['docs', 'api']);
        }
    }

    private getRouteSections() {
        let currentUri = this.router.serializeUrl(this.router.urlTree);

        return currentUri.split('/').filter((item) => {
            return item !== '';
        });
    }
}
