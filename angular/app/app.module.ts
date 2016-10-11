import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { FooterComponent, NavbarComponent } from './components';
import {
    AboutComponent,
    DocsComponent,
    HomeComponent,
    ApiComponent,
    AuthenticationComponent,
    BroadcasterComponent,
    RoutingComponent,
    GeneratorsComponent,
} from './pages';
import {
    Api,
    Auth,
    Broadcaster,
    Config,
} from './services';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        routing,
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        DocsComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        ApiComponent,
        AuthenticationComponent,
        BroadcasterComponent,
        RoutingComponent,
        GeneratorsComponent,
    ],
    providers: [
        Api,
        Auth,
        Broadcaster,
        Config,
    ],
})
export class AppModule {
}
