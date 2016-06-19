import { provideRouter, RouterConfig } from '{{ '@' }}angular/router';

import { {{ $upperCamelCaseName }}Component } from './{{ $name }}.component';

export const routes: RouterConfig = [
    {
        path: 'docs',
        component: {{ $upperCamelCaseName }}Component,
        // index: true,
        children: [
            {path: '', component: ChildComponent }, // This is the default child route for {{ $upperCamelCaseName }}Component
            {path: 'child', component: ChildComponent },
            //
        ]
    },
];

export const {{ $capsSnakeCaseName }}_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
