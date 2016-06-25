import { Directive } from '{{ '@angular/core' }}';

{{ '@Directive' }}({selector: '[{{ lcfirst($upperCamelCaseName) }}]'})
export class {{ $upperCamelCaseName }}Directive {
    constructor() {
    }
}
