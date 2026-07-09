# Installation

## Requirements

- PHP 8.3+
- [Phalcon 5.16+](https://phalconphp.com) (install with `tavp phalcon:install`)
- Node.js 18+
- Composer 2.x

## Install TAVP CLI

```bash
composer global require tavp/cli
```

## Create New Project

```bash
tavp new my-app
cd my-app
```

Or using Composer directly:

```bash
composer create-project tavp/core my-app
cd my-app
```

## Install Dependencies

```bash
# PHP dependencies
composer install

# Frontend dependencies
npm install
```

## Configure Environment

```bash
cp .env.example .env
tavp key:generate
```

## Configure Database

Edit `.env`:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tavp
DB_USERNAME=root
DB_PASSWORD=secret
```

## Run Migrations

```bash
tavp migrate
```

## Start Development Server

```bash
tavp serve
```

Open [http://localhost:8000](http://localhost:8000)

## Install Phalcon (if not installed)

```bash
tavp phalcon:install
```

## Next

- [Quick Start](/en/guide/quick-start)
- [Project Structure](/en/guide/project-structure)
