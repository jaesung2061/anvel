import { RouterConfig } from '@angular/router';

import { ApiComponent } from './api';
import { AuthenticationComponent } from './authentication';
import { BroadcasterComponent } from './broadcaster';
import { RoutingComponent } from './routing';
import { GeneratorsComponent } from './generators';
import { DocsComponent } from './docs.component';

export const DocsRoutes: RouterConfig = [
    {
        path: 'docs',
        component: DocsComponent,
        // index: true,
        children: [
            {path: '', component: ApiComponent },
            {path: 'api', component: ApiComponent},
            {path: 'authentication', component: AuthenticationComponent},
            {path: 'broadcaster', component: BroadcasterComponent},
            {path: 'routing', component: RoutingComponent},
            {path: 'generators', component: GeneratorsComponent}
        ]
    },
];
