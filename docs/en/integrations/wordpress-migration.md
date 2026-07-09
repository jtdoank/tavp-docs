# WordPress Migration

Guide for migrating from WordPress to TAVP.

## Migration Steps

### 1. Export Data

```sql
-- Export database
mysqldump -u root wordpress_db > wordpress.sql
```

### 2. Install TAVP

```bash
tavp new mysite
cd mysite
```

### 3. Migrate Content

```php
// Import posts
Post::insert([
    'title' => $wp_post->post_title,
    'content' => $wp_post->post_content,
    'created_at' => $wp_post->post_date,
]);
```

### 4. Replace Plugins

| WordPress Plugin | TAVP Alternative |
|-----------------|------------------|
| WooCommerce | Custom + TAVP ORM |
| Yoast SEO | Custom meta tags |
| Contact Form 7 | Custom form |

## Key Differences

| Feature | WordPress | TAVP |
|---------|-----------|------|
| CMS | Built-in | Custom code |
| Database | MySQL (WP schema) | Custom schema |
| Admin | wp-admin | Build your own |
| Themes | WP themes | Volt templates |

## Links

- [Deployment](/en/deployment/overview)
