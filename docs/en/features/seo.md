---
title: SEO
---

# SEO Module

Complete on-page and technical SEO toolkit for TAVP CMS. Handles meta tags, structured data, sitemaps, redirects, and content analysis.

## Overview

The SEO module provides everything needed for search engine optimization at the CMS level:

- **Meta Tags** — Title, description, keywords per content record
- **Open Graph** — Facebook/LinkedIn sharing optimization
- **Twitter Cards** — Twitter sharing optimization
- **JSON-LD Schemas** — Structured data for rich snippets
- **XML Sitemap** — Auto-generated, auto-pinged to search engines
- **Robots.txt** — Dynamic generation from config
- **RSS Feed** — Content syndication
- **Redirect Manager** — 301/302 redirects with hit tracking
- **SEO Analyzer** — Content scoring with suggestions
- **Social Sharing** — Share buttons for major platforms
- **Webmaster Tools** — Google/Bing verification
- **Google Analytics** — Auto-inject tracking code
- **Outbound Link Tracking** — Broken link detection
- **AI Meta Generator** — Auto-generate meta from content

## Quick Start

SEO is enabled by default in TAVP CMS. No additional setup required.

```bash
# Access SEO dashboard
open https://yoursite.com/admin/seo

# View sitemap
open https://yoursite.com/sitemap.xml

# View robots.txt
open https://yoursite.com/robots.txt

# View RSS feed
open https://yoursite.com/feed
```

## Configuration

### config/seo.php

```php
return [
    'enabled' => true,

    'meta' => [
        'title_suffix' => ' | My Site',
        'separator' => ' | ',
        'description_max' => 160,
        'title_max' => 60,
    ],

    'sitemap' => [
        'enabled' => true,
        'path' => '/sitemap.xml',
        'max_urls' => 50000,
        'cache_ttl' => 3600,
        'ping_google' => true,
        'ping_bing' => true,
    ],

    'robots' => [
        'enabled' => true,
        'path' => '/robots.txt',
        'allow' => ['/'],
        'disallow' => ['/admin', '/api'],
        'sitemap_url' => '/sitemap.xml',
    ],

    'open_graph' => [
        'enabled' => true,
        'default_image' => '',
        'default_type' => 'website',
    ],

    'twitter' => [
        'enabled' => true,
        'card_type' => 'summary_large_image',
        'site_handle' => '@yoursite',
    ],

    'schemas' => [
        'enabled' => true,
        'types' => [
            'page' => 'WebPage',
            'post' => 'Article',
            'product' => 'Product',
        ],
        'organization' => [
            'name' => 'My Company',
            'logo' => 'https://yoursite.com/logo.png',
            'url' => 'https://yoursite.com',
        ],
    ],

    'rss' => [
        'enabled' => true,
        'path' => '/feed',
        'limit' => 20,
    ],

    'webmaster' => [
        'google_verification' => env('GOOGLE_SITE_VERIFICATION'),
        'bing_verification' => env('BING_SITE_VERIFICATION'),
    ],

    'analytics' => [
        'google_analytics_id' => env('GOOGLE_ANALYTICS_ID'),
    ],

    'redirects' => [
        'enabled' => true,
        'ignore_case' => true,
        'track_hits' => true,
    ],

    'analyzer' => [
        'enabled' => true,
        'min_title_length' => 30,
        'max_title_length' => 60,
        'min_description_length' => 120,
        'max_description_length' => 160,
    ],

    'social_sharing' => [
        'enabled' => true,
        'platforms' => ['twitter', 'facebook', 'linkedin', 'whatsapp', 'telegram'],
    ],
];
```

## Admin UI

### Dashboard (`/admin/seo`)

Overview of SEO health:
- Total SEO meta records
- Average SEO score
- Active redirects count
- Broken links count
- Sitemap and robots.txt links
- Ping search engines button

### Settings (`/admin/seo/settings`)

Configure global SEO defaults:
- Meta title suffix and separator
- Default OG image
- Twitter handle
- Google/Bing verification codes
- Google Analytics/Tag Manager IDs
- Organization schema data

### Redirects (`/admin/seo/redirects`)

Manage URL redirects:
- Add new redirects (from URL, to URL, status code)
- View redirect list with hit counts
- Delete redirects
- Support for 301 (permanent) and 302 (temporary)

### Analyzer (`/admin/seo/analyzer`)

Analyze content SEO quality:
- Overall score (0-100)
- Error list (critical issues)
- Warning list (improvements needed)
- Suggestion list (optimization tips)
- Google search preview

## Routes

### Public Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/sitemap.xml` | GET | XML sitemap |
| `/robots.txt` | GET | Robots.txt |
| `/feed` | GET | RSS/Atom feed |

### Admin Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/admin/seo` | GET | SEO dashboard |
| `/admin/seo/settings` | GET/POST | SEO settings |
| `/admin/seo/redirects` | GET/POST | Redirect manager |
| `/admin/seo/redirects/delete` | POST | Delete redirect |
| `/admin/seo/analyzer` | GET | Content analyzer |
| `/admin/seo/ping` | POST | Ping search engines |

## JSON-LD Schemas

The schema generator creates structured data for rich snippets:

### Article (for posts)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "My Blog Post",
  "description": "Post description",
  "image": "https://yoursite.com/image.jpg",
  "datePublished": "2026-07-11T00:00:00+00:00",
  "dateModified": "2026-07-11T00:00:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Admin"
  }
}
```

### Product

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "My Product",
  "description": "Product description",
  "offers": {
    "@type": "Offer",
    "price": "29.99",
    "priceCurrency": "USD"
  }
}
```

### BreadcrumbList

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://yoursite.com"},
    {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://yoursite.com/blog"}
  ]
}
```

## SEO Analyzer Scoring

| Score | Rating | Color |
|-------|--------|-------|
| 70-100 | Good | Green |
| 40-69 | Needs improvement | Yellow |
| 0-39 | Poor | Red |

### Checks

| Check | Points | Type |
|-------|--------|------|
| Title missing | -30 | Error |
| Title too short/long | -10 | Warning |
| Meta description missing | -20 | Error |
| Meta description too short/long | -10 | Warning |
| OG title missing | -5 | Warning |
| OG image missing | -5 | Suggestion |
| Canonical URL missing | -3 | Suggestion |
| Focus keyword not set | -5 | Suggestion |
| No images in content | -3 | Suggestion |
| Thin content (<300 words) | -10 | Warning |
| Keyword density too low/high | -5/-10 | Warning |

## Database Tables

### seo_meta

Stores per-record SEO fields.

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key |
| `content_type` | varchar | Content type name |
| `content_id` | bigint | Content record ID |
| `meta_title` | varchar | SEO title |
| `meta_description` | text | SEO description |
| `meta_keywords` | varchar | Comma-separated keywords |
| `og_title` | varchar | Open Graph title |
| `og_description` | text | Open Graph description |
| `og_image` | varchar | Open Graph image URL |
| `og_type` | varchar | Open Graph type |
| `twitter_title` | varchar | Twitter Card title |
| `twitter_description` | text | Twitter Card description |
| `twitter_image` | varchar | Twitter Card image URL |
| `twitter_card` | varchar | Twitter Card type |
| `canonical_url` | varchar | Canonical URL |
| `robots` | varchar | Robots meta directive |
| `schema_type` | varchar | JSON-LD schema type |
| `schema_data` | text | Custom schema JSON |
| `seo_score` | int | SEO score (0-100) |
| `focus_keyword` | varchar | Target keyword |

### redirects

Stores URL redirect rules.

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key |
| `from_url` | varchar | Source URL |
| `to_url` | varchar | Target URL |
| `status_code` | int | HTTP status (301/302) |
| `is_active` | boolean | Active flag |
| `is_regex` | boolean | Regex pattern flag |
| `hits` | int | Hit counter |
| `last_hit_at` | timestamp | Last hit time |

### outbound_links

Tracks outbound links for broken link detection.

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key |
| `content_type` | varchar | Source content type |
| `content_id` | bigint | Source content ID |
| `url` | varchar | Outbound URL |
| `status_code` | int | HTTP status code |
| `is_broken` | boolean | Broken flag |
| `last_checked_at` | timestamp | Last check time |
