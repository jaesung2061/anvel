import { Routes } from '@angular/router';

import { {{ $upperCamelCaseName }}Component } from './{{ $name }}.component';

export const {{ $upperCamelCaseName }}Routes: Routes = [
    {
        path: '{{ $name }}',
        component: {{ $upperCamelCaseName }}Component,
        // index: true,
        children: [
            {path: '', component: ChildComponent }, // This is the default child route for {{ $upperCamelCaseName }}Component
            {path: 'child', component: ChildComponent },
            //
        ]
    },
];
