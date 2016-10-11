import { Component } from '@angular/core';

@Component({
    template: `<div [innerHTML]="docs"></div>`,
})
export class RoutingComponent {
    public docs = require('./routing.component.md');

    constructor() {
    }
}
