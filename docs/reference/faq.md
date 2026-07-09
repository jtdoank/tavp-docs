---
title: "FAQ"
description: "Pertanyaan yang sering ditanyakan tentang TAVP Stack: instalasi, database, runtime, dan lainnya."
---

# FAQ

Pertanyaan yang sering ditanyakan tentang TAVP Stack.

## General

### Apa itu TAVP?

**T**ailwind CSS + **A**lpine.js + **V**olt + **P**halcon = **TAVP**

TAVP adalah curated tech stack untuk membangun web application PHP yang berperforma tinggi. Bukan framework baru, tapi kombinasi teknologi terbaik yang sudah ada. Phalcon adalah C-extension PHP (compiled, bukan interpreted), sehingga performanya sangat tinggi.

### Apa bedanya TAVP dengan Laravel?

TAVP bukan framework, tapi tech stack. Laravel adalah framework lengkap. TAVP mengambil Phalcon sebagai fondasi (performa tinggi), lalu menambahkan layer ergonomis seperti Laravel (Eloquent-like ORM, migrations, CLI). Hasilnya: kecepatan Phalcon + kenyamanan Laravel.

### Bagaimana cara install TAVP?

```bash
composer create-project tavp/core myapp
cd myapp
tavp serve
```

Buka `http://localhost:8000` di browser.

### Berapa minimum PHP version?

PHP 8.3 atau lebih baru. Phalcon 5.16+ juga diperlukan (install dengan `tavp phalcon:install`).

## Database

### Database apa yang didukung?

MySQL 5.7+, MariaDB 10.3+, dan PostgreSQL 12+.

### Bagaimana cara migrasi database?

```bash
tavp migrate
```

## Runtime

### Apa bedanya ke-4 runtime TAVP?

TAVP mendukung 4 runtime. Semua share application code yang sama — hanya runtime yang berubah.

| Runtime | Kecepatan | Best For |
|---------|-----------|----------|
| PHP-FPM | Standard | Shared hosting, development |
| TAVP Coil (Swoole) | Fastest | High traffic, real-time |
| TAVP Relay (RoadRunner) | Fast | Enterprise, balanced |
| TAVP Weave (PHP Fibers) | Standard | Shared hosting, parallel I/O |

- **PHP-FPM**: Traditional, works everywhere, no extensions needed
- **Coil**: Swoole-based, coroutine, highest performance, but requires VPS
- **Relay**: RoadRunner-based, process isolation, enterprise-grade
- **Weave**: PHP Fibers, zero dependencies, works on shared hosting

### Runtime mana yang recommended?

- **Shared hosting**: PHP-FPM atau Weave
- **VPS production**: Coil (highest performance) atau Relay (balanced)
- **Development**: PHP-FPM

Untuk perbandingan lengkap, lihat [Runtimes Overview](/runtimes/overview).

## Link

- [Runtimes Overview](/runtimes/overview)
- [Installation Guide](/guide/installation)
- [Troubleshooting](/reference/troubleshooting)
