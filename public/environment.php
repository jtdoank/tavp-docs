<?php

declare(strict_types=1);

/**
 * TAVP Stack — Environment Guide
 */

echo <<<'EOF'
# Environment Guide

TAVP Stack supports multiple environment adapters for different development setups.

## Supported Environments

### Docker (Default)

Full containerized development environment.

```bash
tavp new my-project --adapter=docker
cd my-project
tavp serve
```

### DevContainer

VS Code Remote Container development.

```bash
tavp new my-project --adapter=devcontainer
```

### Laragon

Windows Laragon development.

```bash
tavp new my-project --adapter=laragon
```

### XAMPP

Windows XAMPP development.

```bash
tavp new my-project --adapter=xampp
```

### WAMP

Windows WAMP development.

```bash
tavp new my-project --adapter=wamp
```

### DDEV

Docker-based local development.

```bash
tavp new my-project --adapter=ddev
```

## Configuration

### .env File

```ini
APP_ENV=local
APP_DEBUG=true
APP_KEY=base64:...

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=tavp
DB_USERNAME=tavp_user
DB_PASSWORD=secret

REDIS_HOST=redis
REDIS_PORT=6379
```

### Switching Environments

```bash
tavp env:switch production
```

This loads `.env.production` and updates the environment.

## Environment-Specific Settings

| Setting | Local | Production |
|---------|-------|------------|
| APP_DEBUG | true | false |
| APP_LOG_LEVEL | debug | error |
| CACHE_DRIVER | array | redis |
| SESSION_DRIVER | file | redis |
EOF;
