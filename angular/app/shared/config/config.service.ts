import { Injectable } from '@angular/core';

import { CONFIG } from '../../../config';
import { ENV } from '../../../env';

@Injectable()
export class Config {
    private config: Object = CONFIG;
    private env: Object = ENV;

    /**
     * Get environment variable.
     *
     * @param key
     * @returns {any}
     */
    getEnv(key: any) {
        return this.env[ key ];
    }

    /**
     * Recursively get config property.
     *
     * @param path
     * @returns {*}
     */
    get(path): any {
        let placeholder = this.config;
        let keys = path.split('.');

        // Iterate through the split path elements
        for (let i = 0; i < keys.length; i++) {
            // Check if placeholder has key
            if (placeholder.hasOwnProperty(keys[i])) {
                // It has the key, go deeper 1 level
                placeholder = placeholder[keys[i]];
            } else {
                // It doesn't have the key, return null
                return undefined;
            }
        }

        return placeholder;
    }
}
