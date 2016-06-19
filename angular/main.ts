// Rx operators
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (APP_ENVIRONMENT.APP_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));
