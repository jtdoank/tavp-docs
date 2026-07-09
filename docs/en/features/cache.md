# Cache

Caching system for TAVP.

## Configuration

```php
// config/cache.php
return [
    'default' => env('CACHE_DRIVER', 'file'),
    
    'stores' => [
        'file' => [
            'driver' => 'file',
            'path' => storage_path('cache'),
        ],
        'redis' => [
            'driver' => 'redis',
            'connection' => 'default',
        ],
    ],
];
```

## Usage

```php
use Tavp\Support\Facades\Cache;

// Store
Cache::put('key', 'value', now()->addMinutes(30));

// Get
$value = Cache::get('key');

// Check
if (Cache::has('key')) {
    // exists
}

// Delete
Cache::forget('key');

// Remember
$value = Cache::remember('key', 3600, function () {
    return expensiveOperation();
});
```

## Links

- [Queue](/en/features/queue)
