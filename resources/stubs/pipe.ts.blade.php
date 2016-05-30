import { Pipe, PipeTransform } from '{{ '@angular' }}/core';

{{ '@Pipe' }}({name: '{{ $name }}'})
export class {{ $upperCamelCaseName }}Pipe implements PipeTransform {
    transform() {
        //
    }
}
