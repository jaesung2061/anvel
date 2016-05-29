import './vendor';

import { enableProdMode, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';

if (APP_ENVIRONMENT.APP_ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true})
]);
