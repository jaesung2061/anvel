import { Component } from '@angular/core';

@Component({
    template: `<div [innerHTML]="docs"></div>`,
})
export class AuthenticationComponent {
    public docs = require('./authentication.component.md');
    constructor() {
    }
}
