# tavp-docs

Kumpulan dokumentasi resmi untuk **TAVP Stack** — stack web berbasis
**Tailwind + Alpine + Volt + Phalcon** (versi "Phalcon" dari TALL).

Repo ini jadi rumah semua dokumen yang dipakai developer luar maupun tim
internal TAVP.

## Isi repo

```
tavp-docs/
├─ public/     ← dokumen yang boleh dipublikasikan (ke GitHub nanti)
├─ internal/   ← dokumen rahasia, TETAP di Gitea, tidak pernah di-publish
├─ README.md
└─ .gitignore
```

### `public/`
| File | Isi |
|---|---|
| `prd-tavp.html` | Product Requirements Document utama TAVP |
| `prd-cms.html` / `prd-cms.md` | PRD Skeleton CMS di atas TAVP |
| `product-brief.html` | Brief produk & referensi visual |
| `coding-standards.html` | Standar coding & penamaan file (wajib dibaca kontributor) |
| `milestone-checklist.html` | Checklist milestone rilis |

### `internal/`
| File | Isi |
|---|---|
| `TAVP-Bible.html` | Sumber kebenaran utama TAVP (strategi, keputusan). **Private.** |

## Aturan dokumentasi

- Bahasa santai tapi jelas, bisa diterima developer luar.
- Semua konten publik **tidak** menyebut proses pembuatan internal.
- `internal/` tidak boleh di-push ke repo publik (GitHub).
- Ikuti `coding-standards.html` untuk penamaan file & gaya tulisan.

## Cara pakai

Dokumen dibaca langsung (HTML) atau di-render ke web `tavp.dev/docs`.
