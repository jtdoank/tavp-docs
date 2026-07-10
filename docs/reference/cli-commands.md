---
title: "CLI Commands"
description: "Referensi semua perintah TAVP CLI: project, code generation, migrasi, dan runtime."
---

# CLI Commands

Referensi semua perintah TAVP CLI.

## Project

| Command | Description |
|---------|-------------|
| `tavp new <name>` | Create new project |
| `tavp serve` | Start dev server |
| `tavp key:generate` | Generate APP_KEY & JWT_SECRET |
| `tavp phalcon:install` | Install Phalcon C-extension |

## Code Generation

Semua `make:*` menulis file ke **project root** (folder tempat kamu jalankan `tavp`), dengan namespace `App\` sesuai autoload PSR-4 project. Tidak pernah menulis ke `vendor/`.

| Command | Menghasilkan |
|---------|--------------|
| `tavp make:model <Name>` | `app/Models/<Name>.php` (`--migration`, `--resource`) |
| `tavp make:controller <Name>` | `app/Controllers/<Name>Controller.php` (`--api`, `--resource`) |
| `tavp make:migration <Name>` | `database/migrations/<timestamp>_<name>.php` (`--table=nama`) |
| `tavp make:view <name>` | `resources/views/<name>.volt` (`--layout=`) |
| `tavp make:seeder <Name>` | `app/Database/Seeders/<Name>Seeder.php` |
| `tavp make:middleware <Name>` | `app/Middleware/<Name>Middleware.php` |
| `tavp make:event <Name>` | `app/Events/<Name>Event.php` |
| `tavp make:listener <Name>` | `app/Listeners/<Name>Listener.php` (`--event=`) |
| `tavp make:module <name>` | `modules/<name>/` (module.json + provider + routes) |
| `tavp make:scaffold <Name>` | model + migration + resource controller + views + route |

Contoh scaffold penuh:

```bash
tavp make:scaffold Product
# → app/Models/Product.php
# → database/migrations/..._create_products_table.php
# → app/Controllers/ProductController.php
# → resources/views/products/{index,create,edit}.volt
# → route: $router->resource('products', \App\Controllers\ProductController::class);
```

## Migration

| Command | Description |
|---------|-------------|
| `tavp migrate` | Jalankan migration yang pending |
| `tavp migrate --step=N` | Jalankan N migration berikutnya |
| `tavp migrate --rollback` | Rollback batch terakhir |
| `tavp migrate --fresh` | Drop semua tabel, lalu migrate ulang |
| `tavp migrate --status` | Tampilkan status migration |
| `tavp migrate --seed` | Migrate lalu jalankan seeder |
| `tavp migrate:status` | Tampilkan migration mana yang sudah jalan / pending |

## Runtimes

| Command | Description |
|---------|-------------|
| `tavp serve` | Start PHP-FPM |
| `tavp coil:start` | Start Coil (Swoole) |
| `tavp coil:stop` | Stop Coil |
| `tavp relay:start` | Start Relay (RoadRunner) |
| `tavp relay:stop` | Stop Relay |
| `tavp queue:work` | Start queue worker |

## AI

| Command | Description |
|---------|-------------|
| `tavp ai:code` | Generate code |
| `tavp ai:fix` | Fix code |
| `tavp ai:explain` | Explain code |
| `tavp ai:chat` | Interactive AI chat |
| `tavp ai:post` | Generate blog post |
| `tavp ai:meta` | Generate meta tags |

## Security

| Command | Description |
|---------|-------------|
| `tavp security:audit` | Run security audit |
| `tavp security:scan` | Scan dependencies |

## Performance

| Command | Description |
|---------|-------------|
| `tavp benchmark` | Run performance benchmarks |
| `tavp api:freeze` | Manage API freeze |

## Link

- [Configuration](/reference/configuration)
