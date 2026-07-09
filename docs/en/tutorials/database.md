# Database Tutorial

Tutorial for database operations in TAVP.

## Create Migration

```bash
tavp make:migration create_users_table
```

## Define Schema

```php
<?php
use Tavp\Database\Schema\Blueprint;
use Tavp\Support\Facades\Schema;

Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamps();
});
```

## Run Migration

```bash
tavp migrate
```

## Eloquent Models

```php
<?php
namespace App\Models;

use Tavp\Database\Model;

class User extends Model
{
    protected $fillable = ['name', 'email'];
    
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
```

## Query Builder

```php
// Select
$users = DB::table('users')->where('active', true)->get();

// Insert
DB::table('users')->insert(['name' => 'John', 'email' => 'john@example.com']);

// Update
DB::table('users')->where('id', 1)->update(['name' => 'Jane']);

// Delete
DB::table('users')->where('id', 1)->delete();
```

## Links

- [Deployment Tutorial](/en/tutorials/deployment)
