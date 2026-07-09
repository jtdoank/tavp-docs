# API Tutorial

Tutorial for building REST APIs with TAVP.

## 1. Define Routes

```php
// routes/api.php
$router->group(['prefix' => 'api'], function ($router) {
    $router->get('/users', 'UserController@index');
    $router->get('/users/{id}', 'UserController@show');
    $router->post('/users', 'UserController@store');
    $router->put('/users/{id}', 'UserController@update');
    $router->delete('/users/{id}', 'UserController@destroy');
});
```

## 2. Create Controller

```php
<?php
namespace App\Http\Controllers;

use Tavp\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }
    
    public function store()
    {
        $validated = $this->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
        ]);
        
        $user = User::create($validated);
        return response()->json($user, 201);
    }
}
```

## 3. Add Middleware

```php
$router->group([
    'prefix' => 'api',
    'middleware' => 'throttle:60,1',
], function ($router) {
    // Routes...
});
```

## 4. Test API

```bash
# List users
curl http://yourapp.com/api/users

# Create user
curl -X POST http://yourapp.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com"}'
```

## Links

- [Reference](/en/reference/cli-commands)
