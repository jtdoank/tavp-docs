# Breakdown — TAVP Stack Ecosystem

Rincian ekosistem TAVP Stack: tech stack, mapping ke TALL, dan 14 repo.

## 1. Tech Stack
**TAVP = Tailwind + Alpine + Volt + Phalcon** — "TALL-nya Phalcon".

| Layer | TAVP | TALL (setara) | Peran |
|---|---|---|---|
| CSS | Tailwind | Tailwind | Utility CSS |
| JS ringan | Alpine.js | Alpine.js | Reactivity sisi client |
| Templating | **Volt** | Blade | Template engine (Volt gantikan Blade) |
| Backend | **Phalcon** | Laravel | Framework (Phalcon = C-extension, kenceng & irit RAM) |

Phalcon dipilih karena C-extension → sub-10ms page load di VPS murah.
Livewire di TALL digantikan kombinasi Alpine + Volt di TAVP.

## 2. Keluarga Tools
| Tool | Fungsi |
|---|---|
| `tavp` (CLI) | Command line utama ekosistem |
| `tavp-core` | Framework inti di atas Phalcon (engine, admin panel, section registry, theme engine) |
| `tavp-cli` | CLI / helper command |
| `tavp-installer` | Auto-install Phalcon 5 (HestiaCP/cPanel/Plesk/CyberPanel dkk) |
| `tavpid` | Auth (OTP, session, JWT) |
| `tavpkit` | Starter kit |
| `tavphub` | Hub / distribusi |
| `tavpblocks` | Komponen UI jadi |
| `tavphive` | Payment gateway aggregator |
| `tavp-web` (`tavp.dev`) | Web etalase + marketplace |
| `tavp-marketplace` | Module marketplace (dev dapat 80% revenue) |
| `tavp-cloud` | Layanan cloud |
| `tavp-docs` | Dokumentasi publik |
| `tavp-internal` | (Private) Bible + brand/logo/gsm — Gitea-only |

## 3. Workflow Repo
```
Gitea (git.glotama.com/tavp-stack) = SUMBER UTAMA (termasuk tavp-internal)
   │  repo mateng & proven
   ▼
GitHub (org tavp-stack) = masuk PRIVATE dulu
   │  proven + respons positif
   ▼
GitHub = flip ke PUBLIC (etalase resmi)
```
Aturan: `tavp-internal` + isi `TAVP-Bible`/`tavp-gsm` **tidak pernah** ke GitHub.

## 4. ORM & Migration
- Mesin: Phalcon ORM
- Wrapper: ala Eloquent (`fillable`, `casts`, `relationships`)
- Migration: ala Laravel — `tavp make:migration`, `tavp migrate` (run/rollback/fresh/seed)
- DB: MySQL / PostgreSQL / SQLite

## 5. Web Hosting Friendly
Installer dukung HestiaCP, cPanel, Plesk, CyberPanel, CloudPanel, dll.
One-click install untuk naikkan adopsi Phalcon → visibility TAVP naik.
