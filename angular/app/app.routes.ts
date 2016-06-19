import { provideRouter, RouterConfig } from '@angular/router';

import { AboutComponent, HomeComponent } from './pages';
import { DocsRoutes } from './pages/docs/docs.routes';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    ...DocsRoutes,
    { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
