## API Communication

To send requests to the server, inject the Api service to your component.
The Api service is a wrapper around the Angular 2 Http Client which handles
some of the lower level things that you shouldn't have to deal with. It
also integrates into Lumen's API.

> **Note**: The Api service expects responses in the form of `{data: content}` instead of just `content`.

---

### GET

    let options = {search: {name: 'john'}};

    this.api.get('users', options).subscribe(
        (response) => {
            this.users = response.users;
        },
        (error) => console.error(error)
    );

> **Note**: You must call `.subscribe()` for the request to be sent.

---

### POST/PATCH/PUT

All three method calls take the same arguments.

    let data = {email: 'john@example.com', password: 'password'};

    this.api.post('users', data).subscribe(
        (response) => console.log(response),
        (error) => console.error(error)
    );

---

### DELETE

    this.api.delete('users/1').subscribe(
        (response) => console.log(response),
        (error) => console.error(error)
    )
