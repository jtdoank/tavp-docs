---
title: TAVP CMS
---

# TAVP CMS

Content management system built on TAVP modules. Thin glue layer — not a monolith.

## What It Is

tavp-cms composes existing modules into a working CMS:

| Concern | Module |
|---------|--------|
| Auth (OTP, JWT, RBAC) | tavpid |
| Admin panel | tavphub |
| BREAD CRUD | tavp-core (BreadManager) |
| Storage | tavp-core (DatabaseStore / FlatFileStore) |
| Taxonomy | tavp-core (TaxonomyManager) |
| Revisions | tavp-core (RevisionStore) |
| Search | tavp-core (SearchEngine) |
| SEO | tavp-cms (SeoManager, SchemaGenerator, etc.) |
| Queue | tavp-core (QueueManager, DatabaseQueue) |
| Schedule | tavp-core (Schedule) |

## Quick Start

```bash
composer create-project tavp/cms my-site
cd my-site
tavp migrate
tavp serve
```

## Features

- **Pluggable Storage** — Database or flat-file (Markdown + YAML)
- **BREAD Content Types** — auto-generated admin UI
- **OTP Admin Login** — passwordless via tavpid
- **RBAC** — database-backed roles + permissions via tavpid
- **Taxonomy** — categories + tags
- **Revisions** — version history, one-click rollback
- **Search** — full-text across all content types
- **Headless API** — REST with bearer token auth
- **SEO Module** — meta tags, OG, Twitter, JSON-LD, sitemap, robots, RSS, redirects, analyzer
- **Media Library** — upload, list, preview, delete
- **Menu Builder** — nestable navigation menus
- **Settings** — key-value site settings
- **Webhooks** — HTTP POST on content events with HMAC
- **Queue Worker** — background job processing
- **Schedule Runner** — cron-compatible task scheduling
- **Dark Admin UI** — modern Tailwind theme

## Architecture

tavp-cms is a **thin glue layer** — no auth code, no admin code, no RBAC code of its own. Everything comes from modules.

```
tavp-cms
├── config/
│   ├── cms.php        # Content types, storage, admin, mail, media
│   ├── seo.php        # SEO config (meta, sitemap, robots, schemas)
│   └── redirects.php  # Redirect rules
├── src/
│   ├── Admin/         # Admin controllers (7)
│   ├── Api/           # Headless REST API
│   ├── Bread/         # BREAD manager
│   ├── Seo/           # SEO module (14 classes)
│   ├── Storage/       # Database + FlatFile stores
│   ├── Taxonomy/      # Categories + tags
│   ├── Revisions/     # Version history
│   ├── Search/        # Full-text search
│   ├── Webhooks/      # Webhook manager
│   ├── Media/         # Media library
│   ├── Menu/          # Menu builder
│   ├── Settings/      # Key-value settings
│   ├── Publishing/    # Scheduled publishing
│   ├── Cache/         # Read-through cache
│   └── CmsServiceProvider.php  # Wires everything
├── database/migrations/  # 12 migration files
├── resources/admin/      # Admin templates (15+)
└── routes/
    ├── web.php           # Front-end routes
    └── api.php           # API routes
```

## Module Dependencies

```json
{
  "require": {
    "tavp/core": "^1.1",
    "tavp/tavpid": "^1.0"
  },
  "suggest": {
    "tavp/tavphub": "Admin panel abstraction",
    "tavp/tavpblocks": "UI components"
  }
}
```

## Configuration

### config/cms.php

```php
return [
    'storage' => 'database',  // or 'flatfile'
    'admin' => [
        'emails' => ['admin@example.com'],
        'brand' => 'My CMS',
        'roles' => [
            'admin@example.com' => 'admin',
            'editor@example.com' => 'editor',
        ],
        'permissions' => [
            'admin' => ['content.*', 'taxonomy.*', 'media.*'],
            'editor' => ['content.*', 'taxonomy.*'],
        ],
    ],
    'content_types' => [
        'page' => [
            'label' => 'Pages',
            'fields' => [
                ['name' => 'title', 'type' => 'text', 'required' => true],
                ['name' => 'slug', 'type' => 'slug', 'from' => 'title'],
                ['name' => 'body', 'type' => 'richtext'],
                ['name' => 'status', 'type' => 'select', 'options' => ['draft', 'published']],
            ],
        ],
    ],
];
```

## Migrations

Run all migrations:

```bash
tavp migrate
```

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

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cms/types` | List content types |
| GET | `/api/cms/{type}` | Browse records |
| GET | `/api/cms/{type}/{id}` | Read record |
| POST | `/api/cms/{type}` | Create record |
| PUT | `/api/cms/{type}/{id}` | Update record |
| DELETE | `/api/cms/{type}/{id}` | Delete record |
| GET | `/api/cms/search?q=...` | Full-text search |
| GET | `/api/cms/taxonomy/{type}` | List taxonomy terms |
| POST | `/api/cms/taxonomy` | Create taxonomy term |
| GET | `/api/cms/{type}/{id}/revisions` | Revision history |
| POST | `/api/cms/{type}/{id}/rollback/{ts}` | Rollback to revision |
| GET | `/sitemap.xml` | XML sitemap |
| GET | `/robots.txt` | Robots.txt |
| GET | `/feed` | RSS feed |

## Admin Routes

| Route | Description |
|-------|-------------|
| `/admin` | Dashboard |
| `/admin/login` | OTP login |
| `/admin/c/{type}` | Content list |
| `/admin/c/{type}/create` | Create content |
| `/admin/c/{type}/{id}/edit` | Edit content |
| `/admin/taxonomy/{type}` | Taxonomy list |
| `/admin/seo` | SEO dashboard |
| `/admin/seo/settings` | SEO settings |
| `/admin/seo/redirects` | Redirect manager |
| `/admin/seo/analyzer` | Content analyzer |

## Links

- [GitHub](https://github.com/tavp-stack/tavp-cms)
- [Gitea](https://git.glotama.com/tavp-stack/tavp-cms)
- [SEO Feature Docs](/en/features/seo)
