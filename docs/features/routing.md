# Routing

URL routing untuk TAVP.

## Basic Routes

```php
// routes/web.php

$router->get('/', function () {
    return view('home');
});

$router->post('/users', [UserController::class, 'store']);

$router->put('/users/{id}', [UserController::class, 'update']);

$router->delete('/users/{id}', [UserController::class, 'destroy']);
```

## Route Parameters

```php
$router->get('/users/{id}', [UserController::class, 'show']);

$router->get('/posts/{postId}/comments/{commentId}', [CommentController::class, 'show']);
```

## Route Groups

```php
$router->group(['prefix' => 'api'], function ($router) {
    $router->get('/users', [UserController::class, 'index']);
    $router->post('/users', [UserController::class, 'store']);
});

$router->group(['middleware' => 'auth'], function ($router) {
    $router->get('/profile', [ProfileController::class, 'show']);
});
```

## Named Routes

```php
$router->get('/users', [UserController::class, 'index'])
    ->name('users.index');

// Generate URL
$url = url('users.index');
```

## Link

- [Middleware](/features/middleware)
