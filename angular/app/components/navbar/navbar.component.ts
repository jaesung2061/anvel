import { Component } from '@angular/core';

@Component({
    selector: 'avl-navbar',
    template: require('./navbar.component.html'),
    styles: [require('./navbar.component.scss')],
})
export class NavbarComponent {
    constructor() {
    }
}
