import { Component } from '@angular/core';

@Component({
    template: `<div [innerHTML]="docs"></div>`,
})
export class ApiComponent {
    public docs = require('./api.component.md');

    constructor() {
    }
}
