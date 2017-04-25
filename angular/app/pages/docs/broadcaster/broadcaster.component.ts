import { Component } from '@angular/core';

@Component({
    template: `<div [innerHTML]="docs"></div>`,
})
export class BroadcasterComponent {
    public docs = require('./broadcaster.component.md');

    constructor() {
    }
}
