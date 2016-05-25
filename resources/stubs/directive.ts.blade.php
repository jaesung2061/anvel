@if(!$options['attribute'])import { Directive } from '{{ '@angular/core' }}';
{{--No white-space for layout issues--}}
{{ '@Directive' }}({
    selector: 'avl-{{ $name }}',
    templateUrl: '{{ $templatePath }}',
    styleUrls: [ '{{ $cssPath }}' ]
})
export class {{ $upperCamelCaseName }}Directive {
    constructor() {
    }
}
@elseif($options['attribute'])import { Directive } from '{{ '@angular/core' }}';

{{ '@Directive' }}({
    selector: '[avl-{{ $name }}]',
    templateUrl: '{{ $templatePath }}',
    styleUrls: [ '{{ $cssPath }}' ]
})
export class {{ $upperCamelCaseName }}Directive {
    constructor() {
    }
}
@endif