---
title: SEO
---

# Modul SEO

Toolkit SEO on-page dan teknis lengkap untuk TAVP CMS. Mengelola meta tag, structured data, sitemap, redirect, dan analisis konten.

## Ikhtisar

Modul SEO menyediakan semua yang dibutuhkan untuk optimasi mesin pencari di level CMS:

- **Meta Tags** — Title, description, keywords per record konten
- **Open Graph** — Optimasi berbagi di Facebook/LinkedIn
- **Twitter Cards** — Optimasi berbagi di Twitter
- **JSON-LD Schemas** — Structured data untuk rich snippets
- **XML Sitemap** — Dibuat otomatis, otomatis di-ping ke mesin pencari
- **Robots.txt** — Dibuat dinamis dari konfigurasi
- **RSS Feed** — Sindikasi konten
- **Redirect Manager** — Redirect 301/302 dengan pelacakan hit
- **SEO Analyzer** — Skor konten beserta saran
- **Social Sharing** — Tombol bagikan ke platform utama
- **Webmaster Tools** — Verifikasi Google/Bing
- **Google Analytics** — Suntik kode pelacakan otomatis
- **Outbound Link Tracking** — Deteksi tautan rusak
- **AI Meta Generator** — Generate meta otomatis dari konten

## Quick Start

SEO aktif secara default di TAVP CMS. Tidak perlu setup tambahan.

```bash
# Buka dashboard SEO
open https://yoursite.com/admin/seo

# Lihat sitemap
open https://yoursite.com/sitemap.xml

# Lihat robots.txt
open https://yoursite.com/robots.txt

# Lihat RSS feed
open https://yoursite.com/feed
```

## Konfigurasi

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

Ikhtisar kesehatan SEO:
- Total record meta SEO
- Rata-rata skor SEO
- Jumlah redirect aktif
- Jumlah tautan rusak
- Tautan sitemap dan robots.txt
- Tombol ping mesin pencari

### Settings (`/admin/seo/settings`)

Atur default SEO global:
- Suffix dan separator title meta
- Gambar OG default
- Twitter handle
- Kode verifikasi Google/Bing
- ID Google Analytics/Tag Manager
- Data schema organisasi

### Redirects (`/admin/seo/redirects`)

Kelola redirect URL:
- Tambah redirect baru (dari URL, ke URL, kode status)
- Lihat daftar redirect beserta jumlah hit
- Hapus redirect
- Dukungan 301 (permanen) dan 302 (sementara)

### Analyzer (`/admin/seo/analyzer`)

Analisis kualitas SEO konten:
- Skor keseluruhan (0-100)
- Daftar error (masalah kritis)
- Daftar warning (perlu perbaikan)
- Daftar saran (tips optimasi)
- Preview pencarian Google

## Routes

### Public Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/sitemap.xml` | GET | XML sitemap |
| `/robots.txt` | GET | Robots.txt |
| `/feed` | GET | Feed RSS/Atom |

### Admin Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/admin/seo` | GET | Dashboard SEO |
| `/admin/seo/settings` | GET/POST | Pengaturan SEO |
| `/admin/seo/redirects` | GET/POST | Redirect manager |
| `/admin/seo/redirects/delete` | POST | Hapus redirect |
| `/admin/seo/analyzer` | GET | Analisis konten |
| `/admin/seo/ping` | POST | Ping mesin pencari |

## JSON-LD Schemas

Generator schema membuat structured data untuk rich snippets:

### Article (untuk post)

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

## Skor SEO Analyzer

| Skor | Rating | Warna |
|-------|--------|-------|
| 70-100 | Bagus | Hijau |
| 40-69 | Perlu perbaikan | Kuning |
| 0-39 | Buruk | Merah |

### Pemeriksaan

| Pemeriksaan | Poin | Tipe |
|-------|--------|------|
| Title hilang | -30 | Error |
| Title terlalu pendek/panjang | -10 | Warning |
| Meta description hilang | -20 | Error |
| Meta description terlalu pendek/panjang | -10 | Warning |
| OG title hilang | -5 | Warning |
| OG image hilang | -5 | Saran |
| Canonical URL hilang | -3 | Saran |
| Focus keyword belum diatur | -5 | Saran |
| Tidak ada gambar di konten | -3 | Saran |
| Konten tipis (<300 kata) | -10 | Warning |
| Kepadatan keyword terlalu rendah/tinggi | -5/-10 | Warning |

## Tabel Database

### seo_meta

Menyimpan field SEO per record.

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key |
| `content_type` | varchar | Nama content type |
| `content_id` | bigint | ID record konten |
| `meta_title` | varchar | SEO title |
| `meta_description` | text | SEO description |
| `meta_keywords` | varchar | Keyword dipisah koma |
| `og_title` | varchar | Open Graph title |
| `og_description` | text | Open Graph description |
| `og_image` | varchar | URL gambar Open Graph |
| `og_type` | varchar | Tipe Open Graph |
| `twitter_title` | varchar | Twitter Card title |
| `twitter_description` | text | Twitter Card description |
| `twitter_image` | varchar | URL gambar Twitter Card |
| `twitter_card` | varchar | Tipe Twitter Card |
| `canonical_url` | varchar | Canonical URL |
| `robots` | varchar | Direktif meta robots |
| `schema_type` | varchar | Tipe schema JSON-LD |
| `schema_data` | text | Custom schema JSON |
| `seo_score` | int | Skor SEO (0-100) |
| `focus_keyword` | varchar | Keyword target |

### redirects

Menyimpan aturan redirect URL.

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key |
| `from_url` | varchar | URL sumber |
| `to_url` | varchar | URL tujuan |
| `status_code` | int | Status HTTP (301/302) |
| `is_active` | boolean | Flag aktif |
| `is_regex` | boolean | Flag pola regex |
| `hits` | int | Hit counter |
| `last_hit_at` | timestamp | Waktu hit terakhir |

### outbound_links

Melacak tautan keluar untuk deteksi tautan rusak.

| Column | Type | Description |
|--------|------|-------------|
| `id` | bigint | Primary key |
| `content_type` | varchar | Content type sumber |
| `content_id` | bigint | ID konten sumber |
| `url` | varchar | URL keluar |
| `status_code` | int | Kode status HTTP |
| `is_broken` | boolean | Flag rusak |
| `last_checked_at` | timestamp | Waktu cek terakhir |
