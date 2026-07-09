# Deployment Tutorial

Tutorial deploy TAVP ke production.

## 1. Prepare Server

```bash
# Install PHP 8.1+
sudo apt-get install php8.1 php8.1-fpm php8.1-mysql

# Install Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Install Nginx
sudo apt-get install nginx
```

## 2. Upload Project

```bash
# Via Git
git clone https://github.com/youruser/yourapp.git /var/www/yourapp

# Via Composer
composer create-project tavp/core yourapp
```

## 3. Configure Nginx

```nginx
server {
    listen 80;
    server_name yourapp.com;
    root /var/www/yourapp/public;
    
    location / {
        try_files $uri $uri/ /index.php?_url=$uri;
    }
    
    location ~ \.php$ {
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
}
```

## 4. Setup Environment

```bash
cd /var/www/yourapp
cp .env.example .env
php artisan key:generate
```

## 5. Run Migrations

```bash
tavp migrate
```

## Link

- [Authentication Tutorial](/tutorials/authentication)
