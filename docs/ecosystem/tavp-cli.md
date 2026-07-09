# tavp-cli

Command line tools untuk TAVP.

## Install

```bash
composer global require tavp/cli
```

## Commands

### Project

| Command | Description |
|---------|-------------|
| `tavp new <name>` | Buat project baru |
| `tavp serve` | Start development server |
| `tavp optimize` | Cache config, routes, views |

### Make

| Command | Description |
|---------|-------------|
| `tavp make:model <name>` | Buat model |
| `tavp make:controller <name>` | Buat controller |
| `tavp make:migration <name>` | Buat migration |
| `tavp make:scaffold <name>` | Buat model + controller + view + migration |

### Database

| Command | Description |
|---------|-------------|
| `tavp migrate` | Jalankan migrations |
| `tavp migrate:rollback` | Rollback migration |
| `tavp migrate:fresh` | Drop semua table + migrate ulang |

### Auth

| Command | Description |
|---------|-------------|
| `tavp key:generate` | Generate APP_KEY |

### Hosting

| Command | Description |
|---------|-------------|
| `tavp phalcon:install` | Install Phalcon C-extension |
| `tavp deploy` | Deploy ke production |

## Link

- [GitHub](https://github.com/tavp-stack/tavp-cli)
