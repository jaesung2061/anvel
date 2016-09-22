import { Component } from '@angular/core';

@Component({
    selector: '{{$name}}',
    template: require('./{{ "$name.$type.html" }}'),
    styles: [ require('./{{ "$name.$type.scss" }}') ],
})
export class {{$upperCamelCaseName}}Component {
    constructor() {
    }
}
