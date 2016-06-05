## Broadcaster

The Broadcaster service is an event system that can broadcast
and have subscribers. It is a light version of Angular 1's
event system. As of now there is no "scopes" in this system.
All events are global to the Angular application. Any component
can listen to any event.

---

### Injecting the Service

    import { Broadcaster } from 'relative/path/to/services/broadcaster'
    
    @Component(...)
    class MyComponent {
        constructor(private broadcaster: Broadcaster) {}
    }

---

### Broadcasting an Event

    this.broadcaster.broadcast('my-event', 'hello subscriber');

---

### Subscribing to an Event

    // Somewhere else...
    this.broadcaster.subscribe('my-event', function (data) {
        console.log(data); // 'hello subscriber'
    });

### Event Constants

See `/angular/app/events.ts`.

It is a good practice to use constants for events. By using
constants as events, you ensure that all events are in one
file. This makes it easy to spot duplicate events and prevent
collisions. If you need to change the name of an event, you
won't need to do a project search/replace. You only need to
change it at `events.ts`.