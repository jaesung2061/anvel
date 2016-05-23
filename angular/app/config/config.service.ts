import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ENV } from './env';

@Injectable()
export class Config {
    private config: Object;
    private env: Object = ENV;

    constructor(private http: Http) {
    }

    getEnv(key: any) {
        return this.env[ key ];
    }

    get(key: any) {
        return this.config[ key ];
    }
}
