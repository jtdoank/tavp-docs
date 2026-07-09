# Performance

Tips optimasi performa TAVP.

## Runtime Comparison

| Runtime | Type | Speed | Best For |
|---------|------|-------|----------|
| PHP-FPM | Default | Standard | Shared hosting, development |
| TAVP Coil | Swoole | Fastest | High traffic, real-time |
| TAVP Relay | RoadRunner | Fast | Enterprise, process isolation |
| TAVP Weave | PHP Fibers | Standard | Shared hosting, parallel I/O |

### PHP-FPM

Traditional PHP runtime. Works everywhere.

```bash
tavp serve
```

### TAVP Coil (Swoole)

- Native coroutines via Swoole C-extension
- Async I/O: hooks all blocking PHP functions
- Persistent memory: Phalcon booted once per worker
- 10,000+ concurrent coroutines per worker
- Connection pooling (MySQL, Redis, HTTP)
- Built-in: timer, task queue, WebSocket server
- **Requires:** Swoole extension + VPS/dedicated server

```bash
tavp coil:start --workers=4
```

### TAVP Relay (RoadRunner)

- Go-based server handles HTTP, Queue, WebSocket, gRPC, Metrics
- Process isolation: PHP crash does not take down Go server
- Automatic worker restart on failure
- Built-in job pipeline (no external queue needed)
- Prometheus metrics export
- Single Go binary — no external dependencies
- **Requires:** RoadRunner binary + VPS/dedicated server

```bash
tavp relay:start --workers=4
```

### TAVP Weave (PHP Fibers)

- Zero external dependencies (no extensions needed)
- Works on shared hosting (PHP-FPM compatible)
- Parallel I/O: HTTP calls, DB queries in one request
- Synchronous-looking syntax (no callback hell)

```php
use Tavp\Coil\Facades\Weave;

$results = Weave::gather([
    fn() => Http::get('https://api.example.com/users'),
    fn() => DB::select('SELECT * FROM posts'),
]);
```

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

## Link

- [Community](/community/contributing)
