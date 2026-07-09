<?php

declare(strict_types=1);

/**
 * TAVP Stack — Configuration Guide
 */

echo <<<'EOF'
# Configuration Guide

## Configuration Files

Configuration files are located in `config/` directory.

### app.php

```php
return [
    'name' => env('APP_NAME', 'TAVP Stack'),
    'env' => env('APP_ENV', 'production'),
    'debug' => env('APP_DEBUG', false),
    'url' => env('APP_URL', 'http://localhost'),
    'timezone' => env('APP_TIMEZONE', 'UTC'),
];
```

### database.php

```php
return [
    'default' => env('DB_CONNECTION', 'mysql'),

    'connections' => [
        'mysql' => [
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', 3306),
            'database' => env('DB_DATABASE', 'tavp'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
        ],
    ],
];
```

### mail.php

```php
return [
    'driver' => env('MAIL_MAILER', 'smtp'),
    'host' => env('MAIL_HOST', 'smtp.example.com'),
    'port' => env('MAIL_PORT', 587),
    'username' => env('MAIL_USERNAME'),
    'password' => env('MAIL_PASSWORD'),
    'encryption' => env('MAIL_ENCRYPTION', 'tls'),
];
```

### session.php

```php
return [
    'driver' => env('SESSION_DRIVER', 'file'),
    'lifetime' => env('SESSION_LIFETIME', 120),
    'path' => '/',
    'domain' => env('SESSION_DOMAIN'),
];
```

## Environment Variables

### Required

| Variable | Description | Default |
|----------|-------------|---------|
| APP_NAME | Application name | TAVP Stack |
| APP_ENV | Environment | production |
| APP_DEBUG | Debug mode | false |
| APP_KEY | Application key | — |
| DB_CONNECTION | Database driver | mysql |
| DB_HOST | Database host | 127.0.0.1 |
| DB_DATABASE | Database name | tavp |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| APP_URL | Application URL | http://localhost |
| APP_TIMEZONE | Timezone | UTC |
| MAIL_MAILER | Mail driver | smtp |
| SESSION_DRIVER | Session driver | file |
| CACHE_DRIVER | Cache driver | file |

## Generating Keys

```bash
tavp key:generate
```

## Environment Switching

```bash
tavp env:switch local
tavp env:switch production
```
EOF;
