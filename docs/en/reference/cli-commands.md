---
title: "CLI Commands"
description: "Reference for all TAVP CLI commands: project, code generation, migration, and runtimes."
---

# CLI Commands

Reference for all TAVP CLI commands.

## Project

| Command | Description |
|---------|-------------|
| `tavp new <name>` | Create new project |
| `tavp serve` | Start dev server |
| `tavp key:generate` | Generate APP_KEY & JWT_SECRET |
| `tavp phalcon:install` | Install Phalcon C-extension |

## Code Generation

Every `make:*` writes files to the **project root** (the folder where you run `tavp`), using the `App\` namespace per the project's PSR-4 autoload. It never writes to `vendor/`.

| Command | Generates |
|---------|-----------|
| `tavp make:model <Name>` | `app/Models/<Name>.php` (`--migration`, `--resource`) |
| `tavp make:controller <Name>` | `app/Controllers/<Name>Controller.php` (`--api`, `--resource`) |
| `tavp make:migration <Name>` | `database/migrations/<timestamp>_<name>.php` (`--table=name`) |
| `tavp make:view <name>` | `resources/views/<name>.volt` (`--layout=`) |
| `tavp make:seeder <Name>` | `app/Database/Seeders/<Name>Seeder.php` |
| `tavp make:middleware <Name>` | `app/Middleware/<Name>Middleware.php` |
| `tavp make:event <Name>` | `app/Events/<Name>Event.php` |
| `tavp make:listener <Name>` | `app/Listeners/<Name>Listener.php` (`--event=`) |
| `tavp make:module <name>` | `modules/<name>/` (module.json + provider + routes) |
| `tavp make:scaffold <Name>` | model + migration + resource controller + views + route |

Full scaffold example:

```bash
tavp make:scaffold Product
# -> app/Models/Product.php
# -> database/migrations/..._create_products_table.php
# -> app/Controllers/ProductController.php
# -> resources/views/products/{index,create,edit}.volt
# -> route: $router->resource('products', \App\Controllers\ProductController::class);
```

## Migration

| Command | Description |
|---------|-------------|
| `tavp migrate` | Run pending migrations |
| `tavp migrate --step=N` | Run the next N migrations |
| `tavp migrate --rollback` | Roll back the last batch |
| `tavp migrate --fresh` | Drop all tables, then re-migrate |
| `tavp migrate --status` | Show migration status |
| `tavp migrate --seed` | Migrate then run seeders |
| `tavp migrate:status` | Show which migrations have run / are pending |

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

## Links

- [Configuration](/en/reference/configuration)
