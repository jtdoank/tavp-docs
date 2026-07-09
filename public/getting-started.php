<?php

declare(strict_types=1);

/**
 * TAVP Stack — Getting Started Guide
 *
 * This document walks you through setting up a new TAVP project from scratch.
 */

echo <<<'EOF'
# Getting Started with TAVP Stack

## Prerequisites

- PHP 8.3+ with Phalcon 5.x extension
- Node.js 18+ and npm
- Composer
- Git

## Installation

### Using Composer (Recommended)

```bash
composer create-project tavp/core my-project
cd my-project
```

### Using Git Clone

```bash
git clone https://git.glotama.com/tavp-stack/tavp-core.git my-project
cd my-project
composer install
```

## Development Setup

### 1. Start the development server

```bash
tavp serve
```

This starts the built-in PHP server at http://localhost:8000.

### 2. Install frontend dependencies

```bash
npm install
npm run dev
```

### 3. Setup environment

```bash
cp .env.example .env
tavp key:generate
```

### 4. Run migrations

```bash
tavp migrate
```

## Project Structure

```
my-project/
├── app/
│   ├── Console/        # CLI commands
│   ├── Controllers/    # HTTP controllers
│   ├── Database/       # Models and migrations
│   ├── Http/           # Middleware
│   ├── Services/       # Business logic
│   └── Support/        # Helpers and utilities
├── config/             # Configuration files
├── database/
│   ├── migrations/     # Database migrations
│   └── seeds/          # Database seeders
├── public/             # Public web root
├── resources/
│   ├── js/             # JavaScript files
│   ├── css/            # CSS files
│   └── views/          # Volt templates
├── routes/             # Route definitions
├── storage/            # Cache, logs, sessions
├── bin/                # CLI entry point
└── composer.json       # Dependencies
```

## Creating Your First Feature

### 1. Create a model

```bash
tavp make:model Post
```

### 2. Create a migration

```bash
tavp make:migration create_posts_table
```

### 3. Create a controller

```bash
tavp make:controller PostController
```

### 4. Create a view

```bash
tavp make:view posts/index
```

### 5. Add routes

Edit `routes/web.php`:

```php
$router->addGet('/posts', [PostController::class, 'index']);
$router->addGet('/posts/{id:int}', [PostController::class, 'show']);
```

## Next Steps

- Read the [CLI Reference](cli-reference.html) for all available commands
- Read the [Environment Guide](environment.html) for environment setup
- Read the [Routing Guide](routing.html) for advanced routing
EOF;
