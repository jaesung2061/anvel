# Configured Laravel and Angular 2 starter kit

Integrated with [angular-cli](https://github.com/angular/angular-cli). Uses [Angular Material](https://github.com/angular/material2)

## Installation

```$xslt
npm i -g @angular/cli
composer create-project jaesung2061/anvel
cd anvel
npm install
ng build
php artisan serve
```

Go to http://localhost:8000

**Note**: Angular CLI deletes the destination directory. Because of this, you should not add anything to the `public`
directory. Instead, add asset files to `./angular/assets`. Or add the file `./angular`, then add the file name to
`.angular-cli.json` `assets` array.
