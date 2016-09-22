import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'docs',
    template: require('./docs.component.html'),
    styles: [ require('./docs.component.scss') ],
})
export class DocsComponent implements OnInit {
    constructor(private router: Router) {
    }

    ngOnInit(): any {
    }
}
