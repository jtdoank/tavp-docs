# FAQ

Frequently Asked Questions.

## General

### Apa itu TAVP?

TAVP (The Alternative PHP) adalah full-stack PHP framework yang menawarkan alternatif untuk Laravel.

### Bagaimana cara install TAVP?

```bash
composer create-project tavp/core myapp
```

### Berapa minimum PHP version?

PHP 8.1 atau lebih baru.

## Database

### Database apa yang didukung?

MySQL 5.7+, MariaDB 10.3+, dan PostgreSQL 12+.

### Bagaimana cara migrasi database?

```bash
tavp migrate
```

## Runtime

### Apa bedanya PHP-FPM, Coil, dan Relay?

- PHP-FPM: Traditional, works everywhere
- Coil: Swoole-based, fastest performance
- Relay: RoadRunner-based, balanced approach

### Runtime mana yang recommended?

Untuk production dengan traffic tinggi, gunakan Coil. Untuk shared hosting, gunakan PHP-FPM.

## Link

- [Troubleshooting](/reference/troubleshooting)
