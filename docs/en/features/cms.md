---
title: CMS
---

# CMS

TAVP CMS is a content management system built on the TAVP Stack. WordPress-familiar, Voyager-style admin, thin and fast — with pluggable storage, headless API, SEO module, and a modern feature set.

## Features

- **Pluggable Storage** — Database (Phalcon ORM) or flat-file (Markdown + YAML front matter)
- **BREAD Content Types** — Browse, Read, Edit, Add, Delete with auto-generated admin UI
- **19 Field Types** — text, textarea, richtext, slug, number, boolean, select, date, datetime, media, relation, blocks, json, password, email, url, color, tags, repeater, seo
- **SEO Module** — Meta tags, Open Graph, Twitter Cards, JSON-LD schemas, sitemap, robots.txt, RSS, redirects, analyzer, social sharing
- **Validation** — Server-side rules: required, min, max, email, url, unique, numeric, in, regex
- **Taxonomy** — Hierarchical categories and flat tags
- **Revisions** — Version history with one-click rollback
- **Search** — Full-text search across all content types
- **Media Library** — Upload, list, preview, delete files via admin UI
- **Menu Builder** — Nestable menu items with drag-and-drop ordering
- **Settings** — Site name, description, URL, SEO defaults
- **Webhooks** — HTTP POST on content events with HMAC signature
- **RBAC** — Role-based access control via tavpid (database-backed)
- **Headless API** — REST API with Bearer token auth
- **CLI** — `tavp cms:publish`, `tavp cache:clear`, `tavp schedule:run`

## Quick Start

```bash
composer create-project tavp/cms my-site
cd my-site
tavp migrate
tavp serve
```

## Configuration

```env
CMS_STORAGE=database
CMS_ADMIN_EMAILS=you@example.com
CMS_API_TOKENS=your-secret-token-here
```

## SEO Module

Complete on-page and technical SEO toolkit.

### Features

| Feature | Description |
|---------|-------------|
| Meta Tags | Auto-generated title, description, keywords per content |
| Open Graph | og:title, og:description, og:image, og:type, og:url |
| Twitter Cards | twitter:card, twitter:title, twitter:description, twitter:image |
| JSON-LD Schemas | Article, Product, WebPage, FAQPage, BreadcrumbList |
| XML Sitemap | Auto-generated from published content, ping Google/Bing |
| Robots.txt | Dynamic generation from config |
| RSS Feed | Auto-generated at `/feed` |
| Redirect Manager | 301/302 redirects with hit tracking |
| SEO Analyzer | Score (0-100), errors, warnings, suggestions |
| Social Sharing | Twitter, Facebook, LinkedIn, WhatsApp, Telegram buttons |
| Webmaster Tools | Google/Bing verification meta tags |
| Google Analytics | Auto-inject GA tag |
| Outbound Link Tracking | Track + detect broken links |
| AI Meta Generator | Auto-generate meta tags from content |

### Admin Routes

| Route | Description |
|-------|-------------|
| `/admin/seo` | SEO Dashboard (stats, sitemap, robots) |
| `/admin/seo/settings` | SEO settings (meta, OG, Twitter, webmaster, analytics) |
| `/admin/seo/redirects` | Redirect manager (CRUD) |
| `/admin/seo/analyzer` | Content SEO analyzer |
| `/admin/seo/ping` | Ping search engines with sitemap |

### Front-end Routes

| Route | Description |
|-------|-------------|
| `/sitemap.xml` | Auto-generated XML sitemap |
| `/robots.txt` | Dynamic robots.txt |
| `/feed` | RSS/Atom feed |

### Config

```php
// config/seo.php
return [
    'enabled' => true,
    'meta' => [
        'title_suffix' => ' | My Site',
        'separator' => ' | ',
    ],
    'sitemap' => [
        'enabled' => true,
        'ping_google' => true,
        'ping_bing' => true,
    ],
    'robots' => [
        'allow' => ['/'],
        'disallow' => ['/admin', '/api'],
    ],
    'open_graph' => ['enabled' => true],
    'twitter' => [
        'card_type' => 'summary_large_image',
    ],
    'schemas' => [
        'types' => [
            'page' => 'WebPage',
            'post' => 'Article',
        ],
    ],
    'rss' => ['enabled' => true, 'limit' => 20],
    'webmaster' => [
        'google_verification' => env('GOOGLE_SITE_VERIFICATION'),
        'bing_verification' => env('BING_SITE_VERIFICATION'),
    ],
    'analytics' => [
        'google_analytics_id' => env('GOOGLE_ANALYTICS_ID'),
    ],
];
```

## API

All endpoints require `Authorization: Bearer <token>`.

### Content Types

```bash
GET /api/cms/types
```

### Browse Records

```bash
GET /api/cms/{type}?page=1&per_page=15&status=published
```

### Read a Record

```bash
GET /api/cms/{type}/{id}
```

### Create a Record

```bash
POST /api/cms/{type}
{
  "title": "Hello",
  "slug": "hello",
  "body": "World",
  "status": "published"
}
```

### Update a Record

```bash
PUT /api/cms/{type}/{id}
{
  "title": "Updated"
}
```

### Delete a Record

```bash
DELETE /api/cms/{type}/{id}
```

### Search

```bash
GET /api/cms/search?q=hello&type=post
```

### Taxonomy

```bash
GET /api/cms/taxonomy/category
POST /api/cms/taxonomy
{
  "type": "category",
  "name": "News",
  "slug": "news"
}
```

### Revisions

```bash
GET /api/cms/{type}/{id}/revisions
POST /api/cms/{type}/{id}/rollback/{timestamp}
```

## CLI

```bash
php bin/cms help
php bin/cms types
php bin/cms make:type product
php bin/cms api:token my-app
php bin/cms search:reindex
php bin/cms taxonomy:list category
```

## Configuration Reference

| Key | Default | Description |
|-----|---------|-------------|
| `CMS_STORAGE` | `database` | Storage driver |
| `CMS_CACHE_ENABLED` | `true` | Enable read-through cache |
| `CMS_CACHE_DRIVER` | `file` | Cache backend |
| `CMS_CACHE_TTL` | `300` | Cache TTL in seconds |
| `CMS_API_PREFIX` | `api/cms` | API route prefix |
| `CMS_API_TOKENS` | — | Comma-separated bearer tokens |
| `CMS_REVISIONS_ENABLED` | `true` | Enable version history |
| `CMS_SEARCH_ENABLED` | `true` | Enable search |
| `CMS_TAXONOMY_ENABLED` | `true` | Enable categories + tags |
| `CMS_SEO_ENABLED` | `true` | Enable SEO module |
| `CMS_WEBHOOKS_ENABLED` | `true` | Enable webhooks |

## Migrations

| # | Table | Description |
|---|-------|-------------|
| 001 | `contents` | Core content storage |
| 002 | `content_types` | BREAD type definitions |
| 003 | `media` | Media library files |
| 004 | `menus`, `menu_items` | Navigation menus |
| 005 | `settings` | Key-value site settings |
| 006 | `taxonomy_terms`, `content_taxonomy` | Categories + tags |
| 007 | `content_revisions` | Version history |
| 008 | `webhooks`, `webhook_deliveries` | Webhook config + logs |
| 009 | `api_tokens` | API bearer tokens |
| 010 | `seo_meta` | Per-record SEO fields |
| 011 | `redirects` | 301/302 redirect rules |
| 012 | `outbound_links` | Link tracking + broken detection |

## Comparison

| Feature | TAVP CMS | WordPress | Strapi | Statamic |
|---------|----------|-----------|--------|----------|
| Pluggable storage | ✅ DB + flat-file | ❌ | ❌ | Flat-file only |
| Headless API | ✅ REST built-in | Plugin | ✅ REST+GraphQL | Pro |
| Revisions | ✅ File-based | ✅ DB | ❌ | Git-based |
| Validation | ✅ 9 rules | Limited | ✅ | ✅ |
| Caching | ✅ Read-through | Plugin | ❌ | ✅ |
| Webhooks | ✅ + HMAC | Plugin | ✅ | Plugin |
| SEO | ✅ Full module | Plugin | ❌ | Addon |
| JSON-LD | ✅ Built-in | Plugin | ❌ | Addon |
| Redirects | ✅ Built-in | Plugin | ❌ | Plugin |
| Memory | ~4MB | ~256MB | ~128MB | ~16MB |

## Links

- [GitHub](https://github.com/tavp-stack/tavp-cms)
- [Gitea](https://git.glotama.com/tavp-stack/tavp-cms)
