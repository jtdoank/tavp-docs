# TAVP Stack — Milestone Checklist

> Quick reference untuk semua milestone dan task. Open `milestone-checklist.html` untuk versi interaktif.

## Progress

| Milestone | Name | Tasks | Status |
|---|---|---|---|
| 0.1.0 | Genesis | 125+ | ⬜ 0% |
| 0.2.0 | Tools | 19 | ⬜ 0% |
| 0.3.0 | Ecosystem | 23 | ⬜ 0% |
| 0.4.0 | Polish | 10 | ⬜ 0% |
| 0.5.0 | Coil | 10 | ⬜ 0% |
| 0.6.0 | Relay | 8 | ⬜ 0% |
| 0.7.0 | Intelligence | 7 | ⬜ 0% |
| 0.8.0 | Marketplace | 7 | ⬜ 0% |
| 0.9.0 | Maturity | 9 | ⬜ 0% |
| 1.0.0 | Stable Release | 10 | ⬜ 0% |

---

## 0.1.0 — Genesis

Core + CLI + Env Adapters + Auto-installer + Basic TAVPid + Deploy + Git abstraction.

### Project Setup & Infrastructure (14 tasks)

- [ ] SET-001: Create GitHub organization `tavp`
- [ ] SET-002: Create repo `tavp/core` — main framework repo
- [ ] SET-003: Create repo `tavp/starter` — project scaffolding template
- [ ] SET-004: Setup `composer.json` — PSR-4 autoload, Phalcon 5.x dependency, PHP 8.1+
- [ ] SET-005: Setup `package.json` — Tailwind CSS 3.x, Alpine.js 3.x, Vite 5.x
- [ ] SET-006: Create `.env.example` with all config keys documented
- [ ] SET-007: Setup PHPUnit 10.x with `phpunit.xml`, test directories
- [ ] SET-008: Setup PHP-CS-Fixer with `.php-cs-fixer.php`
- [ ] SET-009: Setup PHPStan at level 6 (increase to 8 by 0.4.0)
- [ ] SET-010: Create `.gitignore`
- [ ] SET-011: Create GitHub Actions CI: tests + PHPStan + CS-Fixer on push
- [ ] SET-012: Create `README.md` with project overview, install instructions, badges
- [ ] SET-013: Create canonical folder structure
- [ ] SET-014: Create `.tavp.json` schema

### Phalcon Bootstrap & Service Container (10 tasks)

- [ ] BOOT-001: Create `Application` class — main entry point
- [ ] BOOT-002: Create `Kernel` class — request lifecycle
- [ ] BOOT-003: Setup DI container — register core services
- [ ] BOOT-004: Create `Config` loader
- [ ] BOOT-005: Create `.env` loader — `env()` helper
- [ ] BOOT-006: Create `public/index.php` entry point
- [ ] BOOT-007: Create `public/.htaccess` — Apache rewrite
- [ ] BOOT-008: Setup environment detection (APP_ENV)
- [ ] BOOT-009: Create storage/ directory structure
- [ ] BOOT-010: Create config files: app.php, database.php, session.php, cache.php

### Routing (9 tasks)

- [ ] RT-001: Create Router — `Route::get()`, `post()`, `put()`, `delete()`, `patch()`
- [ ] RT-002: Route groups: `Route::prefix('admin')->group(fn)`
- [ ] RT-003: Route middleware
- [ ] RT-004: Controller-based routes
- [ ] RT-005: Resource routes
- [ ] RT-006: Named routes
- [ ] RT-007: Route loading: auto-load routes
- [ ] RT-008: Create routes/web.php with default routes
- [ ] RT-009: Unit tests: all routing methods

### Controller System (7 tasks)

- [ ] CTL-001: Create `BaseController` — auto-inject DI
- [ ] CTL-002: Create `Request` wrapper
- [ ] CTL-003: Create `Response` wrapper
- [ ] CTL-004: Auto-resolution: DI auto-resolves controller dependencies
- [ ] CTL-005: Create `ApiController` base
- [ ] CTL-006: Create example `PageController`
- [ ] CTL-007: Unit tests

### Volt Template Engine (10 tasks)

- [ ] VLT-001: Setup Volt compiler
- [ ] VLT-002: Template inheritance
- [ ] VLT-003: Partials
- [ ] VLT-004: Component macros
- [ ] VLT-005: CMS helpers
- [ ] VLT-006: Auto-escaping
- [ ] VLT-007: Create base layout: layouts/main.volt
- [ ] VLT-008: Create error layouts
- [ ] VLT-009: Volt caching
- [ ] VLT-010: Tests

### ORM Wrapper (10 tasks)

- [ ] ORM-001: Create `Model` base — `$fillable`, `$casts`, `$table`, `$primaryKey`
- [ ] ORM-002: Query builder
- [ ] ORM-003: Relationships: `belongsTo()`, `hasMany()`, `belongsToMany()`, `hasOne()`
- [ ] ORM-004: Mass assignment protection
- [ ] ORM-005: Attribute casting
- [ ] ORM-006: Timestamps: auto-manage created_at, updated_at, soft delete
- [ ] ORM-007: Pagination
- [ ] ORM-008: Scopes
- [ ] ORM-009: Database connection: MySQL + PostgreSQL + SQLite
- [ ] ORM-010: Unit tests

### Migration System (8 tasks)

- [ ] MIG-001: Create `Migration` base
- [ ] MIG-002: Column types
- [ ] MIG-003: Column modifiers
- [ ] MIG-004: Foreign keys with cascade options
- [ ] MIG-005: Migration tracking table
- [ ] MIG-006: CLI: `tavp migrate`, `migrate:rollback`, `migrate:status`, `migrate:fresh`
- [ ] MIG-007: Seeder system
- [ ] MIG-008: Tests

### Middleware, Validation & Exception Handling (17 tasks)

- [ ] MW-001: Create `Middleware` interface
- [ ] MW-002: Middleware pipeline
- [ ] MW-003: Create `CsrfMiddleware`
- [ ] MW-004: Create `SessionMiddleware`
- [ ] MW-005: Create `Authenticate` middleware
- [ ] MW-006: Create `RedirectIfAuthenticated` middleware
- [ ] MW-007: Create `ThrottleMiddleware`
- [ ] MW-008: Create `FormRequest` base
- [ ] MW-009: Validation rules
- [ ] MW-010: Create `ExceptionHandler`
- [ ] MW-011: API error format
- [ ] MW-012: Custom exceptions
- [ ] MW-013: Error pages
- [ ] MW-014: Helpers
- [ ] MW-015: Flash messages
- [ ] MW-016: Maintenance mode
- [ ] MW-017: Tests

### CLI (14 tasks)

- [ ] CLI-001: Create `bin/tavp` entry point
- [ ] CLI-002: Create `tavp new`
- [ ] CLI-003: Create `tavp serve`
- [ ] CLI-004: Create `tavp make:model`
- [ ] CLI-005: Create `tavp make:controller`
- [ ] CLI-006: Create `tavp make:migration`
- [ ] CLI-007: Create `tavp make:view`
- [ ] CLI-008: Create `tavp migrate`, `migrate:rollback`, `db:seed`
- [ ] CLI-009: Create `tavp key:generate`
- [ ] CLI-010: Create `tavp env:switch [env]`
- [ ] CLI-011: Create `tavp env:add [env]`
- [ ] CLI-012: Create `tavp env:list`
- [ ] CLI-013: Create `tavp down` / `tavp up`
- [ ] CLI-014: Tests

### Environment Adapters (16 tasks)

- [ ] ENV-001: Docker adapter: docker-compose.yml template
- [ ] ENV-002: Docker adapter: Dockerfile with Phalcon
- [ ] ENV-003: Docker adapter: php.ini + nginx.conf
- [ ] ENV-004: Lando adapter: .lando.yml template
- [ ] ENV-005: Laragon adapter: setup-laragon.bat
- [ ] ENV-006: XAMPP adapter: setup-xampp.bat
- [ ] ENV-007: WAMP adapter: setup-wamp.bat
- [ ] ENV-008: DDEV adapter: .ddev/config.yaml
- [ ] ENV-009: DevContainer adapter: devcontainer.json
- [ ] ENV-010: Native adapter: detect existing PHP + Phalcon
- [ ] ENV-011: Auto-detection logic
- [ ] ENV-012: Clean generation
- [ ] ENV-013: .tavp.json: write env choice
- [ ] ENV-014: README auto-update
- [ ] ENV-015: Phalcon DLL/SO auto-download
- [ ] ENV-016: Tests

### Production Installer & Deploy (14 tasks)

- [ ] DEP-001: Integrate existing HestiaCP script
- [ ] DEP-002: Refactor script: add TAVP-specific post-install steps
- [ ] DEP-003: Create `tavp deploy` command
- [ ] DEP-004: HestiaCP adapter
- [ ] DEP-005: HestiaCP adapter: database setup
- [ ] DEP-006: cPanel/WHM adapter
- [ ] DEP-007: Docker deploy adapter
- [ ] DEP-008: Generic VPS adapter
- [ ] DEP-009: Post-deploy: run migrations, seed, optimize
- [ ] DEP-010: Post-deploy: verify website accessible
- [ ] DEP-011: Deploy config: .tavp-deploy.yml
- [ ] DEP-012: `tavp deploy --redeploy`
- [ ] DEP-013: Publish packages.tavp.dev
- [ ] DEP-014: Tests

### Git Abstraction (6 tasks)

- [ ] GIT-001: Create `tavp push`
- [ ] GIT-002: Create `tavp pull`
- [ ] GIT-003: Create `tavp init`
- [ ] GIT-004: Auto-detect Git installed
- [ ] GIT-005: Remote setup: `tavp remote:add`
- [ ] GIT-006: Tests

### TAVPid — Basic Auth (14 tasks)

- [ ] AUTH-001: Create `users` migration
- [ ] AUTH-002: Create `otp_codes` migration
- [ ] AUTH-003: Create `user_sessions` migration
- [ ] AUTH-004: Create `OTPService`
- [ ] AUTH-005: Create `TokenService` (JWT)
- [ ] AUTH-006: Create `AuthService`
- [ ] AUTH-007: Create `AuthController` (Web)
- [ ] AUTH-008: Create `AuthApiController`
- [ ] AUTH-009: Create auth views
- [ ] AUTH-010: Alpine.js OTP form
- [ ] AUTH-011: Rate limiting
- [ ] AUTH-012: Admin seeder
- [ ] AUTH-013: Config: config/auth.php
- [ ] AUTH-014: Tests

### Frontend: Tailwind + Alpine.js + Vite (8 tasks)

- [ ] FE-001: Setup `tailwind.config.js`
- [ ] FE-002: Create `resources/assets/css/app.css`
- [ ] FE-003: Setup `vite.config.js`
- [ ] FE-004: Create `resources/assets/js/app.js`
- [ ] FE-005: Vite integration in Volt
- [ ] FE-006: Hot reload
- [ ] FE-007: Production build
- [ ] FE-008: Create base layout

### Tier Templates (6 tasks)

- [ ] TPL-001: Create Website template
- [ ] TPL-002: Create Application template
- [ ] TPL-003: Create Enterprise template
- [ ] TPL-004: Template selection in `tavp new` wizard
- [ ] TPL-005: Each template includes: composer.json, package.json, .env.example, README.md
- [ ] TPL-006: Smoke test

### Documentation (8 tasks)

- [ ] DOC-001: Setup docs site
- [ ] DOC-002: Getting Started
- [ ] DOC-003: CLI Reference
- [ ] DOC-004: Environment Guide
- [ ] DOC-005: Authentication Guide
- [ ] DOC-006: Deployment Guide
- [ ] DOC-007: Routing Guide
- [ ] DOC-008: Configuration Guide

---

## 0.2.0 — Tools

CLI expansion, TAVPblocks (15), Events, Mail, Weave, Debug toolbar, Expanded auth.

- [ ] CLI-015: `tavp make:scaffold`
- [ ] CLI-016: `tavp make:middleware`, `make:seeder`, `make:event`, `make:listener`
- [ ] CLI-017: `tavp migrate:fresh --seed`
- [ ] CLI-018: `tavp weave:enable`
- [ ] EVT-001: EventDispatcher
- [ ] EVT-002: Manual registration
- [ ] MAIL-001: Mailer abstraction
- [ ] MAIL-002: Mailable base class
- [ ] BLK-001: TAVPblocks setup
- [ ] BLK-002: Components: Button, Input, Select, Textarea, Toggle
- [ ] BLK-003: Components: Modal, Dropdown, Toast, Card, Badge
- [ ] BLK-004: Components: Avatar, Datatable, Pagination, Alert, Skeleton, EmptyState
- [ ] AUTH-015: OTP via SMS + WhatsApp
- [ ] AUTH-016: RBAC: roles + permissions
- [ ] WEAVE-001: Async class
- [ ] WEAVE-002: Fiber integration
- [ ] DBG-001: Debug toolbar
- [ ] DBG-002: Hot reload
- [ ] DOC-009: Docs: TAVPblocks, Events, Mail, Weave, RBAC

---

## 0.3.0 — Ecosystem

Module system, TAVPhub, TAVPkit, Infrastructure, OAuth, TOTP, Tier upgrade.

- [ ] MOD-001: ModuleRegistry
- [ ] MOD-002: ModuleServiceProvider base
- [ ] MOD-003: Dependency resolution
- [ ] MOD-004: Lifecycle commands
- [ ] MOD-005: module.json spec
- [ ] HUB-001: Admin layout
- [ ] HUB-002: Sidebar nav builder
- [ ] HUB-003: Resource base
- [ ] HUB-004: Table builder
- [ ] HUB-005: Form builder
- [ ] HUB-006: CRUD views
- [ ] HUB-007: `tavp hub:install` + `tavp hub:make:resource`
- [ ] KIT-001: `tavp kit:install`
- [ ] KIT-002: `tavp upgrade --to=app` / `--to=enterprise`
- [ ] INF-001: Cache abstraction
- [ ] INF-002: Queue abstraction
- [ ] INF-003: Storage abstraction
- [ ] INF-004: Scheduled tasks
- [ ] AUTH-017: Social OAuth
- [ ] AUTH-018: TOTP
- [ ] AUTH-019: Device tokens
- [ ] DEP-015: cPanel adapter
- [ ] DOC-010: Docs: Module system, TAVPhub, TAVPkit, Infrastructure

---

## 0.4.0 — Polish

TAVPblocks (40+), logging, health, Docker prod, CI/CD, benchmarks, PHPStan L8.

- [ ] 040-001: TAVPblocks expand to 40+
- [ ] 040-002: Structured logging
- [ ] 040-003: Health checks
- [ ] 040-004: `tavp optimize`
- [ ] 040-005: Docker production
- [ ] 040-006: CI/CD templates
- [ ] 040-007: k6 load test suite
- [ ] 040-008: OpenAPI auto-generate
- [ ] 040-009: PHPStan level 8
- [ ] 040-010: Test coverage 90%+

---

## 0.5.0 — Coil

Swoole runtime, hosting integrations, search, broadcasting, CMS module.

- [ ] 050-001: TAVP Coil: Swoole bootstrap
- [ ] 050-002: RequestCleanup
- [ ] 050-003: Connection pooling
- [ ] 050-004: `tavp coil:start`
- [ ] 050-005: HestiaCP plugin
- [ ] 050-006: cPanel plugin
- [ ] 050-007: Search abstraction
- [ ] 050-008: Broadcasting
- [ ] 050-009: CMS module
- [ ] 050-010: Non-programmer CMS editor

---

## 0.6.0 — Relay

RoadRunner runtime, TAVPhive billing, K8s, Terraform, multi-tenancy.

- [ ] 060-001: TAVP Relay: RoadRunner
- [ ] 060-002: `tavp relay:start`
- [ ] 060-003: TAVPhive subscriptions
- [ ] 060-004: TAVPhive payment gateways
- [ ] 060-005: TAVPhive invoicing
- [ ] 060-006: Kubernetes manifests
- [ ] 060-007: Terraform modules
- [ ] 060-008: Multi-tenancy

---

## 0.7.0 — Intelligence

AI integration (4 layers), visual builder, theme system.

- [ ] 070-001: AI Manager
- [ ] 070-002: AI Builder
- [ ] 070-003: AI Assistant
- [ ] 070-004: AI Coder
- [ ] 070-005: AI Content
- [ ] 070-006: Theme system
- [ ] 070-007: Theme customizer

---

## 0.8.0 — Marketplace

Module + Theme marketplace, revenue system, community launch.

- [ ] 080-001: Module marketplace
- [ ] 080-002: Theme marketplace
- [ ] 080-003: CLI: `tavp module:publish`, `tavp theme:publish`
- [ ] 080-004: Revenue system
- [ ] 080-005: Community
- [ ] 080-006: "Built with TAVP" showcase
- [ ] 080-007: Ambassador program

---

## 0.9.0 — Maturity

Security audit, docs finalization, API freeze, migration guides, TAVP Cloud beta.

- [x] 090-001: Security audit (OWASP, dependency scanning)
- [x] 090-002: Performance certification (BenchmarkSuite)
- [x] 090-003: Documentation 100+ pages
- [ ] 090-004: Migration guides
- [ ] 090-005: Flutter integration guide
- [x] 090-006: API freeze announcement (API_LOCK.md)
- [x] 090-007: Deprecation warnings
- [ ] 090-008: Enterprise support tier pricing
- [ ] 090-009: TAVP Cloud beta launch

---

## 1.0.0 — Stable Release

Public API locked. SemVer. LTS. Production-ready.

- [x] 100-001: All 0.9.0 acceptance criteria met
- [ ] 100-002: Core: 90%+ test coverage, zero critical bugs
- [x] 100-003: All ecosystem tools stable (TAVPkit, TAVPid, TAVPhub, TAVPblocks, TAVPhive)
- [x] 100-004: All three runtimes stable (PHP-FPM, Coil/Swoole, Relay/RoadRunner)
- [x] 100-005: Module system API stable (ServiceProvider, ModuleRegistry, ModuleDiscovery)
- [ ] 100-006: Hosting: 3+ providers support TAVP
- [x] 100-007: Marketplace live (ModuleMarketplace, ThemeMarketplace)
- [x] 100-008: Benchmarks published (BenchmarkSuite)
- [x] 100-009: CHANGELOG.md complete (0.1.0 to 1.0.0)
- [x] 100-010: Post-1.0 LTS plan (API_LOCK.md)
