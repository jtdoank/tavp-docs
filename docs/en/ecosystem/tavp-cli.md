# tavp-cli

Command line tools for TAVP.

## Install

```bash
composer global require tavp/cli
```

## Commands

### Project

| Command | Description |
|---------|-------------|
| `tavp new <name>` | Create new project |
| `tavp serve` | Start development server |
| `tavp optimize` | Cache config, routes, views |

### Make

| Command | Description |
|---------|-------------|
| `tavp make:model <name>` | Create model |
| `tavp make:controller <name>` | Create controller |
| `tavp make:migration <name>` | Create migration |
| `tavp make:scaffold <name>` | Create model + controller + view + migration |

### Database

| Command | Description |
|---------|-------------|
| `tavp migrate` | Run migrations |
| `tavp migrate:rollback` | Rollback migration |
| `tavp migrate:fresh` | Drop all tables + re-migrate |

### Auth

| Command | Description |
|---------|-------------|
| `tavp key:generate` | Generate APP_KEY |

### Hosting

| Command | Description |
|---------|-------------|
| `tavp phalcon:install` | Install Phalcon C-extension |
| `tavp deploy` | Deploy to production |

## Link

- [GitHub](https://github.com/tavp-stack/tavp-cli)
