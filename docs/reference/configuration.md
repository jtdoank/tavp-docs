# Configuration

Konfigurasi TAVP.

## Environment Variables

```env
APP_NAME=TAVP
APP_ENV=local
APP_KEY=base64:...
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tavp
DB_USERNAME=root
DB_PASSWORD=secret

CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
SESSION_DRIVER=redis
```

## Config Files

| File | Description |
|------|-------------|
| `config/app.php` | App settings |
| `config/database.php` | Database connections |
| `config/cache.php` | Cache settings |
| `config/session.php` | Session settings |
| `config/queue.php` | Queue settings |
| `config/mail.php` | Mail settings |
| `config/ai.php` | AI provider settings |

## Link

- [Helpers](/reference/helpers)
