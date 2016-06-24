@if(isset($options['attribute']))import { Directive } from '{{ '@angular/core' }}';

{{ '@Directive' }}({
    selector: '{{lcfirst($upperCamelCaseName) }}',
    template: require('./{{ "$name.$type.html" }}'),
    styles: [ require('./{{ "$name.$type.scss" }}') ]
})
export class {{ $upperCamelCaseName }}Directive {
    constructor() {
    }
}
@else import { Directive } from '{{ '@angular/core' }}';

{{ '@Directive' }}({selector: '[{{ lcfirst($upperCamelCaseName) }}]'})
export class {{ $upperCamelCaseName }}Directive {
    constructor() {
    }
}
@endif