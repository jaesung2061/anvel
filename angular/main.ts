import { provide, PLATFORM_DIRECTIVES } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { bootstrap } from '@angular/platform-browser-dynamic';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AppComponent } from './app/app.component';

bootstrap(AppComponent, [
    provide(PLATFORM_DIRECTIVES, {useValue: ROUTER_DIRECTIVES, multi: true})
]);
