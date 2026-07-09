# Security

Security features untuk TAVP.

## CSRF Protection

```php
// Middleware
\Tavp\Middleware\ValidateCsrfToken::class

// In forms
{{ csrf_field() }}
```

## Password Hashing

```php
// Hash
$hashed = password_hash($password, PASSWORD_BCRYPT);

// Verify
if (password_verify($password, $hashed)) {
    // correct
}
```

## XSS Prevention

```volt
{{ user.name }}
{{ user.content | raw }}
```

## SQL Injection Prevention

```php
// Use parameterized queries
$users = DB::select('SELECT * FROM users WHERE email = ?', [$email]);

// Use ORM (safe by default)
$user = User::where('email', $email)->first();
```

## Rate Limiting

```php
$router->post('/api/auth/login', [
    'middleware' => 'throttle:5,1',
    'uses' => 'AuthController@login',
]);
```

## Security Headers

```php
'X-Content-Type-Options' => 'nosniff',
'X-Frame-Options' => 'DENY',
'X-XSS-Protection' => '1; mode=block',
```

## Link

- [Reference](/reference/cli-commands)
