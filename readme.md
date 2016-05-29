## Configured Lumen and Angular 2 starter kit

### Installation

    $ composer create-project jaesung2061/anvel
    $ cd anvel
    $ npm install -g gulp webpack
    $ npm install
    
If you have a web server set up already, open `.env` and set `BROWSERSYNC_PROXY_URL` to the
correct url. If not, run `php artisan serve` and run the following command in a new terminal.

    $ gulp
    
The website should automatically launch at http://localhost:3000 (proxied). Visit
http://anvel.io for some brief documentation.

### Why not Laravel?

Since we will be using a client-side framework, the server will act only as a REST-API.
With such a setup, it is not necessary to have a full-fledged framework like Laravel.
Lumen is a lighter framework that still offers the best that Laravel has to offer such
as the IoC container, Facades, and Eloquent.