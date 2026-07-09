# Authentication Tutorial

Tutorial autentikasi di TAVP.

## 1. Setup Auth Config

```php
// config/auth.php
return [
    'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
    ],
    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
        'api' => [
            'driver' => 'jwt',
            'provider' => 'users',
        ],
    ],
];
```

## 2. User Model

```php
<?php
namespace App\Models;

use Tavp\Auth\Authenticatable;

class User extends Authenticatable
{
    protected $fillable = ['name', 'email', 'password'];
    protected $hidden = ['password', 'remember_token'];
}
```

## 3. Register Routes

```php
$router->post('/register', 'AuthController@register');
$router->post('/login', 'AuthController@login');
$router->post('/logout', 'AuthController@logout')->middleware('auth');
```

## 4. Controller

```php
<?php
namespace App\Http\Controllers;

use Tavp\Http\Controllers\Controller;
use Tavp\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login()
    {
        $credentials = $this->request->only('email', 'password');
        
        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'Logged in']);
        }
        
        return response()->json(['error' => 'Invalid credentials'], 401);
    }
}
```

## Link

- [API Tutorial](/tutorials/api)
