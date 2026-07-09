# PHP-FPM

Traditional PHP runtime untuk TAVP.

## Usage

```bash
tavp serve
```

## Performance

- Requests/sec: ~5,000
- Memory: ~15MB per worker
- Latency: <10ms

## Best For

- Shared hosting
- Traditional servers
- Development

## Configuration

```ini
; /etc/php/8.3/fpm/pool.d/www.conf
pm = dynamic
pm.max_children = 50
pm.start_servers = 5
```

## Link

- [TAVP Coil](/runtimes/coil)
