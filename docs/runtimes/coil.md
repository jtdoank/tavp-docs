# TAVP Coil

Swoole-based runtime untuk TAVP.

## Usage

```bash
# Start
tavp coil:start --workers=4

# Stop
tavp coil:stop

# Status
tavp coil:status
```

## Performance

- Requests/sec: ~12,000
- Memory: ~8MB per worker
- Latency: <5ms

## Best For

- High traffic applications
- Real-time applications
- API servers

## Configuration

```php
// config/coil.php
return [
    'workers' => 4,
    'max_coroutines' => 1000,
    'max_connections' => 10000,
];
```

## Link

- [TAVP Relay](/runtimes/relay)
