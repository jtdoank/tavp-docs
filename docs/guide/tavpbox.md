# TAVPBox — Local Development Environment

TAVPBox adalah local development environment seperti [Lando](https://lando.dev), tapi pakai [Podman](https://podman.io) (bukan Docker). Hasilnya: jauh lebih irit RAM, HTTPS otomatis, dan **mendukung migrasi dari Lando**.

```
1 laptop = banyak "VPS mini". Tiap project = 1 container terisolasi.
```

| | Lando (Docker) | TAVPBox (Podman) |
|---|---|---|
| RAM / 20 project | ~3.2 GB | ~1.5 GB |
| HTTPS | *.lndo.site (auto) | *.tavp.my.id (auto) |
| Auto domain | *.lndo.site | *.tavp.my.id |
| Mail per-project | mail.*.lndo.site | mailpit.*.tavp.my.id |
| Multi-stack | ✓ | ✓ (TAVP/Laravel/Python/Node/Go/...) |
| Lando migration | — | ✓ (full .lando.yml support) |
| Web Panel | ✓ | ✓ (built-in) |

---

## Apa itu TAVPBox?

TAVPBox adalah CLI tool yang bisa:

1. **Manage local development containers** — create, start, stop, destroy
2. **Auto-routing domain** — `*.tavp.my.id` → container
3. **HTTPS otomatis** — wildcard cert dari Let's Encrypt
4. **Migrasi dari Lando** — parse `.lando.yml` otomatis
5. **Web panel** — manage semua project dari browser
6. **Dynamic tooling** — `tavpbox artisan migrate`, `tavpbox composer install`

### Arsitektur

```
tavpbox (Go binary)
├── CLI (cobra)
│   ├── init, create, start, stop, restart, destroy, rebuild
│   ├── ssh, list, info, logs
│   ├── tooling (dynamic subcommands)
│   ├── panel (web UI)
│   ├── proxy (reverse proxy management)
│   └── config (configuration)
├── Podman client (exec wrapper)
├── Embedded Go proxy
│   ├── HTTP :80
│   ├── HTTPS :443
│   └── Dynamic routes (routes.json)
├── Wildcard cert (*.tavp.my.id) embedded
├── Service library (15 services)
├── Recipe library (7 recipes)
├── Lando parser (.lando.yml)
└── API server (REST + embedded panel)
```

---

## Prasyarat

- **Windows**: Windows 10/11 64-bit, Podman Desktop
- **macOS**: Homebrew, Podman
- **Linux**: Podman
- Tidak perlu paham nginx/docker/LXC

---

## 1. Install

### Option 1: Download Binary (Recommended)

Download dari [GitHub Releases](https://github.com/tavp-stack/tavpbox/releases):

| Platform | File |
|----------|------|
| Windows | `tavpbox-windows-amd64.exe` |
| macOS (Intel) | `tavpbox-darwin-amd64` |
| macOS (M1/M2) | `tavpbox-darwin-arm64` |
| Linux (x64) | `tavpbox-linux-amd64` |
| Linux (ARM) | `tavpbox-linux-arm64` |

Add to PATH:

```powershell
# Windows
move tavpbox.exe C:\Users\<you>\AppData\Local\tavpbox\

# macOS/Linux
sudo mv tavpbox /usr/local/bin/
```

### Option 2: Build from Source

```bash
git clone https://github.com/tavp-stack/tavpbox.git
cd tavpbox
go build -o tavpbox .
```

### Option 3: Go Install

```bash
go install github.com/tavp-stack/tavpbox@latest
```

---

## 2. Project Baru (`tavpbox init`)

```powershell
cd ~/projects/my-app
tavpbox init
```

TUI akan muncul:

```
Project name [my-app]:
Recipe:
  > [1] tavp
    [2] laravel
    [3] php
    [4] node
    [5] go
    [6] python
    [7] blank
Services (comma/space separated):
  Available: mariadb, mysql, postgres, mongodb, redis, memcached, mailpit, mailhog, phpmyadmin, adminer, elasticsearch, rabbitmq
  Default [mariadb redis mailpit]:
Webroot [public]:
RAM limit [512MB]:
CPU cores [1]:
```

Setelah init, file `.tavpbox.yml` dibuat:

```yaml
name: my-app
recipe: tavp
webroot: public
services:
  mariadb:
    enabled: true
  redis:
    enabled: true
  mailpit:
    enabled: true
tooling:
  artisan:
    cmd: php artisan
  composer:
    cmd: composer
  npm:
    cmd: npm
  npx:
    cmd: npx
  php:
    cmd: php
  test:
    cmd: php artisan test
ram: 512MB
cpu: 1
```

---

## 4. Create Container (`tavpbox create`)

```powershell
tavpbox create
```

Yang dilakukan:
1. Pull image (Ubuntu 24.04, Node 20, dll)
2. Create container dengan volume mount
3. Start container
4. Install recipe (nginx + PHP + composer, dll)
5. Install services (mariadb, redis, mailpit)
6. Configure reverse proxy
7. Generate HTTPS cert

Output:
```
Creating box 'my-app' (tavp recipe)...
  [1/4] Pulling image docker.io/library/ubuntu:24.04...
  [2/4] Creating container...
  [3/4] Starting container...
  [4/4] Installing tavp recipe...
  Installing mariadb...
  Installing redis...
  Installing mailpit...
  Configuring Traefik route...
  ✓ Traefik route configured

✓ Box 'my-app' created and running!
  Direct:  http://localhost:35941
  Domain:  http://my-app.tavp.my.id
  HTTPS:   https://my-app.tavp.my.id
  IP:      10.89.0.27
  SSH:     tavpbox ssh
```

---

## 5. Akses Project

### URLs

| Service | URL |
|---------|-----|
| App | `https://my-app.tavp.my.id` |
| Mailpit | `https://mailpit.my-app.tavp.my.id` |
| phpMyAdmin | `https://phpmyadmin.my-app.tavp.my.id` |
| Direct | `http://localhost:<port>` |

### Database Credentials

```powershell
tavpbox info
```

```
 Database:
   Host:     localhost
   User:     app
   Password: app
   Database: app
```

---

## 6. Perintah Harian

### Lifecycle

```powershell
tavpbox start              # Start container
tavpbox stop               # Stop container (RAM balik 0)
tavpbox restart            # Restart container
tavpbox destroy            # Hapus container permanen
tavpbox rebuild            # Recreate container (data tetap)
```

### Monitoring

```powershell
tavpbox list               # Semua container + status
tavpbox info               # Detail project (URLs, DB creds)
tavpbox logs               # Lihat logs container
```

### SSH

```powershell
tavpbox ssh                # Masuk terminal container
tavpbox ssh php artisan    # Jalankan command di container
```

### Tooling

```powershell
tavpbox tooling            # Lihat semua tooling commands
tavpbox artisan migrate    # php artisan migrate
tavpbox composer install   # composer install
tavpbox npm run dev        # npm run dev
tavpbox test               # php artisan test
tavpbox php --version      # php --version
```

---

## 7. Migrasi dari Lando

TAVPBox mendukung penuh `.lando.yml`. Cukup jalankan `tavpbox create` di folder yang ada `.lando.yml`.

### Yang di-support:

- ✅ `recipe` (lamp, laravel, dll)
- ✅ `services` (mariadb, mysql, redis, mailpit, phpmyadmin, dll)
- ✅ `tooling` (artisan, composer, npm, mysql, dll)
- ✅ `proxy` (*.lndo.site → *.tavp.my.id)
- ✅ `events.post-start` (build/run commands)
- ✅ `services.*.overrides.environment` (env vars)
- ✅ `services.*.creds` (DB credentials)

### Contoh migrasi:

```powershell
# Project Lando
cd ~/kos-kosan.id
cat .lando.yml
# name: koskosan
# recipe: lamp
# services:
#   appserver: { type: php:8.4 }
#   database: { type: mysql:8.0, creds: { user: koskosan, password: koskosan, database: koskosan } }
#   redis: { type: redis:7 }
#   mailpit: { type: mailpit }
# proxy:
#   appserver: [koskosan.lndo.site]
#   koskosan-mailpit: [mailpit.koskosan.lndo.site]

# Migrasi ke TAVPBox
tavpbox info
# Recipe:    laravel
# Services:  mariadb, redis, mailpit
# Domain:    http://koskosan.tavp.my.id
# Database:  koskosan/koskosan/koskosan

tavpbox create
# https://koskosan.tavp.my.id → jalan!
```

### Mapping Lando → TAVPBox

| Lando | TAVPBox |
|-------|---------|
| `*.lndo.site` | `*.tavp.my.id` |
| `mail.*.lndo.site` | `mailpit.*.tavp.my.id` |
| `pma.*.lndo.site` | `phpmyadmin.*.tavp.my.id` |
| `services.appserver.type: php:8.4` | `recipe: laravel` |
| `services.database.type: mariadb:11.6` | `services.mariadb.enabled: true` |
| `services.redis` | `services.redis.enabled: true` |
| `services.mailpit` | `services.mailpit.enabled: true` |
| `tooling.artisan` | `tooling.artisan.cmd: php artisan` |
| `services.*.creds` | `env.DB_*` |

---

## 8. Recipes

| Recipe | Description | Image | Default Services |
|--------|-------------|-------|------------------|
| `tavp` | TAVP Stack (PHP 8.3 + Nginx + Node 20) | ubuntu:24.04 | mariadb, redis, mailpit |
| `laravel` | Laravel | ubuntu:24.04 | mariadb, redis, mailpit |
| `php` | Generic PHP | ubuntu:24.04 | mariadb, redis |
| `node` | Node.js | node:20-alpine | redis |
| `go` | Go | golang:1.22-alpine | — |
| `python` | Python | python:3.12-slim | redis |
| `blank` | Empty container | ubuntu:24.04 | — |

### Recipe Detail

#### TAVP Stack (`tavp`)
- PHP 8.3 + FPM
- Nginx
- Node.js 20
- Composer
- Phalcon (optional)
- Webroot: `public`

#### Laravel (`laravel`)
- PHP 8.3 + FPM
- Nginx
- Node.js 20
- Composer
- Webroot: `public`

#### PHP (`php`)
- PHP 8.3 + FPM
- Nginx
- Composer
- Webroot: `public`

#### Node.js (`node`)
- Node.js 20
- Nginx (reverse proxy ke port 3000)
- Yarn, pnpm
- Webroot: `.`

#### Go (`go`)
- Go 1.22
- Nginx (reverse proxy ke port 8080)
- Webroot: `.`

#### Python (`python`)
- Python 3.12
- Nginx (reverse proxy ke port 8000)
- Webroot: `.`

#### Blank (`blank`)
- Ubuntu 24.04
- Nginx
- Webroot: `.`

---

## 9. Services

| Service | Category | Description | Port |
|---------|----------|-------------|------|
| mariadb | database | MySQL-compatible RDBMS | 3306 |
| mysql | database | MySQL | 3306 |
| postgres | database | PostgreSQL | 5432 |
| mongodb | database | NoSQL document DB | 27017 |
| redis | cache | In-memory cache | 6379 |
| memcached | cache | Distributed cache | 11211 |
| mailpit | mail | Email testing (SMTP + web UI) | 8025, 1025 |
| mailhog | mail | Email testing | 8025, 1025 |
| phpmyadmin | admin | Database admin UI | 8080 |
| adminer | admin | Lightweight DB manager | 8080 |
| elasticsearch | search | Search engine | 9200 |
| rabbitmq | queue | Message broker | 5672, 15672 |
| beanstalkd | queue | Work queue | 11300 |
| apache | webserver | Apache HTTP server | 80 |
| varnish | cache | HTTP reverse proxy cache | 80 |

### Service Detail

#### MariaDB (`mariadb`)
```yaml
services:
  mariadb:
    enabled: true
```
- Default DB: `app`
- Default User: `app`
- Default Password: `app`

#### Redis (`redis`)
```yaml
services:
  redis:
    enabled: true
```
- Default Port: 6379

#### Mailpit (`mailpit`)
```yaml
services:
  mailpit:
    enabled: true
```
- Web UI: `https://mailpit.<project>.tavp.my.id`
- SMTP: port 1025

#### phpMyAdmin (`phpmyadmin`)
```yaml
services:
  phpmyadmin:
    enabled: true
```
- Web UI: `https://phpmyadmin.<project>.tavp.my.id`

---

## 10. Tooling

Tooling commands run inside the container. Define them in `.tavpbox.yml`:

```yaml
tooling:
  artisan:
    cmd: php artisan
  composer:
    cmd: composer
  npm:
    cmd: npm
  npx:
    cmd: npx
  php:
    cmd: php
  test:
    cmd: php artisan test
  mysql:
    cmd: mysql -u app -papp app
```

Use them directly:

```powershell
tavpbox artisan migrate
tavpbox composer install
tavpbox npm run dev
tavpbox test
tavpbox php --version
tavpbox mysql -u app -papp app
```

### Default Tooling per Recipe

| Recipe | Tooling |
|--------|---------|
| tavp/laravel | artisan, composer, npm, npx, php, test |
| php | composer, php, test |
| node | npm, npx, yarn, pnpm, node |
| go | go |
| python | python, pip, pytest |

---

## 11. HTTPS

HTTPS otomatis. TAVPBox sudah include wildcard cert `*.tavp.my.id` yang valid. Developer gak perlu setup apa-apa.

```powershell
tavpbox create
# https://myproject.tavp.my.id → langsung jalan
```

Cert wildcard di-embed di binary. Browser auto-trust. Auto-renew via GitHub Actions setiap minggu.

---

## 12. Pre-built Images

TAVPBox pakai pre-built images untuk performa terbaik. Semua service udah terinstall di image, jadi `tavpbox create` instant.

### Official Images

| Image | Recipe | Services |
|-------|--------|----------|
| `ghcr.io/tavp-stack/tavpbox-php` | tavp, laravel, php | Nginx, PHP 8.2, MariaDB, Redis, Mailpit, Node.js, Composer, Phalcon |
| `ghcr.io/tavp-stack/tavpbox-node` | node | Nginx, Node.js 20 |
| `ghcr.io/tavp-stack/tavpbox-go` | go | Nginx, Go 1.22 |
| `ghcr.io/tavp-stack/tavpbox-python` | python | Nginx, Python 3.12 |

### Custom Images

Developer bisa build custom image dari container yang lagi jalan:

```powershell
# Install custom packages di container
tavpbox ssh
apt-get install -y php-imagick ffmpeg
exit

# Build image
tavpbox image build --name my-php-custom

# Push ke registry
tavpbox image push ghcr.io/myuser/my-php-custom:latest

# Pakai di .tavpbox.yml
echo "image: ghcr.io/myuser/my-php-custom:latest" >> .tavpbox.yml
tavpbox create  # instant!
```

### Image Commands

| Command | Description |
|---------|-------------|
| `tavpbox image build` | Build custom image dari container |
| `tavpbox image push <image>` | Push image ke registry |
| `tavpbox image pull <image>` | Pull image dari registry |
| `tavpbox image list` | List local images |

---

## 13. Web Panel

```powershell
tavpbox panel
# Opens http://localhost:8080
```

### Features

- **Dashboard** — semua project dengan status
- **Create Project** — wizard buat project baru
- **Project Detail** — logs, URLs, DB credentials
- **Service Management** — start/stop/restart
- **Recipe Browser** — lihat semua recipes
- **Service Browser** — lihat semua services

### Custom Port

```powershell
tavpbox panel -p 3000
```

### Stop Panel

```powershell
tavpbox panel:stop
```

---

## 13. Proxy

TAVPBox punya embedded reverse proxy (HTTP :80 + HTTPS :443).

### Commands

```powershell
tavpbox proxy:start     # Start proxy
tavpbox proxy:stop      # Stop proxy
tavpbox proxy:status    # Status + routes
```

### Auto-start

Proxy auto-start saat `tavpbox create`.

### Routes

Proxy routes di `~/.tavpbox/proxy/routes.json`:

```json
[
  {
    "domain": "my-app.tavp.my.id",
    "ip": "127.0.0.1",
    "port": 35941
  },
  {
    "domain": "mailpit.my-app.tavp.my.id",
    "ip": "127.0.0.1",
    "port": 35219
  }
]
```

---

## 14. Config

### Global Config (`~/.tavpbox/config.yml`)

```powershell
tavpbox config list
```

```
  domain_suffix:     tavp.my.id
  default_ram:       512MB
  default_cpu:       1
  default_image:     docker.io/library/ubuntu:24.04
  panel_port:        8080
```

### Set Config

```powershell
tavpbox config set domain_suffix tavp.my.id
tavpbox config set default_ram 1024MB
```

### Get Config

```powershell
tavpbox config get domain_suffix
```

---

## 15. Multi-Platform

| Platform | Architecture | Binary |
|----------|-------------|--------|
| Windows | amd64 | `tavpbox-windows-amd64.exe` |
| macOS | amd64 | `tavpbox-darwin-amd64` |
| macOS | arm64 (M1/M2) | `tavpbox-darwin-arm64` |
| Linux | amd64 | `tavpbox-linux-amd64` |
| Linux | arm64 | `tavpbox-linux-arm64` |

### Cross-compile

```bash
make cross
# Output: dist/tavpbox-{os}-{arch}
```

---

## 16. Architecture

```
tavpbox (Go binary)
├── CLI (cobra)
│   ├── init, create, start, stop, restart, destroy, rebuild
│   ├── ssh, list, info, logs
│   ├── tooling (dynamic subcommands)
│   ├── panel (web UI)
│   ├── proxy (reverse proxy management)
│   └── config (configuration)
├── Podman client (exec wrapper)
│   ├── Create, Start, Stop, Restart, Remove
│   ├── Exec, ExecInteractive
│   ├── GetIP, GetHostPort
│   ├── List, Inspect, Logs
│   └── NetworkCreate, NetworkConnect
├── Embedded Go proxy
│   ├── HTTP :80
│   ├── HTTPS :443
│   ├── Dynamic routes (routes.json)
│   └── httputil.ReverseProxy
├── Wildcard cert (*.tavp.my.id) embedded
├── Service library (15 services)
│   ├── Database: mariadb, mysql, postgres, mongodb
│   ├── Cache: redis, memcached, varnish
│   ├── Mail: mailpit, mailhog
│   ├── Admin: phpmyadmin, adminer
│   ├── Search: elasticsearch
│   ├── Queue: rabbitmq, beanstalkd
│   └── Webserver: apache
├── Recipe library (7 recipes)
│   ├── tavp, laravel, php
│   ├── node, go, python
│   └── blank
├── Lando parser (.lando.yml)
│   ├── Service mapper
│   ├── Tooling mapper
│   ├── Environment mapper
│   ├── Proxy mapper
│   └── Build/run executor
├── Plugin engine (~/.tavpbox/plugins/)
└── API server (REST + embedded panel)
    ├── GET /api/health
    ├── GET /api/projects
    ├── GET /api/projects/{name}
    ├── POST /api/projects
    ├── POST /api/projects/{name}/start
    ├── POST /api/projects/{name}/stop
    ├── POST /api/projects/{name}/restart
    ├── DELETE /api/projects/{name}
    ├── GET /api/projects/{name}/logs
    ├── GET /api/recipes
    └── GET /api/services
```

---

## 17. Troubleshooting

### Podman not found

Install Podman Desktop: https://podman-desktop.io

```powershell
# Windows
winget install RedHat.PodmanDesktop

# macOS
brew install podman

# Linux
sudo apt install podman
```

### Container already exists

```powershell
tavpbox destroy
tavpbox create
```

### Port already in use

```powershell
tavpbox proxy:stop
tavpbox proxy:start
```

### Domain not resolving

```powershell
# Cek DNS
ping myproject.tavp.my.id

# Cek proxy
tavpbox proxy:status
```

### Container won't start

```powershell
tavpbox logs
# Cek error di logs
```

### Lando migration issues

```powershell
# Cek config
tavpbox info

# Rebuild
tavpbox rebuild
```

---

## 18. FAQ

### TAVPBox vs Lando?

TAVPBox pakai Podman (bukan Docker), lebih irit RAM, dan punya web panel. Lando pakai Docker.

### TAVPBox vs Docker?

TAVPBox pakai Podman (rootless, daemonless), lebih ringan, dan punya auto-domain + HTTPS.

### Bisa pakai Docker?

Belum. TAVPBox pakai Podman. Docker support coming soon.

### Bisa di Windows?

Ya. Pakai Podman Desktop.

### Bisa di macOS?

Ya. Pakai Podman (brew install podman).

### Bisa di Linux?

Ya. Pakai Podman (apt install podman).

### HTTPS gratis?

Ya. Wildcard cert `*.tavp.my.id` di-embed di binary. Developer gak perlu setup apa-apa.

### Bisa migrasi dari Lando?

Ya. Cukup jalankan `tavpbox create` di folder yang ada `.lando.yml`.

### Bisa pakai domain sendiri?

Ya. Set `domain_suffix` di config:

```powershell
tavpbox config set domain_suffix mydomain.com
```

---

## 19. Links

- **GitHub**: https://github.com/tavp-stack/tavpbox
- **Gitea**: https://git.glotama.com/tavp-stack/tavp-box
- **Issues**: https://github.com/tavp-stack/tavpbox/issues
- **Docs**: https://docs.tavp.web.id/guide/tavpbox
- **Releases**: https://github.com/tavp-stack/tavpbox/releases

---

## License

MIT
#   U p d a t e d   0 7 / 1 5 / 2 0 2 6   0 6 : 5 9 : 2 6  
 