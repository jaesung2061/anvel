# Configured Lumen and Angular 2 starter kit

Get started quickly with the future of front-end development and a blazing fast micro-framework. Packaged nicely for kickstarting development.

# The Stack

- [Angular 2](https://angular.io)
    - [Ng2 Bootstrap](https://github.com/ng-bootstrap/ng-bootstrap/)
    - [Webpack](https://webpack.github.io/)
- [Lumen 5.3](https://lumen.laravel.com)
    - [Dingo API](https://github.com/dingo/api)
    - [JWT Auth](https://github.com/tymondesigns/jwt-auth)

# Installation

    $ composer create-project jaesung2061/anvel
    $ cd anvel
    $ npm install -g webpack
    $ npm install
    $ webpack
    $ php artisan serve

Go to [http://localhost:8000](http://localhost:8000).

Visit http://anvel.io for some brief documentation.

# Why not Laravel?

Since we will be using a client-side framework, the server will act only as a REST-API.
With such a setup, it is not necessary to have a full-fledged framework like Laravel.
Lumen is a lighter framework that still offers the best that Laravel has to offer such
as the IoC container, Facades, and Eloquent.
