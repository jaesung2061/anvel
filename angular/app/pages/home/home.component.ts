import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Api } from '../../services/api/api.service';

@Component({
    selector: 'avl-home',
    template: require('html!./home.component.html'),
    styles: [require('!raw!sass!./home.component.scss')],
    directives: []
})
export class HomeComponent {
    credentials: Object = {
        email: '',
        password: ''
    };

    constructor(private api: Api) {
    }

    login() {
        let data = JSON.stringify(this.credentials);

        this.api.post('auth', data)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe((response: any) => {
                console.log(response);
            }, (test: any) => {
                console.log(test);
            });
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
