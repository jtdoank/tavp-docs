---
title: TAVP CMS
---

# TAVP CMS

Content management system built on the TAVP Stack. WordPress-familiar, Voyager-style admin, thin and fast.

## Overview

TAVP CMS provides a complete content management solution with:

- **Pluggable Storage** — Database or flat-file drivers
- **BREAD Admin** — Auto-generated admin UI for all content types
- **Headless API** — REST API with token authentication
- **Modern Features** — Taxonomy, revisions, search, webhooks, SEO

## Installation

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

## Content Types

Define custom content types with fields and validation:

```php
'content_types' => [
    'product' => [
        'label' => 'Products',
        'fields' => [
            ['name' => 'title', 'type' => 'text', 'required' => true],
            ['name' => 'slug', 'type' => 'slug', 'from' => 'title'],
            ['name' => 'price', 'type' => 'number'],
            ['name' => 'body', 'type' => 'richtext'],
        ],
    ],
],
```

## API

```bash
# List types
GET /api/cms/types

# Browse
GET /api/cms/product

# Read
GET /api/cms/product/1

# Create
POST /api/cms/product
{
  "title": "Widget",
  "slug": "widget",
  "price": 29.99
}

# Update
PUT /api/cms/product/1
{
  "price": 24.99
}

# Delete
DELETE /api/cms/product/1
```

## CLI

```bash
php bin/cms types
php bin/cms make:type product
php bin/cms api:token my-app
php bin/cms search:reindex
php bin/cms taxonomy:list category
```

## Links

- [GitHub](https://github.com/tavp-stack/tavp-cms)
- [Gitea](https://git.glotama.com/tavp-stack/tavp-cms)
- [CMS Feature Docs](/features/cms)
