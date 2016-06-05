## Authentication

Anvel comes pre-packaged with integrated authentication.
By default, the email and password is used as credentials.

---

### Logging In

To use the pre-built login form, simple use the pre-built
login component by adding the following markup where you
want your login form. This component can be used anywhere
in the application.

    <avl-login></avl-login>

Thats it! The logic for sending the login request is already
handled within the component and with the Lumen API. If your
database is set up already with a user stored, simply put in
the correct credentials and submit.

### Styling The Form

If you would like to style the login form, feel free to edit the
`./angular/app/components/login.component.scss` file.

If you need to style the component based on where it's located,
you can use the `/deep/` or `>>>` selector in the parent
component to access the login component and style it from there.
It will not effect other login components if they are not a child
or grand-child.

`parent.component.scss`

    /deep/ avl-login form {
        border: 1px solid #ccc;
    }
