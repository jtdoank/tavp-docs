# Laravel Migration

Guide migrasi dari Laravel ke TAVP.

## Migration Steps

### 1. Install TAVP

```bash
composer require tavp/core
```

### 2. Migrate Models

```php
// Laravel
use Illuminate\Database\Eloquent\Model;

class User extends Model {}

// TAVP
use Tavp\Database\Model;

class User extends Model {}
```

### 3. Migrate Controllers

```php
// Laravel
class UserController extends Controller {}

// TAVP
class UserController extends Controller {}
```

### 4. Migrate Routes

```php
// Laravel
Route::get('/users', [UserController::class, 'index']);

// TAVP
$router->get('/users', 'UserController@index');
```

### 5. Migrate Config

```php
// Laravel
config('database.default');

// TAVP
config('database.default');
```

## Key Differences

| Feature | Laravel | TAVP |
|---------|---------|------|
| Database | Eloquent | Fluent Phalcon ORM |
| Templates | Blade | Volt (compiled) |
| Runtime | PHP-FPM | PHP-FPM / Coil / Relay |
| Package | Composer | Tavphub |

## Link

- [WordPress Migration](/integrations/wordpress-migration)
