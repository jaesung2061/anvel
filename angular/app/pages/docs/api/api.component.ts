import { Component } from '@angular/core';

@Component({
    selector: 'api',
    template: require('!html!markdown!./api.component.md')
})
export class ApiComponent {
    constructor() {
    }
}
