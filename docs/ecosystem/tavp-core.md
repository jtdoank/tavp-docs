# tavp-core

Framework foundation TAVP.

## Fitur

- Router (Phalcon)
- ORM (Eloquent-like)
- Volt Templates
- Middleware pipeline
- DI Container
- Event system
- Queue system
- Cache system
- Mail system
- Storage system

## Install

```bash
composer create-project tavp/core my-app
```

## Usage

### Router

```php
$router->get('/users', [UserController::class, 'index']);
$router->post('/users', [UserController::class, 'store']);
```

### ORM

```php
// Create
$user = User::create(['name' => 'John']);

// Read
$users = User::where('active', true)->get();

// Update
$user->update(['name' => 'Jane']);

// Delete
$user->delete();
```

### Volt Templates

```volt
{% extends 'layouts/app.volt' %}

{% block content %}
<h1>{{ title }}</h1>
{% endblock %}
```

## Link

- [GitHub](https://github.com/tavp-stack/tavp-core)
- [Documentation](/features/orm)
