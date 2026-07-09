<?php

declare(strict_types=1);

/**
 * TAVP Stack — CLI Reference
 */

echo <<<'EOF'
# CLI Reference

## Project Management

### tavp new

Create a new TAVP project.

```bash
tavp new my-project
tavp new my-project --db=mysql --adapter=docker
```

Options:
- `--db=` — Database driver (mysql, postgresql, sqlite)
- `--adapter=` — Environment adapter (docker, devcontainer, laragon, xampp, wamp, ddev)

### tavp serve

Start the development server.

```bash
tavp serve
tavp serve --port=9000
```

## Code Generation

### tavp make:model

Generate a new Eloquent-style model.

```bash
tavp make:model Post
tavp make:model Post --migration
tavp make:model Post --controller
tavp make:model Post --migration --controller
```

### tavp make:controller

Generate a new controller.

```bash
tavp make:controller PostController
tavp make:controller PostController --resource
```

### tavp make:migration

Generate a new migration file.

```bash
tavp make:migration create_posts_table
tavp make:migration add_category_to_posts
```

### tavp make:view

Generate a new Volt template.

```bash
tavp make:view posts/index
tavp make:view posts/show
```

## Database

### tavp migrate

Run all pending migrations.

```bash
tavp migrate
tavp migrate --fresh      # Drop all tables and re-run
tavp migrate --rollback   # Rollback last batch
tavp migrate --status     # Show migration status
```

### tavp db:seed

Run database seeders.

```bash
tavp db:seed
tavp db:seed --class=AdminSeeder
```

## Environment

### tavp env:switch

Switch between environments.

```bash
tavp env:switch local
tavp env:switch production
```

### tavp env:add

Add a new environment.

```bash
tavp env:add staging
```

### tavp key:generate

Generate application key.

```bash
tavp key:generate
```

## Application

### tavp up

Bring the application online.

```bash
tavp up
```

### tavp down

Take the application offline.

```bash
tavp down
tavp down --message="Maintenance"
```

## Deployment

### tavp deploy

Deploy to a remote server.

```bash
tavp deploy --adapter=hestiacp --domain=example.com
tavp deploy --adapter=vps --host=192.168.1.100
tavp deploy --adapter=docker
```

### tavp push

Push code to Git remote.

```bash
tavp push
tavp push origin main
```

### tavp pull

Pull code from Git remote.

```bash
tavp pull
tavp pull origin main
```

## Git

### tavp git:status

Show Git repository status.

```bash
tavp git:status
```

### tavp git:remote:add

Add a Git remote.

```bash
tavp git:remote:add origin https://git.example.com/repo.git
```
EOF;
