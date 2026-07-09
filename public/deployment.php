<?php

declare(strict_types=1);

/**
 * TAVP Stack — Deployment Guide
 */

echo <<<'EOF'
# Deployment Guide

## Deployment Options

### 1. HestiaCP

Deploy to a server running HestiaCP control panel.

```bash
tavp deploy --adapter=hestiacp --domain=example.com
```

### 2. VPS (Manual)

Deploy to a bare VPS via SSH.

```bash
tavp deploy --adapter=vps --host=192.168.1.100 --user=root
```

### 3. Docker

Build and deploy Docker containers.

```bash
tavp deploy --adapter=docker
```

### 4. cPanel

Deploy to a cPanel server.

```bash
tavp deploy --adapter=cpanel --domain=example.com
```

## Pre-Deployment Checklist

1. Set `APP_ENV=production` in `.env`
2. Set `APP_DEBUG=false` in `.env`
3. Generate application key: `tavp key:generate`
4. Run migrations: `tavp migrate --force`
5. Optimize autoloader: `composer install --no-dev --optimize-autoloader`
6. Build frontend assets: `npm run build`

## Post-Deployment

1. Verify the site loads correctly
2. Check error logs for issues
3. Test all critical functionality
4. Setup SSL/TLS certificate
5. Configure backup strategy

## Rollback

If something goes wrong:

```bash
# Rollback migrations
tavp migrate --rollback

# Take application offline
tavp down --message="Rolling back"
```

## Environment Variables

Ensure these are set in production:

```ini
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:...
DB_HOST=your-db-host
DB_DATABASE=your-db-name
DB_USERNAME=your-db-user
DB_PASSWORD=your-db-password
```
EOF;
