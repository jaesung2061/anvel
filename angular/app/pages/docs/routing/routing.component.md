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

This will generate the component files in `./angular/app/pages/contact`.

> **Optional (but recommended)**: Open `./angular/app/pages/index.ts` and add the following line.
>
>     export * from './contact';
>
> This will allow you to access the contact component in the following manner.
>
>     import { AboutComponent, ContactComponent, ... } from './pages';

---

#### Registering the Route

Now let's open `app.component.ts` and register the route.

    import { ContactComponent } from './pages/contact';

    @Component(...)
    @Routes([
        ...
        { path: '/contact', component: ContactComponent }
    ])

#### Navigating to the Route.

Add this link anywhere accessible.

    <a [routerLink]="['/contact']">Contact</a>

Refresh the page and click on the link.

### Subroutes

The previous example can be done with any component. Just remember to add
`<router-outlet></router-outlet>` to the component you wish to use as a
router.