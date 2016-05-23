import { Component } from '{{ '@' }}angular/core';

{{ '@' }}Component({
    selector: 'avl-{{$name}}',
    templateUrl: '{{$templatePath}}',
    styleUrls: ['{{$cssPath}}']
})
export class {{$upperCamelCaseName}}Component {
    constructor() {
        //
    }
}
