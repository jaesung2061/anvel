## Generators

---

### Generating Files

Anvel ships with file generators to save you time.

    $ php artisan ng:component example

This will generate the relevant files in `./angular/app/components/example/` and update
the parent index.

---

### All Commands

    $ php artisan ng:component  kebab-case-name
    $ php artisan ng:page       kebab-case-name [--routes]
    $ php artisan ng:subpage    kebab-case-name parent-name
    $ php artisan ng:directive  kebab-case-name
    $ php artisan ng:pipe       kebab-case-name
    $ php artisan ng:service    kebab-case-name

Note that the generators only work with kebab-case names. You also do not need
to append the "type" to the end of the names. For example when creating a service
`ExampleService` you only need to pass `example` as an argument.
