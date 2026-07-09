# Performance

Tips for optimizing TAVP performance.

## Caching

```php
// Enable cache
'value' => Cache::remember('key', 3600, function () {
    return expensiveOperation();
});
```

## Database

```php
// Use indexes
$table->index('email');

// Select specific columns
User::select('id', 'name')->get();

// Eager loading
User::with('posts')->get();
```

## Assets

```bash
# Optimize assets
tavp asset:build --production
```

## Runtime

Use Coil or Relay for better performance.

## Links

- [Community](/en/community/contributing)
