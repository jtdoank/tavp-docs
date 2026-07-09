# Migrations

Database migrations for TAVP.

## Create Migration

```bash
tavp make:migration create_users_table
```

## Migration Structure

```php
<?php
use Tavp\Database\Schema\Blueprint;
use Tavp\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }
    
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
```

## Column Types

| Method | Description |
|--------|-------------|
| `id()` | Auto-incrementing ID |
| `string(name, length)` | VARCHAR |
| `text(name)` | TEXT |
| `integer(name)` | INT |
| `boolean(name)` | BOOLEAN |
| `decimal(name, precision, scale)` | DECIMAL |
| `date(name)` | DATE |
| `dateTime(name)` | DATETIME |
| `timestamps()` | created_at, updated_at |
| `softDeletes()` | deleted_at |

## Run Migrations

```bash
# Run all pending
tavp migrate

# Rollback last batch
tavp migrate:rollback

# Fresh start
tavp migrate:fresh
```

## Links

- [ORM](/en/features/orm)
