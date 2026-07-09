# Checklist — TAVP Stack Status

Status terkini. Centang (✔) = selesai, (▢) = belum.

## A. Repo & Infrastruktur
- ✔ 14 repo di-init & di-push ke Gitea (`tavp-stack`): 13 ekosistem + `tavp-internal`
- ✔ `tavp-internal` (Private, Gitea-only) terpisah dari `tavp-docs`
- ✔ `tavp-docs` bersih (internal tidak ikut → aman ke GitHub publik nanti)
- ✔ SSH Gitea tidak tembus (Cloudflare) → push lewat HTTPS + credential Windows
- ▢ Mirror ke GitHub org `tavp-stack` (Private → Public) — belum dilakukan
- ▢ Setelan "flip ke public" per repo saat proven

## B. Fitur Inti (ref: PenBill sebagai contoh implementasi)
### P0 — ✔ SELESAI
- ✔ Quotation → Invoice conversion
- ✔ Edge case guards (inactive client, delete guards)
- ✔ Invoice overdue auto-detection cron
- ✔ Plan limit enforcement middleware
- ✔ PDF watermark Free tier

### P1 — ▢ BELUM
- ▢ Full email system (reminder, approval, SMTP per tenant, templates) — ~11 task
- ▢ Payment reminder cron — 3 task
- ▢ Recurring auto-send + approval flow — 2 task
- ▢ Quotation auto-expire cron — 1 task
- ▢ Client auto-inactive cron — 1 task
- ▢ Payment receipt PDF — 1 task
- ▢ Auto-save forms / duplicate quotation — 2 task

### Future (v0.6.0 – v1.0.0)
- ▢ Marketing & CMS module
- ▢ Module marketplace (`tavp.dev/marketplace`, dev 80% revenue)
- ▢ Theme marketplace
- ▢ Web hosting one-click installer (cPanel/HestiaCP plugin)

## C. Dokumentasi
- ✔ PRD (tavp + cms), product brief, coding standards
- ✔ `milestone-checklist.html` (visual)
- ✔ `DOCUMENT-LISTING.md`, `BREAKDOWN.md`, `CHECKLIST.md` (file ini)
- ✢ `INDEX.md` (root) — perlu update tambah poin repo internal & doc listing

## D. Open Items / Keputusan Nunggu
- ▢ Penempatan logo publik (`logo-tavp.png` → `tavp-web/assets/brand/` & header README)
- ▢ Finalisasi `tavp-docs` (revisi isi dokumen sesuai keputusan: ORM wrapper, org struct, monetization)
- ▢ Lisensi font Futura — pastikan tidak bocor ke repo publik
