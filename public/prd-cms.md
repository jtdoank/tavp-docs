# TAVP Skeleton CMS

> 📄 **Product Requirements Document**

Skeleton CMS yang mesinnya tetap sama, tinggal ganti body (layout) sesuai kebutuhan project. Seperti mobil: mesin tetap, body bisa diganti model apa aja.

| | |
|---|---|
| **Version** | `0.0.0` |
| **Versioning** | Zero-Based ([0ver.org](https://0ver.org/)) |
| **Status** | Planning |
| **Tech Stack** | Tailwind + Alpine.js + Volt + Phalcon |
| **Audience** | AI Executor |

---

## Daftar Isi

1. [Konsep & Analogi](#01--konsep--analogi)
2. [Problem Statement](#02--problem-statement)
3. [Contoh Hasil Akhir](#03--contoh-hasil-akhir)
4. [Arsitektur Sistem](#04--arsitektur-sistem)
5. [Tech Stack Detail](#05--tech-stack-detail)
6. [Database Schema](#06--database-schema)
7. [Section Registry](#07--section-registry)
8. [Theme Engine](#08--theme-engine)
9. [Admin Panel](#09--admin-panel)
10. [Frontend Renderer](#10--frontend-renderer)
11. [File Structure](#11--file-structure)
12. [Versioning & Workflow](#12--versioning--workflow)
13. [Milestone v0.1.0](#13--milestone-v010)
14. [Aturan Eksekusi](#14--aturan-eksekusi)

---

## 01 — Konsep & Analogi

Apa ini sebenarnya dan kenapa dibuat.

> **💡 Analogi**
>
> Bayangkan ini seperti **chassis mobil**. Mesin, transmisi, suspensi — semuanya sudah jadi dan sudah teruji. Yang perlu diganti cuma **body**: sedan, SUV, pickup, atau van — tergantung kebutuhan.

### Artinya

- **Mesin** = Admin panel, Section Registry, Theme Engine, Page Renderer, Media Library. Ini **tidak berubah** antar project.
- **Body** = Kumpulan section yang dipilih, diurutkan, dan di-style dari admin. Ini **berubah** tiap project.
- **Cat** = Warna tema (primary, secondary, accent). Diganti dari admin, **tanpa coding**.

### Contoh Nyata

**Artisan Kuliner**
Section: Hero → About → Services (3 col) → Gallery (4 col) → Testimonial → CTA → Contact. Warna: amber/gold.

**Rekam Films**
Section: Hero (minimal) → Video Showreel → Selected Works (1 col) → About (text only) → Contact (minimal). Warna: monochrome/dark.

Mesin yang render kedua website itu **sama persis**. Yang beda cuma: section mana yang dipakai, urutannya, style per section, dan warnanya.

---

## 02 — Problem Statement

Masalah yang mau diselesaikan.

1. **Setiap project web profil dimulai dari nol.** Padahal pattern-nya sama: hero, about, services, gallery, contact. Buang-buang waktu.
2. **Ganti warna = utak-atik CSS.** Harusnya cukup input hex color di admin.
3. **Ganti layout = rewrite kode.** Harusnya cukup drag-drop section, pilih style, urutkan.
4. **Content statis di file.** Harusnya semua konten bisa di-edit dari admin panel.
5. **Saya bukan programmer.** Jadi semua yang berkaitan dengan tampilan harus bisa dilakukan dari GUI, bukan code.

> **🚨 Constraint Penting**
>
> Saya **bukan programmer**. PRD ini harus cukup detail supaya AI lain bisa eksekusi tanpa perlu bertanya hal-hal yang sudah bisa di-infer dari dokumen ini.

---

## 03 — Contoh Hasil Akhir

Referensi website yang bisa dihasilkan oleh skeleton ini.

| Website | URL | Karakter | Sections yang Dipakai |
|---|---|---|---|
| **Artisan Kuliner** | [Link](https://www.artisankulinergroup.co.id/) | Corporate, ramai, warna-warni | Hero (fullscreen) → About (split) → Services (grid 3) → Gallery (grid 4) → Testimonials (slider) → CTA (banner) → Contact (split) |
| **Rekam Films** | [Link](https://www.rekamfilms.com/id) | Minimalis, gelap, sinematik | Hero (minimal) → Video (showreel) → Gallery (grid 2, 1 per row) → About (text only) → Contact (info only) |

> **ℹ️ Catatan**
>
> Dua website di atas **bukan** dibuat dengan skeleton ini. Mereka cuma **referensi** supaya AI executor paham level kualitas visual yang diharapkan. Skeleton ini harus mampu menghasilkan website dengan kualitas setara.

---

## 04 — Arsitektur Sistem

Bagaimana komponen saling terhubung.

```
┌─────────────────────────────────────────────────────────────┐
│                        ADMIN PANEL                         │
│                                                             │
│  ┌──────────┐  ┌────────────────┐  ┌───────────────────┐   │
│  │  Theme   │  │  Page Builder  │  │   Media Library   │   │
│  │  Editor  │  │                │  │                   │   │
│  │          │  │  ┌────────────┐│  │  Upload / Browse  │   │
│  │ Colors   │  │  │ Drag &    ││  │  Crop / Resize    │   │
│  │ Fonts    │  │  │ Drop      ││  │                   │   │
│  │ Radius   │  │  │ Sections  ││  └─────────┬─────────┘   │
│  │          │  │  │           ││            │             │
│  └────┬─────┘  │  │ ┌───────┐ ││            │             │
│       │        │  │ │Style  │ ││            │             │
│       │        │  │ │Picker │ ││            │             │
│       │        │  │ └───────┘ ││            │             │
│       │        │  │ ┌───────┐ ││            │             │
│       │        │  │ │Content│ ││            │             │
│       │        │  │ │Editor │ ││            │             │
│       │        │  │ └───────┘ ││            │             │
│       │        │  └─────┬──────┘            │             │
│       │        └────────┼───────────────────┘             │
├───────┼─────────────────┼─────────────────────────────────┤
│       │          ENGINE │                                  │
│       ▼                 ▼                                  │
│  ┌────────────────────────────────────────────────────┐    │
│  │              SECTION REGISTRY                      │    │
│  │                                                    │    │
│  │  Setiap section type punya:                        │    │
│  │  • name (label manusia)                           │    │
│  │  • icon (nama ikon Lucide)                        │    │
│  │  • category (header/content/conversion/...)       │    │
│  │  • styles[] (variant tampilan)                    │    │
│  │  • fields[] (konten yang bisa diisi)              │    │
│  │  • settings[] (layout/padding/bg/spacing)         │    │
│  └──────────────────────┬─────────────────────────────┘    │
│                         │                                  │
│                         ▼                                  │
│  ┌────────────────────────────────────────────────────┐    │
│  │              PAGE RENDERER                         │    │
│  │                                                    │    │
│  │  1. Ambil page dari DB                            │    │
│  │  2. Ambil sections, urutkan by sort_order         │    │
│  │  3. Untuk setiap section:                         │    │
│  │     a. Lihat type → cari di Registry              │    │
│  │     b. Lihat style → pilih variant template       │    │
│  │     c. Lihat content → inject data ke template    │    │
│  │     d. Lihat settings → apply layout config       │    │
│  │     e. Render Volt partial                        │    │
│  │  4. Bungkus dengan CSS variables dari Theme       │    │
│  └──────────────────────┬─────────────────────────────┘    │
│                         │                                  │
├─────────────────────────┼──────────────────────────────────┤
│                         ▼          FRONTEND                 │
│  ┌────────────────────────────────────────────────────┐    │
│  │           themes/frontend/index.volt               │    │
│  │                                                    │    │
│  │  <style>{{ theme.cssVariables() }}</style>         │    │
│  │  <nav>...</nav>                                    │    │
│  │                                                    │    │
│  │  {% for section in sections %}                     │    │
│  │    {{ partial('sections/' ~ section.type, [       │    │
│  │      'content':  section.content,                 │    │
│  │      'settings': section.settings,                │    │
│  │      'theme':    theme                            │    │
│  │    ]) }}                                          │    │
│  │  {% endfor %}                                     │    │
│  │                                                    │    │
│  │  <footer>...</footer>                                │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Alur Data (Sederhana)

**1. Admin pilih layout & atur section**
Drag section, isi konten, pilih style, atur warna tema.

**2. Data tersimpan di database**
Sections (urutan, type), SectionContent (konten per field), SectionSettings (layout per section), Settings (tema).

**3. Pengunjung buka website**
IndexController ambil data page + sections dari DB, kirim ke Volt template.

**4. Renderer loop section**
Untuk setiap section: cek type di Registry → ambil template sesuai style → inject konten → render HTML.

**5. Final HTML keluar**
Website tampil dengan warna dari CSS variables, konten dari DB, layout dari settings per section.

---

## 05 — Tech Stack Detail

Setiap komponen dan perannya.

| Komponen | Teknologi | Version | Peran |
|---|---|---|---|
| **Backend Framework** | `Phalcon` | 5.x | Router, ORM, DI, Session, Security |
| **Template Engine** | `Volt` | Built-in Phalcon | Render HTML, partials, inheritance |
| **CSS Framework** | `Tailwind CSS` | 3.4+ | Utility classes di admin panel. Frontend pakai CSS variables, bukan Tailwind langsung. |
| **JS Framework** | `Alpine.js` | 3.x | Reaktivitas di admin (drag-drop, toggle, form). Frontend untuk lightbox, mobile menu, scroll. |
| **Icons** | `Lucide` | Latest | Ikon di admin & frontend. Dipanggil via `data-lucide="icon-name"`. |
| **Font** | Inter | Default | Bisa diganti dari admin. Di-load via Google Fonts. |
| **Database** | `MySQL` | 8.0+ | Storage utama. Schema ada di Section 06. |

> **⚠️ Penting: Tailwind di Frontend**
>
> Frontend **TIDAK** bergantung pada Tailwind classes. Semua styling frontend menggunakan **CSS variables** yang di-generate oleh Theme Engine. Tailwind hanya dipakai di **admin panel**. Ini supaya ganti warna tema tidak perlu recompile CSS.

---

## 06 — Database Schema

Struktur tabel. Ini wajib diikuti persis.

> **🚨 Wajib**
>
> Jangan tambahkan kolom, jangan hapus kolom, jangan ganti tipe data. Schema ini sudah didesain untuk mendukung semua fitur yang dibutuhkan. Kalau ada yang kurang, itu artinya fitur itu belum masuk scope, bukan berarti schemanya salah.

### 6.1 — layouts

Template dasar halaman. Level A fleksibilitas.

| Kolom | Tipe | Null | Keterangan |
|---|---|---|---|
| `id` | INT AUTO_INCREMENT PK | No | |
| `name` | VARCHAR(100) | No | Nama manusia: "Corporate", "Portfolio" |
| `slug` | VARCHAR(100) UNIQUE | No | Identifier: "corporate", "portfolio" |
| `description` | TEXT | Yes | Deskripsi layout |
| `thumbnail` | VARCHAR(255) | Yes | Path ke screenshot layout |
| `is_system` | TINYINT(1) DEFAULT 0 | No | 1 = tidak bisa dihapus dari admin |
| `created_at` | DATETIME | Yes | |
| `updated_at` | DATETIME | Yes | |

### 6.2 — pages

Halaman yang bisa ditambah oleh user.

| Kolom | Tipe | Null | Keterangan |
|---|---|---|---|
| `id` | INT AUTO_INCREMENT PK | No | |
| `layout_id` | INT FK → layouts.id | Yes | Bisa null (blank layout) |
| `title` | VARCHAR(255) | No | Judul halaman |
| `slug` | VARCHAR(255) UNIQUE | No | URL slug. Default: "beranda" |
| `status` | ENUM('published','draft') | No | DEFAULT 'draft' |
| `seo_title` | VARCHAR(255) | Yes | Override `<title>` tag |
| `seo_description` | TEXT | Yes | Meta description |
| `created_at` | DATETIME | Yes | |
| `updated_at` | DATETIME | Yes | |

### 6.3 — sections

Section yang ada di sebuah halaman. Level B fleksibilitas (urutan).

| Kolom | Tipe | Null | Keterangan |
|---|---|---|---|
| `id` | INT AUTO_INCREMENT PK | No | |
| `page_id` | INT FK → pages.id | No | ON DELETE CASCADE |
| `type` | VARCHAR(50) | No | Harus match dengan key di Section Registry: "hero", "about", "services", dll |
| `sort_order` | INT DEFAULT 0 | No | Urutan tampil. 0 paling atas. |
| `is_active` | TINYINT(1) DEFAULT 1 | No | 0 = disembunyikan tapi tidak dihapus |
| `created_at` | DATETIME | Yes | |
| `updated_at` | DATETIME | Yes | |

### 6.4 — section_content

Konten dinamis per section. Setiap baris = 1 field value.

| Kolom | Tipe | Null | Keterangan |
|---|---|---|---|
| `id` | INT AUTO_INCREMENT PK | No | |
| `section_id` | INT FK → sections.id | No | ON DELETE CASCADE |
| `field_key` | VARCHAR(100) | No | Harus match dengan key di fields[] di Registry |
| `field_value` | LONGTEXT | Yes | Text biasa atau JSON (untuk repeater) |
| `sort_order` | INT DEFAULT 0 | No | Penting untuk repeater (urutan item) |

**UNIQUE constraint:** `(section_id, field_key, sort_order)`

### 6.5 — section_settings

Layout/setting per section. Level C fleksibilitas.

| Kolom | Tipe | Null | Keterangan |
|---|---|---|---|
| `id` | INT AUTO_INCREMENT PK | No | |
| `section_id` | INT FK → sections.id | No | ON DELETE CASCADE |
| `setting_key` | VARCHAR(100) | No | Harus match dengan key di settings[] di Registry |
| `setting_value` | VARCHAR(255) | Yes | Nilai setting (selalu string) |

**UNIQUE constraint:** `(section_id, setting_key)`

### 6.6 — settings

Key-value store untuk tema, site info, dll.

| Kolom | Tipe | Null | Keterangan |
|---|---|---|---|
| `id` | INT AUTO_INCREMENT PK | No | |
| `key` | VARCHAR(100) UNIQUE | No | Misal: "theme_colors", "theme_font", "nav_items" |
| `value` | TEXT | Yes | String atau JSON |
| `updated_at` | DATETIME | Yes | |

### 6.7 — media

File yang di-upload (gambar, video, dokumen).

| Kolom | Tipe | Null | Keterangan |
|---|---|---|---|
| `id` | INT AUTO_INCREMENT PK | No | |
| `filename` | VARCHAR(255) | No | Nama file di disk (hash) |
| `original_name` | VARCHAR(255) | Yes | Nama asli dari user |
| `mime_type` | VARCHAR(100) | Yes | image/jpeg, video/mp4, dll |
| `size` | INT | Yes | Dalam bytes |
| `path` | VARCHAR(500) | Yes | Relative path dari public/ |
| `alt_text` | VARCHAR(255) | Yes | Alt text untuk gambar |
| `created_at` | DATETIME | Yes | |

### 6.8 — contact_messages

Pesan dari form kontak di frontend.

| Kolom | Tipe | Null | Keterangan |
|---|---|---|---|
| `id` | INT AUTO_INCREMENT PK | No | |
| `name` | VARCHAR(100) | Yes | |
| `email` | VARCHAR(100) | Yes | |
| `subject` | VARCHAR(255) | Yes | |
| `message` | TEXT | Yes | |
| `is_read` | TINYINT(1) DEFAULT 0 | No | |
| `created_at` | DATETIME | Yes | |

### 6.9 — Seed Data

Data awal yang wajib ada setelah migration.

```sql
-- Layouts
INSERT INTO layouts (name, slug, description, is_system, created_at) VALUES
('Corporate',  'corporate',  'Multi-section cocok untuk company profile', 1, NOW()),
('Portfolio',  'portfolio',  'Minimalis untuk portfolio/karya',         1, NOW()),
('Landing Page', 'landing', 'Single-focus untuk produk/layanan',     1, NOW()),
('Blank',      'blank',     'Kosong, mulai dari nol',                1, NOW());

-- Default Theme
INSERT INTO settings (`key`, value, updated_at) VALUES
('theme_name',   'My Website', NOW()),
('theme_colors', '{"primary":"#10b981","secondary":"#0ea5e9","accent":"#f59e0b","dark":"#0f172a","light":"#f8fafc"}', NOW()),
('theme_font',   'Inter', NOW()),
('theme_rounded','lg', NOW()),
('nav_items',   '[{"label":"Beranda","url":"/"},{"label":"Tentang","url":"#about"},{"label":"Layanan","url":"#services"},{"label":"Galeri","url":"#gallery"},{"label":"Kontak","url":"#contact"}]', NOW()),
('footer_text', 'Copyright {{ year }}. All rights reserved.', NOW()),
('footer_address', 'Jakarta, Indonesia', NOW()),
('footer_phone',  '021-1234567', NOW()),
('footer_email',  'info@example.com', NOW());
```

---

## 07 — Section Registry

Daftar semua section type yang tersedia. Ini adalah **single source of truth** untuk field, style, dan setting setiap section.

> **ℹ️ Bagaimana Ini Bekerja**
>
> Registry ini di-define di PHP (`SectionRegistryBootstrap.php`). Setiap section type punya struktur tetap: `name`, `icon`, `category`, `styles[]`, `fields[]`, `settings[]`. Admin panel membaca registry ini untuk generate form secara otomatis. Frontend renderer membaca registry ini untuk menentukan template mana yang di-render.

### Field Types

| Type | Deskripsi | Render di Admin |
|---|---|---|
| `text` | Input teks 1 baris | `<input type="text">` |
| `textarea` | Teks multi-baris | `<textarea>` |
| `richtext` | WYSIWYG editor | TinyMCE atau Quill |
| `url` | Input URL dengan validasi | `<input type="url">` |
| `number` | Angka | `<input type="number">` |
| `media` | Pilih file dari Media Library | Button buka media picker modal |
| `select` | Dropdown pilihan | `<select>` dari options[] |
| `repeater` | Array of items (bisa add/remove) | Group of fields + tombol tambah/hapus |

### Daftar Section Types

#### 7.1 — hero

| Properti | Value |
|---|---|
| name | Hero |
| icon | layout |
| category | header |
| styles | `fullscreen` · `split` · `minimal` · `video_bg` |

**Fields:**

| Key | Type | Label | Default |
|---|---|---|---|
| badge | text | Badge | *empty* |
| title | text | Judul | *empty* |
| subtitle | textarea | Subtitle | *empty* |
| bg_image | media | Background Image | *empty* |
| video_url | url | Video URL (YouTube/Vimeo) | *empty* |
| side_image | media | Side Image (untuk style: split) | *empty* |
| btn_primary_text | text | Teks Tombol Utama | *empty* |
| btn_primary_url | url | URL Tombol Utama | # |
| btn_secondary_text | text | Teks Tombol Kedua | *empty* |
| btn_secondary_url | url | URL Tombol Kedua | # |

**Settings:**

| Key | Type | Label | Options | Default |
|---|---|---|---|---|
| style | select | Style | fullscreen · split · minimal · video_bg | fullscreen |
| height | select | Tinggi | screen · auto · custom | screen |
| custom_height | number | Custom Height (px) | — | 600 |
| text_align | select | Posisi Teks | left · center · right | left |
| overlay | select | Overlay | none · light · dark · gradient | dark |
| padding_y | select | Padding | sm · md · lg · xl · 2xl | 2xl |

#### 7.2 — about

| Properti | Value |
|---|---|
| name | Tentang |
| icon | info |
| category | content |
| styles | `image_left` · `image_right` · `text_only` · `cards` |

**Fields:**

| Key | Type | Label |
|---|---|---|
| section_title | text | Judul Section |
| text | richtext | Konten |
| image | media | Gambar |
| items | repeater | Items (untuk style: cards) |

**Repeater subfields (items):** `icon` (text) · `title` (text) · `text` (text)

**Settings:** `style` (select: image_left · image_right · text_only · cards) · `padding_y` (select) · `bg_color` (select: white · light · primary · dark) · `text_color` (select: dark · light)

#### 7.3 — services

| Properti | Value |
|---|---|
| name | Layanan |
| icon | briefcase |
| category | content |
| styles | `grid_3` · `grid_2` · `list` · `cards` |

**Fields:** `section_title` (text) · `section_subtitle` (textarea) · `items` (repeater)

**Repeater subfields (items):** `icon` (text, nama ikon Lucide) · `title` (text) · `description` (textarea) · `image` (media, optional) · `link_text` (text) · `link_url` (url)

**Settings:** `style` (select) · `padding_y` (select) · `bg_color` (select: white · light · primary · dark)

#### 7.4 — gallery

| Properti | Value |
|---|---|
| name | Galeri |
| icon | image |
| category | content |
| styles | `grid_4` · `grid_3` · `grid_2` · `masonry` · `slider` |

**Fields:** `section_title` (text) · `items` (repeater)

**Repeater subfields (items):** `image` (media) · `caption` (text) · `span` (select: 1 · 2, default 1)

**Settings:** `style` (select) · `padding_y` (select) · `bg_color` (select) · `gap` (select: none · sm · md · lg) · `lightbox` (select: yes · no) · `rounded` (select: none · sm · md · lg · xl · full)

#### 7.5 — video

| Properti | Value |
|---|---|
| name | Video |
| icon | play-circle |
| category | content |
| styles | `embed` · `showreel` · `popup` |

**Fields:** `section_title` (text) · `video_url` (url, mendukung YouTube & Vimeo) · `thumbnail` (media, untuk style: popup) · `aspect_ratio` (select: 16:9 · 4:3 · 21:9, default 16:9)

**Settings:** `style` (select) · `padding_y` (select) · `bg_color` (select: white · light · dark) · `max_width` (select: sm · md · lg · full)

> **ℹ️ Video Embed Logic**
>
> Helper `video_embed.volt` wajib bisa handle: (1) YouTube URL (youtube.com/watch?v= dan youtu.be/), (2) Vimeo URL (vimeo.com/), (3) Direct MP4. Untuk YouTube/Vimeo, extract video ID lalu render sebagai iframe. Untuk MP4, render sebagai `<video>` tag.

#### 7.6 — cta

| Properti | Value |
|---|---|
| name | Call to Action |
| icon | megaphone |
| category | conversion |
| styles | `banner` · `centered` · `split` |

**Fields:** `title` (text) · `subtitle` (textarea) · `btn_text` (text) · `btn_url` (url) · `bg_image` (media)

**Settings:** `style` (select) · `padding_y` (select) · `bg_color` (select: primary · dark · image)

#### 7.7 — stats

| Properti | Value |
|---|---|
| name | Statistik |
| icon | bar-chart-3 |
| category | social_proof |
| styles | `inline` · `grid_4` · `grid_3` |

**Fields:** `items` (repeater)

**Repeater subfields (items):** `number` (text) · `suffix` (text, misal "+" atau "K") · `label` (text)

**Settings:** `style` (select) · `bg_color` (select)

#### 7.8 — testimonials

| Properti | Value |
|---|---|
| name | Testimoni |
| icon | message-square |
| category | social_proof |
| styles | `cards` · `slider` · `list` |

**Fields:** `section_title` (text) · `items` (repeater)

**Repeater subfields (items):** `quote` (textarea) · `name` (text) · `role` (text) · `avatar` (media) · `rating` (select: 1-5, default 5)

**Settings:** `style` (select) · `padding_y` (select) · `bg_color` (select)

#### 7.9 — contact

| Properti | Value |
|---|---|
| name | Kontak |
| icon | mail |
| category | footer |
| styles | `split` · `form_only` · `info_only` · `cards` |

**Fields:** `section_title` (text) · `subtitle` (textarea) · `address` (text) · `phone` (text) · `email` (text) · `show_form` (select: yes · no, default yes) · `map_embed` (textarea, Google Maps embed code)

**Settings:** `style` (select) · `padding_y` (select) · `bg_color` (select)

> **💡 Form Kontak**
>
> Ketika `show_form = yes`, section contact WAJIB render form dengan field: Nama, Email, Subjek, Pesan. Form submit via AJAX ke `POST /api/contact`. Setelah berhasil, tampilkan pesan sukses tanpa reload halaman.

#### 7.10 — faq

| Properti | Value |
|---|---|
| name | FAQ |
| icon | help-circle |
| category | footer |
| styles | `accordion` · `grid` |

**Fields:** `section_title` (text) · `items` (repeater)

**Repeater subfields (items):** `question` (text) · `answer` (textarea)

**Settings:** `style` (select) · `padding_y` (select) · `bg_color` (select: white · light)

> **ℹ️ Accordion Behavior**
>
> Untuk style `accordion`, hanya 1 item yang boleh terbuka di saat yang sama. Klik item lain → item sebelumnya tutup otomatis. Gunakan Alpine.js untuk ini.

---

## 08 — Theme Engine

Cara kerja sistem warna dan tema.

### Alur

1. Admin buka Theme Editor di admin panel.
2. Pilih warna (color picker) atau pilih preset.
3. Save → tersimpan di tabel `settings` dengan key `theme_colors` sebagai JSON.
4. Di frontend, `ThemeProvider.php` baca dari DB (fallback ke config file).
5. `ThemeProvider->cssVariables()` generate CSS custom properties.
6. CSS variables di-inject di `<head>` frontend.
7. Semua styling frontend pakai `var(--color-xxx)`, bukan hardcode.

### Warna yang Tersedia

| Key | Default | Digunakan Untuk |
|---|---|---|
| `primary` | #10b981 | Tombol utama, aksen, link, badge, ikon aktif |
| `secondary` | #0ea5e9 | Elemen sekunder, gradient |
| `accent` | #f59e0b | Highlight, warning, elemen khusus |
| `dark` | #0f172a | Teks utama, heading, navbar bg, footer bg |
| `light` | #f8fafc | Background halaman, section alternating |

### CSS Variables yang Di-generate

Untuk setiap warna, Theme Engine WAJIB generate:

```css
/* Base color */
--color-primary: #10b981;

/* Opacity variants (wajib ada semua) */
--color-primary-5:  rgba(16, 185, 129, 0.05);
--color-primary-10: rgba(16, 185, 129, 0.10);
--color-primary-20: rgba(16, 185, 129, 0.20);
--color-primary-30: rgba(16, 185, 129, 0.30);
--color-primary-50: rgba(16, 185, 129, 0.50);
--color-primary-70: rgba(16, 185, 129, 0.70);
--color-primary-90: rgba(16, 185, 129, 0.90);
```

Ini berlaku untuk ke-5 warna (primary, secondary, accent, dark, light). Jadi total ada **40 CSS variables**.

### Preset Warna (di Admin)

| Nama | Primary | Secondary | Accent | Dark | Light |
|---|---|---|---|---|---|
| Emerald | #10b981 | #0ea5e9 | #f59e0b | #0f172a | #f8fafc |
| Blue | #3b82f6 | #8b5cf6 | #f59e0b | #1e293b | #f1f5f9 |
| Violet | #8b5cf6 | #ec4899 | #06b6d4 | #1a1025 | #faf5ff |
| Rose | #f43f5e | #f97316 | #eab308 | #1c1917 | #fff1f2 |
| Amber | #f59e0b | #ef4444 | #10b981 | #1c1917 | #fffbeb |
| Monochrome | #475569 | #64748b | #94a3b8 | #0f172a | #f8fafc |

### Setting Tambahan

| Key | Type | Options | Default |
|---|---|---|---|
| theme_name | text | — | My Website |
| theme_font | select | Inter · Plus Jakarta Sans · Poppins · Manrope · DM Sans · Outfit | Inter |
| theme_rounded | select | none · sm · md · lg · xl · 2xl · full | lg |
| site_logo | media | — | *empty* |
| nav_items | JSON | — | [{"label":"Beranda","url":"/"}, ...] |

---

## 09 — Admin Panel

Halaman-halaman di admin dan fungsinya.

> **⚠️ Scope v0.1.0**
>
> Di milestone pertama (v0.1.0), admin panel fokus pada: (1) Theme Editor, (2) Page Builder, (3) Login/Logout. Media Library dan halaman lainnya masuk milestone selanjutnya.

| Halaman | URL | Milestone | Deskripsi |
|---|---|---|---|
| **Login** | /admin/login | v0.1.0 | Form email + password. Tanpa "forgot password" dulu. |
| **Dashboard** | /admin | v0.1.0 | Halaman kosong dengan sapaan. Cukup "Selamat datang, [nama]". |
| **Theme Editor** | /admin/theme | v0.1.0 | Color picker, preset, font, rounded, site info. Save ke settings table. |
| **Page Builder** | /admin/pages/:id/build | v0.1.0 | Drag-drop sections, edit content per section, edit settings per section. |
| **Pages List** | /admin/pages | v0.1.0 | Daftar halaman, tambah, hapus, ubah status draft/published. |
| **Media Library** | /admin/media | v0.2.0 | Upload, browse, hapus file. Grid view. |
| **Contact Messages** | /admin/messages | v0.2.0 | Daftar pesan, mark as read, lihat detail. |
| **Users** | /admin/users | v0.3.0 | CRUD pengguna admin. |

### Page Builder — Detail Interaksi

Layout: 3 kolom.

- **Kiri**: Daftar section types (dari Registry), dikelompokkan per category. Bisa di-drag ke canvas atau klik + untuk tambah.
- **Tengah**: Canvas. Menampilkan daftar section yang sudah ditambahkan, diurutkan by `sort_order`. Bisa di-reorder via drag-drop. Setiap item menampilkan: icon, nama type, style badge, tombol toggle visibility, duplicate, edit, delete.
- **Kanan**: Editor panel. Muncul ketika section diklik "edit". Menampilkan 2 tab: **Content** (form fields sesuai Registry) dan **Style** (form settings sesuai Registry). Ada tombol Save di bawah.

### Auto-save Behavior

- Reorder section (drag-drop) → auto-save sort_order via AJAX.
- Toggle visibility → auto-save is_active via AJAX.
- Edit content/style → manual save (klik tombol Save).
- Semua save action menampilkan toast notification (success/error).

---

## 10 — Frontend Renderer

Cara frontend menampilkan halaman.

### Alur Render

1. User buka `/` (atau slug lain).
2. `IndexController` cari page berdasarkan slug, status = published.
3. Ambil semua sections milik page tersebut, urutkan by `sort_order`, filter `is_active = 1`.
4. Untuk setiap section, panggil `afterFetch()` di model → otomatis load content & settings dari DB, merge dengan default dari Registry.
5. Kirim data ke `themes/frontend/index.volt`.
6. Template loop sections, untuk setiap section: render `themes/frontend/sections/[type].volt` sebagai partial.

### Struktur Template Frontend

```
themes/frontend/
├── index.volt                 # Layout utama
├── partials/
│   ├── navbar.volt            # Navigasi (selalu sama)
│   ├── footer.volt            # Footer (selalu sama)
│   └── video_embed.volt       # Helper render video
└── sections/
    ├── hero.volt              # 4 style dalam 1 file
    ├── about.volt             # 4 style dalam 1 file
    ├── services.volt          # 4 style dalam 1 file
    ├── gallery.volt           # 5 style dalam 1 file
    ├── video.volt             # 3 style dalam 1 file
    ├── cta.volt               # 3 style dalam 1 file
    ├── stats.volt             # 3 style dalam 1 file
    ├── testimonials.volt      # 3 style dalam 1 file
    ├── contact.volt           # 4 style dalam 1 file
    └── faq.volt               # 2 style dalam 1 file
```

### Pattern 1 File = Multi Style

Setiap file section menggunakan `{% if s.style == 'xxx' %}...{% endif %}` untuk memilih variant. Ini disengaja supaya tidak terlalu banyak file. Contoh:

```twig
{# themes/frontend/sections/hero.volt #}
{% set s = settings %}
{% set c = content %}

{% if s.style == 'fullscreen' or s.style is empty %}
    {# ... fullscreen HTML ... #}
{% endif %}

{% if s.style == 'split' %}
    {# ... split HTML ... #}
{% endif %}

{% if s.style == 'minimal' %}
    {# ... minimal HTML ... #}
{% endif %}

{% if s.style == 'video_bg' %}
    {# ... video background HTML ... #}
{% endif %}
```

### Navbar

Navbar BUKAN section. Ia selalu render dari `partials/navbar.volt`. Data diambil dari settings: `nav_items` (JSON), `site_logo`, `theme_name`.

- Fixed top, background transparan → berubah putih/blur saat scroll (pakai Alpine.js `@scroll.window`).
- Mobile: hamburger menu yang toggle dropdown.
- Logo kiri, menu tengah/kanan.

### Footer

Footer BUKAN section. Ia selalu render dari `partials/footer.volt`. Data dari settings: `footer_text`, `footer_address`, `footer_phone`, `footer_email`, `nav_items`.

- Background gelap (var(--color-dark)).
- 3-4 kolom: logo+desc, menu, kontak.
- Copyright bar di bawah.

### Responsive

Semua section WAJIB responsive. Breakpoint: `sm` (640px), `md` (768px), `lg` (1024px). Gunakan class Tailwind-like yang di-convert ke CSS variables-based classes.

---

## 11 — File Structure

Struktur folder project. Wajib mengikuti ini.

```
skeleton-tavp/
├── app/
│   ├── controllers/
│   │   ├── IndexController.php       # Frontend: render page
│   │   ├── AdminController.php       # Admin: dashboard
│   │   ├── AuthController.php        # Admin: login/logout
│   │   ├── ThemeController.php       # Admin: theme editor CRUD
│   │   ├── PageController.php        # Admin: pages list + builder
│   │   ├── SectionController.php     # Admin: section AJAX CRUD
│   │   └── ApiContactController.php  # Frontend: contact form submit
│   ├── models/
│   │   ├── Layouts.php
│   │   ├── Pages.php
│   │   ├── Sections.php              # Punya afterFetch() untuk load content/settings
│   │   ├── SectionContent.php
│   │   ├── SectionSettings.php
│   │   ├── Settings.php
│   │   ├── Media.php
│   │   ├── Users.php
│   │   └── ContactMessages.php
│   └── providers/
│       ├── AuthProvider.php          # Login logic, session check
│       ├── ThemeProvider.php         # CSS variables generator, color helper
│       ├── SectionRegistry.php       # Registry container: register(), get(), all()
│       └── SectionRegistryBootstrap.php  # Definisi semua section types
├── config/
│   ├── config.php                    # DB, app name, debug, base URI
│   └── theme.php                     # Default colors, font, rounded
├── themes/
│   ├── admin/                        # Pakai Tailwind langsung
│   │   ├── layouts/main.volt
│   │   ├── partials/
│   │   │   ├── sidebar.volt
│   │   │   ├── navbar.volt
│   │   │   └── toast.volt
│   │   └── pages/
│   │       ├── dashboard.volt
│   │       ├── login.volt
│   │       ├── theme.volt
│   │       ├── pages/index.volt
│   │       └── pages/builder.volt
│   └── frontend/                     # Pakai CSS variables, BUKAN Tailwind
│       ├── index.volt
│       ├── partials/
│       │   ├── navbar.volt
│       │   ├── footer.volt
│       │   └── video_embed.volt
│       └── sections/
│           ├── hero.volt
│           ├── about.volt
│           ├── services.volt
│           ├── gallery.volt
│           ├── video.volt
│           ├── cta.volt
│           ├── stats.volt
│           ├── testimonials.volt
│           ├── contact.volt
│           └── faq.volt
├── public/
│   ├── index.php                     # Entry point, bootstrap Phalcon
│   ├── css/app.css                   # Compiled Tailwind (untuk admin)
│   ├── js/app.js                     # Alpine.js plugins (untuk admin)
│   └── uploads/                      # Uploaded files (gitignored)
├── migrations/
│   └── 001_initial_schema.sql        # Semua CREATE TABLE + seed
├── composer.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── .gitignore
```

---

## 12 — Versioning & Workflow

Menggunakan Zero-Based Versioning sesuai [0ver.org](https://0ver.org/).

### Aturan Versioning

| Format | Kapan Naik | Contoh |
|---|---|---|
| `0.MAJOR.0` | Ada perubahan yang **breaking**: schema berubah, API berubah, cara pakai berubah | 0.0.0 → 0.1.0 (initial release) |
| `0.MAJOR.MINOR` | Ada fitur baru yang **backwards compatible**: tambah section type, tambah halaman admin, dll | 0.1.0 → 0.1.1 (tambah media library) |
| `0.MAJOR.MINOR.PATCH` | Bug fix, typo, styling kecil, tanpa fitur baru | 0.1.0 → 0.1.0.1 (fix bug drag-drop) |

> **ℹ️ Kenapa 0.x.x?**
>
> Skeleton ini belum siap dianggap "stable". Selama masih di 0.x.x, breaking changes bisa terjadi di mana saja. Kalau sudah cukup matang dan dipakai di beberapa project nyata tanpa masalah, baru naik ke 1.0.0.

### Workflow Per Milestone

**1. Buat branch**
Format: `v0.X.0`. Misal: `git checkout -b v0.1.0`

**2. Eksekusi semua requirement di milestone**
Commit ke branch tersebut. Commit message bebas asli jelas.

**3. Testing manual**
Buka admin, buat page, tambah section, isi konten, lihat frontend. Pastikan semua berjalan.

**4. Merge ke main + tag**
`git checkout main && git merge v0.1.0 && git tag v0.1.0`

**5. Update PRD**
Ubah version di header PRD ini ke versi terbaru. Tandai milestone yang sudah selesai.

---

## 13 — Milestone v0.1.0

Scope pertama. Yang lainnya menyusul.

> **💡 Target**
>
> v0.1.0 = skeleton ini bisa dipakai untuk bikin website sederhana (1 halaman, multi-section) dari nol, tanpa coding, hanya lewat admin panel. Visual belum harus sempurna, tapi alur kerjanya sudah benar.

### Wajib Selesai di v0.1.0

#### Backend

- Bootstrap Phalcon 5 (DI, Router, Session, Security).
- Semua 8 tabel di-create via migration SQL.
- Semua 8 model (CRUD dasar).
- SectionRegistry + SectionRegistryBootstrap (10 section types sesuai Section 07).
- Sections model dengan `afterFetch()` yang load & merge content/settings.
- ThemeProvider dengan `cssVariables()` dan `hexToRgb()`.
- AuthProvider (login, logout, session check).
- IndexController yang render page + sections.
- API endpoint: `POST /api/contact`.

#### Admin Panel

- Login page (email + password). 1 user default di-seed.
- Dashboard (halaman sapaan aja).
- Theme Editor: color picker (5 warna), 6 preset, font select, rounded select, site name. Save ke settings table.
- Pages List: daftar halaman, tombol tambah, hapus, toggle draft/published.
- Page Builder: 3 kolom layout (library, canvas, editor). Drag-drop reorder. Klik + untuk tambah section. Edit content & style per section. Toggle visibility. Delete section. Duplicate section.

#### Frontend

- `index.volt` yang inject CSS variables, render navbar, loop sections, render footer.
- `navbar.volt`: fixed, transparan→blur on scroll, mobile menu.
- `footer.volt`: 3 kolom, copyright.
- `video_embed.volt`: handle YouTube, Vimeo, MP4.
- 10 file section templates (hero, about, services, gallery, video, cta, stats, testimonials, contact, faq). Masing-masing dengan semua style variants.
- Contact form section: AJAX submit, success message tanpa reload.
- FAQ section: accordion dengan 1-terbuka-saja.

#### Tidak Wajib di v0.1.0 (Tidak Kerjakan)

- Media Library UI (untuk sementara, field media diisi manual dengan URL atau path).
- Richtext editor (untuk sementara, field richtext pakai textarea biasa).
- Users management (cukup 1 user default).
- Contact messages list di admin.
- SEO fields (seo_title, seo_description diabaikan dulu).
- Dark mode di admin panel.
- Export/import data.

---

## 14 — Aturan Eksekusi

Aturan yang WAJIB diikuti oleh AI executor.

> **🚨 Wajib Baca Sebelum Mulai**
>
> Bagian ini bukan saran. Ini adalah **constraint**. Langgar = hasil tidak sesuai ekspektasi.

### 1. Jangan Invent Fitur

Jangan tambahkan fitur yang tidak ada di PRD ini. Tidak ada "nice to have", tidak ada "kebetulan bisa ditambahkan". Kalau ragu, **jangan tambah**.

### 2. Schema = Suci

Jangan tambah kolom, jangan hapus kolom, jangan ganti tipe data, jangan tambah tabel, jangan hapus tabel. Schema di Section 06 adalah final untuk v0.1.0.

### 3. Registry = Suci

Jangan tambah section type, jangan hapus, jangan ubah field key, jangan ubah options. Registry di Section 07 adalah final untuk v0.1.0.

### 4. Frontend Pakai CSS Variables

Jangan hardcode warna di frontend section templates. Semua warna harus pakai `var(--color-xxx)`. Satu-satunya tempat boleh hardcode: admin panel (pakai Tailwind).

### 5. 1 File Section = Multi Style

Jangan buat file terpisah per style. Semua style variant dari 1 section type harus dalam 1 file, dipisahkan dengan `{% if s.style == 'xxx' %}`.

### 6. Admin Pakai Tailwind, Frontend Tidak

Admin panel boleh (dan sebaiknya) pakai Tailwind utility classes. Frontend section templates TIDAK BOLEH bergantung pada Tailwind — semua styling via CSS variables + custom CSS.

### 7. Output Format

Keluaran harus berupa file-file yang bisa langsung di-save ke struktur folder di Section 11. Jangan keluarin dalam bentuk narasi "buat file ini isinya begini". Keluarin dalam format code block dengan nama file di atasnya.

### 8. Urutan Eksekusi

Kerjakan dalam urutan ini:

1. **config/** — config.php, theme.php
2. **composer.json** — dependency
3. **migrations/** — SQL schema + seed
4. **app/models/** — semua 8 model
5. **app/providers/** — Auth, Theme, SectionRegistry, Bootstrap
6. **public/index.php** — bootstrap
7. **themes/admin/** — layout, partials, pages
8. **themes/frontend/partials/** — navbar, footer, video_embed
9. **themes/frontend/sections/** — 10 section files
10. **themes/frontend/index.volt** — main renderer
11. **public/js/app.js** — Alpine plugins
12. **tailwind.config.js** + **package.json**

### 9. Jangan Tanya Hal yang Sudah Ada di PRD

"Gimana cara kerja section registry?" — sudah di Section 07. "Apa aja field-nya hero?" — sudah di Section 07. "Warna defaultnya apa?" — sudah di Section 08. Hanya tanya kalau ada konflik atau ambiguitas yang **benar-benar** tidak bisa di-resolve dari PRD ini.

### 10. Kalau Menemui Masalah

Berhenti. Jelaskan masalahnya secara spesifik: file mana, baris mana, error apa, expected vs actual apa. Jangan melanjutkan dengan asumsi sendiri.

---

*TAVP Skeleton CMS — PRD v0.0.0*
*Zero-Based Versioning · [0ver.org](https://0ver.org/)*
