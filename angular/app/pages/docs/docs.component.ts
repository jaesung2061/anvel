import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'docs',
    template: require('./docs.component.html'),
    styles: [ require('./docs.component.scss') ],
    directives: [ ROUTER_DIRECTIVES ]
})
export class DocsComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit(): any {
    }
}
