## Prerequisite

Please install composer and PHP version 8.2 or newer version. Configure and install additional PHP extensions as needed.

## To Run This Project
Clone this repo, using cmd or any terminal and then navigate to the root folder and run

```
composer install
```

Then, rename or duplicate the file .env.example to .env and run the command below to generate the APP_KEY needed by laravel
```
php artisan key:generate
```

I am using sqlite for this tiny project (because its convenient). The fiddle.sql file has been slightly tweaked to support sqlite. Next, run the commands below to create the schemas and seed it.
```
php artisan migrate
php artisan db:seed
```



Finally, run the Laravel built-in server (This is only for development usage!)
```
php artisan serve 
```

If everything works it should log 'server running on http://127.0.0.1:8000' (default port). Use any browser and then visit the page.

### Extra Note
I have uploaded the frontend built assets as well. Nodejs and NPM would not be needed if everything runs.
