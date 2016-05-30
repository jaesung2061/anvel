import { Component } from '{{ '@angular/core' }}';

{{ '@Component' }}({
    selector: '{{$name}}',
    template: require('html!./{{ "$name.$type.ts" }}'),
    styles: [ require('!raw!sass!./{{ "$name.$type.scss" }}') ]
})
export class {{$upperCamelCaseName}}Component {
    constructor() {
    }
}
