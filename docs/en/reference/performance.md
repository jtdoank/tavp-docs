# Performance

Tips for optimizing TAVP performance.

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

## Client-Side Optimization (Lighthouse)

Server-side is fast (Phalcon <5ms), but Lighthouse measures **client-side performance**. For a score of 90+, optimize the client side:

### Build Tailwind CSS Offline

Do NOT use `<script src="https://cdn.tailwindcss.com">` — it's a 300KB+ runtime compiler.

```bash
npm install tailwindcss @tailwindcss/typography --save-dev
npx tailwindcss -i resources/css/app.css -o public/assets/app.css --minify
```

**Result**: 300KB+ → 20-30KB

### Self-host Fonts

Do NOT use Google Fonts CDN — it's render-blocking.

```html
<!-- ❌ -->
<link href="https://fonts.googleapis.com/css2?family=Inter..." rel="stylesheet"/>

<!-- ✅ -->
<link rel="stylesheet" href="/assets/fonts.css"/>
```

Download `.woff2` files, create `@font-face` declarations with `font-display: swap`.

### Inline Critical CSS

```html
<style><?php readfile(base_path('public/assets/critical.css')); ?></style>
<link rel="stylesheet" href="/assets/app.css" media="print" onload="this.media='all'"/>
<noscript><link rel="stylesheet" href="/assets/app.css"/></noscript>
```

### Defer Non-critical Scripts

```html
<script defer src="/js/alpine.min.js"></script>
<script defer src="/js/prism-bundle.js"></script>
```

### Bundle Scripts

```bash
# Combine Prism.js components into 1 file
cat node_modules/prismjs/prism.js \
    node_modules/prismjs/components/prism-php.min.js \
    > public/js/prism-bundle.js
```

### Enable Gzip (Nginx)

```nginx
server {
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml text/javascript image/svg+xml;
    gzip_min_length 256;
    gzip_vary on;
}
```

### Expected Scores

| Environment | Performance | Accessibility | Best Practices | SEO |
|-------------|-------------|---------------|----------------|-----|
| Local (TavpBox) | 70-80 | 93-100 | 100 | 100 |
| Production VPS | 90-100 | 93-100 | 100 | 100 |

::: tip
Lighthouse scores on a local container are ALWAYS lower due to container overhead + proxy. Test from a production VPS for accurate scores.
:::

## Links

- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Community](/en/community/contributing)
