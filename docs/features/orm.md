# ORM

TAVP ORM adalah Eloquent-like ORM untuk Phalcon.

## Defining Models

```php
<?php
namespace App\Models;

use Tavp\Database\Model;

class User extends Model
{
    protected $table = 'users';
    
    protected $fillable = ['name', 'email', 'password'];
    
    protected $hidden = ['password', 'remember_token'];
    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_admin' => 'boolean',
    ];
}
```

## CRUD Operations

```php
// Create
$user = User::create([
    'name' => 'John',
    'email' => 'john@example.com',
    'password' => bcrypt('secret'),
]);

// Read
$user = User::find(1);
$users = User::where('active', true)->get();

// Update
$user->update(['name' => 'Jane']);

// Delete
$user->delete();
```

## Relationships

```php
// hasOne
public function profile()
{
    return $this->hasOne(Profile::class);
}

// hasMany
public function posts()
{
    return $this->hasMany(Post::class);
}

// belongsTo
public function user()
{
    return $this->belongsTo(User::class);
}

// belongsToMany
public function roles()
{
    return $this->belongsToMany(Role::class);
}
```

## Eager Loading

```php
$users = User::with(['posts', 'roles'])->get();
```

## Link

- [Migrations](/features/migrations)
