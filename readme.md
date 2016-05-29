## Configured Lumen and Angular 2 starter kit

### Installation

    $ composer create-project jaesung2061/anvel
    $ cd anvel
    $ npm install
    
If you have a web server set up already, open `.env` and set `BROWSERSYNC_PROXY_URL` to the
correct url. If not, run `php artisan serve` and run the following command in a new terminal.

    $ gulp
    
The website should automatically launch at http://localhost:3000 (proxied). Visit
http://anvel.io for some brief documentation.