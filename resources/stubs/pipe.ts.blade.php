import { Pipe, PipeTransform } from '{{ '@angular' }}/core';

{{ '@Pipe' }}({name: '{{ lcfirst($upperCamelCaseName) }}'})
export class {{ $upperCamelCaseName }}Pipe implements PipeTransform {
    transform() {
        //
    }
}
