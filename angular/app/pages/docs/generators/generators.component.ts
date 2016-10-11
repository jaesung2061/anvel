import { Component } from '@angular/core';

@Component({
    template: `<div [innerHTML]="docs"></div>`,
})
export class GeneratorsComponent {
    public docs = require('./generators.component.md');

    constructor() {
    }
}
