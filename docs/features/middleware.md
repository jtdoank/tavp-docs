# Middleware

HTTP middleware untuk TAVP.

## Create Middleware

```php
<?php
namespace App\Http\Middleware;

use Tavp\Http\Middleware\Middleware;

class CheckAge extends Middleware
{
    public function handle($request, $next, $minAge = 18)
    {
        if ($request->user()->age < $minAge) {
            return response()->json(['error' => 'Age requirement not met'], 403);
        }
        
        return $next($request);
    }
}
```

## Register Middleware

```php
// bootstrap/app.php
$middleware = [
    \Tavp\Middleware\TrustProxies::class,
    \Tavp\Middleware\HandleCors::class,
    \Tavp\Middleware\ValidateCsrfToken::class,
    \Tavp\Middleware\StartSession::class,
    \Tavp\Middleware\Authenticate::class,
];
```

## Use Middleware

```php
$router->get('/profile', [
    'middleware' => 'auth',
    'uses' => 'ProfileController@show',
]);

$router->get('/admin', [
    'middleware' => ['auth', 'admin'],
    'uses' => 'AdminController@index',
]);
```

## Built-in Middleware

| Middleware | Description |
|------------|-------------|
| Authenticate | Redirect unauthenticated users |
| ValidateCsrfToken | CSRF protection |
| TrustProxies | Trust proxy headers |
| HandleCors | CORS handling |
| StartSession | Session management |
| ThrottleRequests | Rate limiting |

## Link

- [Routing](/features/routing)
