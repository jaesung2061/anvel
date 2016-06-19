@if($routes)import { ROUTER_DIRECTIVES } from '{{ '@angular/router' }}';{{ "\n\n" }}@endif
import { Component } from '{{ '@angular/core' }}';

{{ '@Component' }}({
    selector: '{{$name}}',
    template: require('./{{ "$name.$type.html" }}'),
    styles: [ require('./{{ "$name.$type.scss" }}') ],
    @if($routes)directives: [ ROUTER_DIRECTIVES ]@endif
})
export class {{$upperCamelCaseName}}Component {
    constructor() {
    }
}
