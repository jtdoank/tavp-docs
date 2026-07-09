<?php

declare(strict_types=1);

/**
 * TAVP Stack — Routing Guide
 */

echo <<<'EOF'
# Routing Guide

## Basic Routes

### GET Route

```php
$router->addGet('/about', [PageController::class, 'about']);
```

### POST Route

```php
$router->addPost('/contact', [PageController::class, 'contact']);
```

### Route with Parameters

```php
$router->addGet('/posts/{id:int}', [PostController::class, 'show']);
$router->addGet('/users/{slug:string}', [UserController::class, 'profile']);
```

## Route Groups

### With Prefix

```php
$router->addGroup('/api', function ($router) {
    $router->addGet('/posts', [PostController::class, 'index']);
    $router->addPost('/posts', [PostController::class, 'store']);
});
```

### With Middleware

```php
$router->addGroup('/admin', function ($router) {
    $router->addGet('/dashboard', [AdminController::class, 'dashboard']);
})->addMiddleware(new Authenticate());
```

## Named Routes

```php
$router->addGet('/posts', [PostController::class, 'index'])
    ->setName('posts.index');

// Generate URL
$url = route('posts.index');
```

## Route Parameters

### Required Parameters

```php
$router->addGet('/posts/{id:int}', function ($id) {
    // $id is required
});
```

### Optional Parameters

```php
$router->addGet('/posts/{id:int?}', function ($id = null) {
    // $id is optional
});
```

## API Routes

```php
// routes/api.php
$router->addGet('/api/posts', [PostApiController::class, 'index']);
$router->addPost('/api/posts', [PostApiController::class, 'store']);
```

## Error Handling

```php
// 404 Not Found
$router->addGet('/{*}', function () {
    http_response_code(404);
    return view('errors.404');
});
```
EOF;
