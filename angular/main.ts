import { enableProdMode, provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { bootstrap } from '@angular/platform-browser-dynamic';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AppComponent } from './app/app.component';
import { Config } from './app/shared/config';

if (new Config().getEnv('APP_ENV') === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    provide(PLATFORM_DIRECTIVES, {useValue: ROUTER_DIRECTIVES, multi: true})
]);
