# Docker

Deploy TAVP dengan Docker.

## Dockerfile

```dockerfile
FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    libphalcon-dev \
    && docker-php-ext-install pdo_mysql

COPY . /var/www/html
WORKDIR /var/www/html

RUN composer install --no-dev --optimize-autoloader
```

## Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    volumes:
      - .:/var/www/html
    depends_on:
      - db
      - redis
  
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: tavp
  
  redis:
    image: redis:alpine
  
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - .:/var/www/html
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
```

## Commands

```bash
docker-compose up -d
docker-compose exec app tavp migrate
```

## Link

- [Kubernetes](/deployment/kubernetes)
