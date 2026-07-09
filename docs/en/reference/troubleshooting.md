# Troubleshooting

Common issues and solutions.

## Installation

### Composer error

```bash
composer create-project tavp/core myapp
# Error: Could not find package tavp/core
```

**Solution:** Ensure you have PHP 8.1+ and composer is up to date.

```bash
composer self-update
php -v
```

### Phalcon not found

```bash
PHP Fatal error: Uncaught Error: Class 'Phalcon\Config' not found
```

**Solution:** Install Phalcon extension.

```bash
# Ubuntu/Debian
sudo apt-get install php8.3-phalcon

# PHP-FPM
sudo systemctl restart php8.3-fpm
```

## Database

### Connection refused

```bash
SQLSTATE[HY000] [2002] Connection refused
```

**Solution:** Check database credentials in `.env`.

### Table not found

```bash
SQLSTATE[42S02]: Base table or view not found: 1146 Table 'tavp.users' doesn't exist
```

**Solution:** Run migrations.

```bash
tavp migrate
```

## Performance

### Slow response

- Check database queries (enable query log)
- Enable caching
- Use Coil or Relay runtime

### High memory usage

- Reduce PHP memory_limit
- Optimize database queries
- Use pagination

## Links

- [Performance](/en/reference/performance)
