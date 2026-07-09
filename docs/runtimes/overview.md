# Runtimes

TAVP mendukung 3 runtime options.

## Overview

| Runtime | Speed | Best For |
|---------|-------|----------|
| PHP-FPM | Standard | Shared hosting, traditional |
| TAVP Coil | Fastest | High traffic, real-time |
| TAVP Relay | Fast | Balanced performance |

## PHP-FPM

Traditional PHP runtime. Works everywhere.

```bash
tavp serve
```

## TAVP Coil (Swoole)

Coroutine-based runtime. Highest performance.

```bash
tavp coil:start --workers=4
```

## TAVP Relay (RoadRunner)

Go-based runtime. Balanced approach.

```bash
tavp relay:start --workers=4
```

## Link

- [PHP-FPM](/runtimes/php-fpm)
