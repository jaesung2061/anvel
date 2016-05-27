export class Route {
    path: string;
    component: any;
    options: any;

    constructor(path: string, component: any, options: any = {}) {
        this.path = path;
        this.component = component;

        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                this[ key ] = options[ key ];
            }
        }
    }
}
