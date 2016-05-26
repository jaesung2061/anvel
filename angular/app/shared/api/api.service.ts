import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Config } from '../config/config.service';

@Injectable()
export class Api {
    baseUrl: string;
    apiAcceptHeader: any;
    defaultHeaders: any;

    /**
     * This class will be used as a wrapper for Angular Http.
     * Only to be used for internal api (Lumen Dingo api).
     *
     * @param http
     * @param config
     */
    constructor(private http: Http, private config: Config) {
        let accept = 'application/';

        accept += this.config.getEnv('API_STANDARDS_TREE') + '.';
        accept += this.config.getEnv('API_SUBTYPE') + '.';
        accept += this.config.getEnv('API_VERSION') + '+json';

        this.apiAcceptHeader = {'Accept': accept};

        this.baseUrl = this.config.get('api.baseUrl');
    }

    /**
     * Set base uri for api requests.
     *
     * @param uri
     */
    setBaseUri(uri: string) {
        this.baseUrl = uri;
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

        Object.assign(this.defaultHeaders, header);
    }

    /**
     * Remove custom default header.
     *
     * @param key
     */
    deleteDefaultHeader(key: string) {
        delete this.defaultHeaders[ key ];
    }

    /**
     * Wrapper for angular http.request for our api.
     *
     * @param url
     * @param options
     * @returns {Observable<R>}
     */
    request(url: any, options?: any) {
        if (url.constructor === String) {
            options = this.prepareApiRequest(options);
        } else {
            url.url = this.baseUrl + '/' + url;
        }

        return this.http
            .request(this.getBuiltUrl(url), options)
            .map(this.extractData)
            .catch(this.catchError);
    }

    /**
     * Wrapper for angular http.get for our api.
     *
     * @param url
     * @param options
     * @returns {Observable<R>}
     */
    get(url: string, options?: any) {
        let params = this.serialize(options && options.body || {});

        options = new RequestOptions({
            url: '/api/users',
            method: 'GET',
            headers: Object.assign(this.apiAcceptHeader, this.defaultHeaders),
            search: params
        });

        return this.http
            .get('/api/users', options)
            .map(this.extractData)
            .catch(this.catchError);
    }

    /**
     * Wrapper for angular http.post for our api.
     *
     * @param url
     * @param data
     * @param options
     * @returns {Observable<R>}
     */
    post(url: string, data: any, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        if (data.constructor === Object) {
            data = JSON.stringify(data);
        }

        return this.http
            .post(this.getBuiltUrl(url), data, options)
            .map(this.extractData)
            .catch(this.catchError);
    }

    /**
     * Wrapper for angular http.put for our api.
     *
     * @param url
     * @param data
     * @param options
     * @returns {Observable<R>}
     */
    put(url: string, data: any, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        if (data.constructor === Object) {
            data = JSON.stringify(data);
        }

        return this.http
            .put(this.getBuiltUrl(url), data, options)
            .map(this.extractData)
            .catch(this.catchError);
    }

    /**
     * Wrapper for angular http.delete for our api.
     *
     * @param url
     * @param options
     * @returns {Observable<R>}
     */
    delete(url: string, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        return this.http
            .delete(this.getBuiltUrl(url), options)
            .map(this.extractData)
            .catch(this.catchError);
    }

    /**
     * Wrapper for angular http.delete for our api.
     *
     * @param url
     * @param data
     * @param options
     * @returns {Observable<R>}
     */
    patch(url: string, data: string, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        if (data.constructor === Object) {
            data = JSON.stringify(data);
        }

        return this.http
            .patch(this.getBuiltUrl(url), data, options)
            .map(this.extractData)
            .catch(this.catchError);
    }

    /**
     * Wrapper for angular http.delete for our api.
     *
     * @param url
     * @param options
     * @returns {Observable<R>}
     */
    head(url: string, options?: any) {
        options = this.prepareApiRequest(options);
        options.headers.append('Content-Type', 'application/json');

        return this.http
            .head(this.getBuiltUrl(url), options)
            .map(this.extractData)
            .catch(this.catchError);
    }

    /**
     * Extract data.
     *
     * @param response
     * @returns {any|{}}
     */
    private extractData(response: any): any {
        let body = response.json();

        return body.data || {};
    }

    /**
     * Catch error.
     *
     * @param error
     * @returns {ErrorObservable}
     */
    private catchError(error: any): any {
        let errMsg = (error.message)
            ? error.message
            : `Error - ${error.status}`;

        return Observable.throw(errMsg);
    }

    /**
     * Prefix with api base.
     *
     * @param url
     * @returns {string}
     */
    private getBuiltUrl(url): string {
        return (this.baseUrl + '/' + url).replace(/\/\//g, '/');
    }

    /**
     * Prepare request object for use with Lumen Dingo Api.
     *
     * @param options
     * @returns {RequestOptions}
     */
    private prepareApiRequest(options: any): RequestOptions {
        let headers = Object.assign(
            this.apiAcceptHeader,
            this.defaultHeaders,
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
