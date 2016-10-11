import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, HomeComponent } from './pages';
import { docsRoutes } from './pages/docs';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    ...docsRoutes,
    { path: 'about', component: AboutComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
