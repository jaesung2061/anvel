import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Api {
    apiAcceptHeader = {'Accept': 'application/vnd.myapp.v1+json'};
    defaultHeahders = {};
    baseUri = '/api/';

    /**
     * This class will be used as a wrapper for Angular Http.
     * Only to be used for internal api (Lumen Dingo api).
     *
     * @param http
     */
    constructor(private http: Http) {
    }

    /**
     * Set base uri for api requests.
     *
     * @param uri
     */
    setBaseUri(uri: string) {
        this.baseUri = uri;
    }

    /**
     * Add new default header.
     *
     * @param key
     * @param value
     */
    appendDefaultHeader(key: string, value: string) {
        let header = {};
        header[ key ] = value;

        Object.assign(this.defaultHeahders, header);
    }

    /**
     * Remove custom default header.
     *
     * @param key
     */
    deleteDefaultHeader(key: string) {
        delete this.defaultHeahders[ key ];
    }

    /**
     * Wrapper for angular http.request for our api.
     *
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    request(url: any, options?: any) {
        if (url.constructor === String) {
            options = this.prepareApiRequest(options);
        } else {
            url.url = this.baseUri + '/' + url;
        }

        return this.http.request(this.getBuiltUrl(url), options);
    }

    /**
     * Wrapper for angular http.get for our api.
     *
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    get(url: string, options?: any) {
        let params = this.serialize({
            test: 'test',
            array: [ 'one', 'two', {'test': {test: [ 'test' ]}} ]
        });

        options = new RequestOptions({
            url: '/api/users',
            method: 'GET',
            headers: Object.assign(this.apiAcceptHeader, this.defaultHeahders),
            search: params
        });

        return this.http.request('/api/users', options);
    }

    /**
     * Wrapper for angular http.post for our api.
     *
     * @param url
     * @param data
     * @param options
     * @returns {Observable<Response>}
     */
    post(url: string, data: any, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        if (data.constructor === Object) {
            data = JSON.stringify(data);
        }

        return this.http
            .post(this.getBuiltUrl(url), data, options)
            .map(this.extractData);
    }

    /**
     * Wrapper for angular http.put for our api.
     *
     * @param url
     * @param data
     * @param options
     * @returns {Observable<Response>}
     */
    put(url: string, data: any, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        if (data.constructor === Object) {
            data = JSON.stringify(data);
        }

        return this.http
            .put(this.getBuiltUrl(url), data, options)
            .map(this.extractData);
    }

    /**
     * Wrapper for angular http.delete for our api.
     *
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    delete(url: string, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        return this.http
            .delete(this.getBuiltUrl(url), options)
            .map(this.extractData);
    }

    /**
     * Wrapper for angular http.delete for our api.
     *
     * @param url
     * @param data
     * @param options
     * @returns {Observable<Response>}
     */
    patch(url: string, data: string, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        if (data.constructor === Object) {
            data = JSON.stringify(data);
        }

        return this.http
            .patch(this.getBuiltUrl(url), data, options)
            .map(this.extractData);
    }

    /**
     * Wrapper for angular http.delete for our api.
     *
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    head(url: string, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        return this.http
            .head(this.getBuiltUrl(url), options)
            .map(this.extractData);
    }

    /**
     * Extract data
     *
     * @param response
     * @returns {any|{}}
     */
    private extractData(response: any) {
        let body = response.json();

        return body.data || {};
    }

    /**
     * Catch response errors.
     *
     * @param error
     * @returns {ErrorObservable}
     */
    private catchError(error) {
        let errMsg = (error.message)
            ? error.message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.error(errMsg);

        return Observable.throw(errMsg);
    }

    /**
     * Prefix with api base.
     *
     * @param url
     * @returns {string}
     */
    private getBuiltUrl(url) {
        return (this.baseUri + '/' + url).replace(/\/\//g, '/');
    }

    /**
     * Prepare request object for use with Lumen Dingo Api.
     *
     * @param options
     * @returns {RequestOptionsArgs}
     */
    private prepareApiRequest(options: any) {
        let headers = Object.assign(
            this.apiAcceptHeader,
            this.defaultHeahders,
            (options && options.headers) || {}
        );

        if (!options || options.constructor !== RequestOptions) {
            options = new RequestOptions(options);
        }

        options.headers = options.headers || new Headers(headers);

        return options;
    }

    /**
     * Resursively serialize an object/array.
     *
     * @param obj
     * @param prefix
     * @returns {URLSearchParams}
     */
    private serialize(obj: Object, prefix?: string): URLSearchParams {
        let str = [];

        for (let p in obj) {
            if (obj.hasOwnProperty(p)) {
                let _prefix = prefix ? prefix + '[' + p + ']' : p, value = obj[ p ];

                str.push(typeof value === 'object'
                    ? this.serialize(value, _prefix)
                    : encodeURIComponent(_prefix) + '=' + encodeURIComponent(value)
                );
            }
        }

        return new URLSearchParams(str.join('&'));
    }
}
