export class Route {
    path: string;
    name: string;
    component: any;

    constructor(path: string, name: string, component: any, options: Object = {}) {
        this.path = path;
        this.name = name;
        this.component = component;

        for (let key in options) {
            if (options.hasOwnProperty(key)) {
                this[ key ] = options[ key ];
            }
        }
    }
}
