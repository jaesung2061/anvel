import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'avl-navbar',
    template: require('./navbar.component.html'),
    styles: [require('./navbar.component.scss')],
    directives: [ ROUTER_DIRECTIVES ]
})
export class NavbarComponent {
    constructor() {
    }
}
