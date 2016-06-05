import { Component } from '@angular/core';

import { Auth } from '../../services/auth/auth.service';

@Component({
    selector: 'avl-home',
    template: require('html!./home.component.html'),
    styles: [require('!raw!sass!./home.component.scss')],
    directives: []
})
export class HomeComponent {
    installationDocs = require('!html!markdown!./readme.md');

    constructor(private auth: Auth) {
    }
}
