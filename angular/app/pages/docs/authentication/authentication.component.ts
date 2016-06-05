import { Component } from '@angular/core';

@Component({
    selector: 'authentication',
    template: require('!html!markdown!./authentication.component.md')
})
export class AuthenticationComponent {
    constructor() {
    }
}
