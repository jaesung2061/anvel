import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class HttpClient {
    constructor(public http: Http) {
    }

    /**
     * Create auth headers
     *
     * @param headers
     */
    createAuthorizationHeader(headers: Headers) {
        headers.append('Accept', 'application/vnd.myapp.v1+json');
    }

    get(url) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);

        return this.http.post(url, data, {
            headers: headers
        });
    }
}
