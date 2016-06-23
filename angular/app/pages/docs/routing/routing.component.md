## Routing

---

### Creating a Route

Let's add a Contact page as an example. We will need to:

1. Create a component.
1. Register the route and the component.
1. Create the anchor element.
1. Navigate to the route.

#### Creating the Component

    $ php artisan ng:page contact

This will generate the component files in `./angular/app/pages/contact` and
export it from the parent `index.ts` file.

---

#### Registering the Route

Now let's open `./angular/app/app.routes.ts` and register the route.

    import { ContactComponent } from './pages/contact';

    export const routes: RouterConfig = [
        // ...
        { path: 'contact', component: ContactComponent }
    ];

#### Navigating to the Route.

Add this link anywhere accessible.

    <a [routerLink]="['/contact']">Contact</a>

> **Note**: Don't forget to inject `ROUTER_DIRECTIVES` into the component.

Refresh the page and click on the link.

---

### Child Routes

Any component can act as a router and have child routes. To do so,
run the following command:

    $ php artisan ng:page contact --routes

> **Note**: You must have a default child route for this component to work.

This will create the relevant files and in addition, create `contact.routes.ts`
with them. You need to register `ContactRoutes` in the `app.routes.ts` file.

    export const AppRoutes: RouterConfig = [
        { path: '', component: HomeComponent },
        ...DocsRoutes,
    ];

