import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

import { ApiComponent } from './api';
import { AuthenticationComponent } from './authentication';
import { BroadcasterComponent } from './broadcaster';
import { RoutingComponent } from './routing';
import { GeneratorsComponent } from './generators';

@Component({
    selector: 'docs',
    template: require('./docs.component.html'),
    styles: [ require('./docs.component.scss') ]
})
@Routes([
    {path: '/api', component: ApiComponent},
    {path: '/authentication', component: AuthenticationComponent},
    {path: '/broadcaster', component: BroadcasterComponent},
    {path: '/routing', component: RoutingComponent},
    {path: '/generators', component: GeneratorsComponent}
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
