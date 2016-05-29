import { Injectable } from '@angular/core';

@Injectable()
export class Broadcaster {
    private subscriptions: any = {};

    /**
     * Subscribe a callback to an event.
     *
     * @param event
     * @param callback
     * @returns {function(): undefined}
     */
    subscribe(event: string, callback: Function) {
        return this.subscribeLogic(event, callback);
    }

    /**
     * Alias for subscribe.
     *
     * @param event
     * @param callback
     * @returns {function(): undefined}
     */
    on(event: string, callback: Function) {
        return this.subscribeLogic(event, callback);
    }

    /**
     * Broadcast an event and execute all handlers for it.
     *
     * @param event
     * @param data
     */
    broadcast(event: string, data: any = undefined) {
        let handlers = this.subscriptions[ event ];

        if (handlers) {
            let length = handlers.length;

            for (let i = 0; i < length; i++) {
                handlers[ i ](data);
            }
        }
    }

    /**
     * Subscribe a callback to an event.
     *
     * @param event
     * @param callback
     * @returns {function(): undefined}
     */
    private subscribeLogic(event: string, callback: Function) {
        let handlers = this.subscriptions[ event ];
        let hasRegisteredCallbacks = handlers && handlers.length > 0;

        if (handlers && hasRegisteredCallbacks) {
            handlers.push(callback);
        } else {
            handlers = this.subscriptions[ event ] = [ callback ];
        }

        // Return function to remove subscription
        return () => {
            let index = handlers.findIndex((func) => func === callback);

            handlers.splice(index, 1);

            if (handlers.length === 0) {
                delete this.subscriptions[ event ];
            }
        };
    }
}
