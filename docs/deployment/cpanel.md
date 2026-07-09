# cPanel

Deploy TAVP di shared hosting dengan cPanel.

## Upload

1. Login cPanel → File Manager
2. Upload project ke `public_html/`
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

- Gunakan PHP 8.1+ dari MultiPHP Manager
- Aktifkan Phalcon extension dari PHP Selector
- Setup cron job untuk queue workers

## Link

- [AI Features](/ai/overview)
