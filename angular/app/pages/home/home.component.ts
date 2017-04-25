import { Component } from '@angular/core';

// import { Auth } from '../../services/auth/auth.service';

@Component({
    selector: 'avl-home',
    template: require('./home.component.html'),
    styles: [ require('./home.component.scss') ],
})
export class HomeComponent {
    installationDocs = require('./readme.md');

    constructor() {
    }
}
