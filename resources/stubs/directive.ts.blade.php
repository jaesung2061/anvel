@if(!$options['attribute'])import { Directive } from '{{ '@angular/core' }}';

{{ '@Directive' }}({
    selector: '{{lcfirst($upperCamelCaseName) }}',
    template: require('html!./{{ "$name.$type.ts" }}'),
    styles: [ require('!raw!sass!./{{ "$name.$type.scss" }}') ]
})
export class {{ $upperCamelCaseName }}Directive {
    constructor() {
    }
}
@elseif($options['attribute'])import { Directive } from '{{ '@angular/core' }}';

{{ '@Directive' }}({selector: '[{{ lcfirst($upperCamelCaseName) }}]'})
export class {{ $upperCamelCaseName }}Directive {
    constructor() {
    }
}
@endif