# FAQ

Frequently Asked Questions.

## General

### What is TAVP?

TAVP (The Alternative PHP) is a full-stack PHP framework that offers an alternative to Laravel.

### How to install TAVP?

```bash
composer create-project tavp/core myapp
```

### What is the minimum PHP version?

PHP 8.1 or newer.

## Database

### What databases are supported?

MySQL 5.7+, MariaDB 10.3+, and PostgreSQL 12+.

### How to migrate the database?

```bash
tavp migrate
```

## Runtime

### What is the difference between PHP-FPM, Coil, and Relay?

- PHP-FPM: Traditional, works everywhere
- Coil: Swoole-based, fastest performance
- Relay: RoadRunner-based, balanced approach

### Which runtime is recommended?

For production with high traffic, use Coil. For shared hosting, use PHP-FPM.

## Links

- [Troubleshooting](/en/reference/troubleshooting)
