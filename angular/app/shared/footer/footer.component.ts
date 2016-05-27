import { Component } from '@angular/core';

@Component({
    selector: 'avl-footer',
    template: require('html!./footer.component.html'),
    styles: [require('!raw!sass!./footer.component.scss')]
})
export class FooterComponent {
    constructor() {
    }
}
