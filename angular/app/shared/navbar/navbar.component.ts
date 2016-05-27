import { Component } from '@angular/core';

@Component({
    selector: 'avl-navbar',
    template: require('html!./navbar.component.html'),
    styles: [require('!raw!sass!./navbar.component.scss')]
})
export class NavbarComponent {
    constructor() {
    }
}
