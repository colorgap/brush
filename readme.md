
[![License](https://poser.pugx.org/colorgap/brush/license.svg)](https://packagist.org/packages/colorgap/brush)
[![Build](https://api.travis-ci.org/colorgap/brush.svg)](https://travis-ci.org/colorgap/brush)
[![Dependency Status](https://david-dm.org/colorgap/brush.svg)](https://david-dm.org/colorgap/brush)
[![devDependency Status](https://david-dm.org/colorgap/brush/dev-status.svg)](https://david-dm.org/colorgap/brush#info=devDependencies)

<p align="center">
<img src="https://raw.githubusercontent.com/colorgap/brush/master/public/images/brush1.png" width="200" alt="Brush"/>
</p>
## Brush - beta (version 0.3.0)  ([Brush 2.0](https://github.com/colorgap/brush/tree/v2) is under development using Angular 2)
#### App Scaffolding for laravel lumen and angular based projects:
Brush use Laravel's micro framework lumen as a base and build an amazing UI on top of it which provide you quick and easy way to jump start your app.
Best part of brush is, it comes with 2 different UI: one for landing page and other for dashboard from same CSS and JS vendor files but different config files. This gives you flexibility to have different look on Customer facing vs admin dashboard.

------------------
### Technology stack
- [Lumen] (http://lumen.laravel.com)
- [AngularJS] (https://angularjs.org/)
- [Twitter Bootstrap] (http://getbootstrap.com/)
- [Gulp] (http://gulpjs.com/)
- [Node.js] (https://nodejs.org/en/)

------------------
### Jump Start your app today...
Prerequisites:
- php 5.6 or above
- node.js 4 or above
- composer

Steps to get started:
- git clone git@github.com:colorgap/brush.git
- composer install && npm install
- gulp

if above command doesn't work the try adding sudo
- sudo composer install && npm install
- gulp

Now change the name of your .env.example file to .env

------------------
#### Database setup steps
For database tables and seeding we have created 2 tables Users and Roles, to create table in your database, execute below commands

Set your db details in .env file and execute from project root folder
- php artisan migrate
- php artisan db:seed

------------------
To run locally for making changes and develop your app use below command from root folder
- php -S localhost:8000 -t public

After these steps go to : http://localhost:8000 or point MAMP, XAMP or WAMP servers to brush/public directory

You should see Brush landing page

or

Just run 
- npm start
Above command will start server and also watch for your changes.

------------------
To bundle and ship brush just execute below gulp command from root folder:
- gulp build --env prod
or
- npm run build

This will create a brush-app.zip in target folder. Just place the zip in your server and explode.

### Quick links
- [Demo](http://brush.colorgap.com/)

### User Details:
- admin login: userId: admin@colorgap.com / password: admin
- user login: userId: user@colorgap.com / password: user

---------------
- Update themes in brush-config.json file
    option: "themeName"
- materializecss (90% ready)
- bootstrap (100% ready)
- material (Under development)
- Or design you own theme and use option themename: your_theme

------------------
#### Note: Use "npm start" while in development node
####     : This project is in alpha right now, feel free to contribute and if you want any feature that you feel is useful for this application send us at brush@colorgap.com we will try to add it to the brush.
