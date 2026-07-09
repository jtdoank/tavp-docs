# cPanel

Deploy TAVP on shared hosting with cPanel.

## Upload

1. Login cPanel → File Manager
2. Upload project to `public_html/`
3. Extract ZIP

## Setup

```bash
# Via SSH (if available)
cd public_html
composer install --no-dev
cp .env.example .env
tavp key:generate
tavp migrate
```

## Nginx Config

```nginx
# .user.ini
phalcon_charset = "utf-8"
phalcon_di_config = "config/di.php"
```

## Apache Config

```apache
# .htaccess
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php?_url=/$1 [QSA,L]
```

## Tips

- Use PHP 8.1+ from MultiPHP Manager
- Enable Phalcon extension from PHP Selector
- Setup cron job for queue workers

## Links

- [AI Features](/en/ai/overview)
