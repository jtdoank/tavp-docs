# TAVP Stack — Document Listing

> Source of truth untuk semua dokumen publik project TAVP.

## Public Documents

| File | Format | Description |
|---|---|---|
| `prd-tavp.html` | HTML | PRD utama TAVP Stack — full requirements, milestones, architecture, tech stack decisions |
| `prd-cms.html` | HTML | PRD Skeleton CMS — section registry, theme engine, DB schema, admin panel, HestiaCP deploy |
| `product-brief.html` | HTML | Product Brief — marketing positioning, performance benchmarks, pricing tiers, ecosystem overview |
| `coding-standards.html` | HTML | Human Style Coding Standards — naming rules for files, variables, functions, classes, DB, routes, config, errors, comments |
| `milestone-checklist.html` | HTML | Interactive Milestone Checklist — 10 milestones (0.1.0 → 1.0.0), 138+ tasks with IDs |

## Internal Documents (NOT for public)

| File | Format | Location | Description |
|---|---|---|---|
| `TAVP-Bible.html` | HTML | `tavp-internal` repo | Internal strategy doc — roadmap, financials, architecture decisions |
| `tavp-gsm/` | Folder | `tavp-internal` repo | Brand assets — logo (EPS/PNG) + Futura Bold font |
| `prd-cms.md` | Markdown | `tavp-docs/internal/` | Markdown version of CMS PRD |
| `decisions-session-1.md` | Markdown | `tavp-docs/internal/` | Architecture decisions from founder + AI (Session 1, Fase 0–1) |

## Related Repos (Gitea → GitHub)

| Repo | Category | Description |
|---|---|---|
| `tavp` | Publik | Etalase / penjelasan stack |
| `tavp-core` | Publik | Scaffold Tailwind+Alpine+Volt+Phalcon |
| `tavp-cli` | Publik | Command `tavp` |
| `tavp-installer` | Publik | Pasang Phalcon + plugin panel |
| `tavpid` | Publik | Auth (OTP, JWT, OAuth, role) |
| `tavpkit` | Publik | Starter kit lengkap |
| `tavphub` | Publik | Admin panel |
| `tavpblocks` | Publik | 40+ komponen UI |
| `tavphive` | Publik | Billing SaaS |
| `tavp-docs` | Publik | Dokumentasi (this repo) |
| `tavp-web` | Produk | Situs tavp.dev |
| `tavp-marketplace` | Produk | Backend marketplace |
| `tavp-cloud` | Produk | Managed hosting (future) |
| `tavp-internal` | Privat | TAVP-Bible + brand assets (Gitea-only, never GitHub) |

## Notes

- All HTML docs follow Human Style Coding Standards (no mention of AI in public docs).
- `tavp-docs/internal/` is gitignored — never pushed to GitHub public.
- `tavp-internal` is Gitea-only — never pushed to GitHub.
- Versioning: ZeroVer (0-based), status `0.0.0` (planning).
