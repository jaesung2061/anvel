import { Component } from '@angular/core';

@Component({
    selector: 'avl-about',
    template: require('html!./about.component.html'),
    styles: [require('!raw!sass!./about.component.scss')]
})
export class AboutComponent {
    constructor() {
        console.log('testdfsdfsdfsdfs');
    }

    ngOnInit() {
    }
}
