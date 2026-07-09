# CLI Commands

Reference for all TAVP CLI commands.

## Project

| Command | Description |
|---------|-------------|
| `tavp new <name>` | Create new project |
| `tavp serve` | Start dev server |
| `tavp migrate` | Run migrations |
| `tavp migrate:rollback` | Rollback migration |
| `tavp key:generate` | Generate app key |
| `tavp cache:clear` | Clear cache |
| `tavp route:list` | List all routes |

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
