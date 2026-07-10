---
title: CMS
---

# CMS

TAVP CMS is a content management system built on the TAVP Stack. WordPress-familiar, Voyager-style admin, thin and fast — with pluggable storage, headless API, and a modern feature set.

## Features

- **Pluggable Storage** — Database (Phalcon ORM) or flat-file (Markdown + YAML front matter)
- **BREAD Content Types** — Browse, Read, Edit, Add, Delete with auto-generated admin UI
- **19 Field Types** — text, textarea, richtext, slug, number, boolean, select, date, datetime, media, relation, blocks, json, password, email, url, color, tags, repeater, seo
- **Validation** — Server-side rules: required, min, max, email, url, unique, numeric, in, regex
- **Taxonomy** — Hierarchical categories and flat tags
- **Revisions** — Version history with one-click rollback
- **Search** — Full-text search across all content types
- **SEO & Sitemap** — Per-record meta fields + auto-generated `/sitemap.xml`
- **Webhooks** — HTTP POST on content events with HMAC signature
- **RBAC** — Email-to-role mapping with permission patterns
- **Headless API** — REST API with Bearer token auth
- **CLI** — Command-line tools for migrations, tokens, and management

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
| `CMS_SEO_ENABLED` | `true` | Enable sitemap + SEO |
| `CMS_WEBHOOKS_ENABLED` | `true` | Enable webhooks |

## Front-end Routes

| Route | Description |
|-------|-------------|
| `/blog` | Blog index |
| `/blog/{slug}` | Single post |
| `/category/{slug}` | Category archive |
| `/tag/{slug}` | Tag archive |
| `/{slug}` | Page (catch-all) |
| `/sitemap.xml` | Auto-generated sitemap |

## Comparison

| Feature | TAVP CMS | WordPress | Strapi | Statamic |
|---------|----------|-----------|--------|----------|
| Pluggable storage | ✅ DB + flat-file | ❌ | ❌ | Flat-file only |
| Headless API | ✅ REST built-in | Plugin | ✅ REST+GraphQL | Pro |
| Revisions | ✅ File-based | ✅ DB | ❌ | Git-based |
| Validation | ✅ 9 rules | Limited | ✅ | ✅ |
| Caching | ✅ Read-through | Plugin | ❌ | ✅ |
| Webhooks | ✅ + HMAC | Plugin | ✅ | Plugin |
| SEO/Sitemap | ✅ Built-in | Plugin | ❌ | Addon |
| Memory | ~4MB | ~256MB | ~128MB | ~16MB |

## Links

- [GitHub](https://github.com/tavp-stack/tavp-cms)
- [Gitea](https://git.glotama.com/tavp-stack/tavp-cms)
