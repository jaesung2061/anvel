import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, HomeComponent } from './pages';
import { DocsRoutes } from './pages/docs';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    ...DocsRoutes,
    { path: 'about', component: AboutComponent },
];

export const routing: ModuleWithProviders = [
    RouterModule.forRoot(AppRoutes)
];
