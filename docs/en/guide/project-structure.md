# Project Structure

TAVP folder structure after installation:

```
my-app/
├── app/
│   ├── Controllers/          # HTTP controllers
│   ├── Models/               # Database models
│   ├── Middleware/            # HTTP middleware
│   ├── Services/             # Business logic
│   ├── Events/               # Event classes
│   └── Listeners/            # Event listeners
├── bootstrap/
│   └── app.php               # Application bootstrap
├── config/                   # Configuration files
│   ├── app.php
│   ├── auth.php
│   ├── cache.php
│   ├── database.php
│   ├── mail.php
│   └── queue.php
├── database/
│   ├── migrations/           # Database migrations
│   └── seeders/              # Database seeders
├── public/                   # Web root
│   └── index.php             # Entry point
├── resources/
│   ├── views/                # Volt templates
│   ├── css/                  # Stylesheets
│   └── js/                   # JavaScript
├── routes/
│   ├── web.php               # Web routes
│   └── api.php               # API routes
├── storage/                  # File storage
├── tests/                    # Test files
│   ├── Unit/
│   └── Feature/
└── vendor/                   # Composer dependencies
```

## Key Files

### `bootstrap/app.php`
Application bootstrap. Register services here.

### `config/*.php`
Configuration files. All settings are here.

### `routes/web.php`
Web routes. Define URL patterns here.

### `routes/api.php`
API routes. RESTful endpoints here.

### `app/Controllers/`
HTTP controllers. Handle requests here.

### `app/Models/`
Database models. Eloquent-style ORM here.

### `resources/views/`
Volt templates. HTML views here.

## Next

- [Features](/en/features/authentication)
- [Ecosystem](/en/ecosystem/overview)
