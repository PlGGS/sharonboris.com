# https://sharonboris.com
## By: Blake Boris
My mom's website made with [PHP](https://www.php.net/) and [Docker](https://www.docker.com/)

### How to build
- Install [Docker](https://www.docker.com/)
- Install [Composer](https://getcomposer.org/)
- Install [Docker Compose](https://docs.docker.com/compose/)
- From the root of the repository, run the following:
- `composer install` to install PHP dependencies
- `docker build -t sharonboris .` to create the image
- `docker-compose build` to build
- `docker-compose up -d`
