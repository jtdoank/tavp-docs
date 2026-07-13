---
title: TavpHub — Admin Panel
---

# TavpHub

**TavpHub** adalah admin panel gratis untuk ekosistem TAVP — "Laravel Nova-nya Phalcon", tapi **open source dan bebas biaya** (Nova berbayar per project, TavpHub MIT). Cukup definisikan satu `Resource` per model, panelnya (dashboard, CRUD, filter, metrik, aksi, lensa, relasi, otorisasi) langsung jadi.

## Install

```bash
composer require tavp/tavphub
tavp hub:install
```

`hub:install` akan: menambahkan dependency, membuat `config/hub.php` (dengan auto-discovery aktif), dan mendaftarkan route di `routes/web.php` (`HubModule::routes($router)` + `ResourceRegistry::discover(...)`).

TavpHub butuh `tavp/core` (otomatis) dan opsional `tavp/tavpblocks` untuk komponen UI siap pakai (StatCard, Pagination, Badge, Dropdown, SearchBar, Chart, dsb).

## 1. Buat Resource

Satu class = satu menu admin. Mirip Nova. Cara paling cepat — pakai generator CLI:

```bash
tavp hub:make:resource Product
tavp hub:make:resource Product --model=App\Models\Product --icon=cube
```

Perintah di atas membuat `app/Resources/ProductResource.php` (dengan `columns`, `fields`, `filters`, `metrics`, `searchableColumns`) dan — bila auto-discovery aktif di `config/hub.php` — langsung muncul di sidebar tanpa edit config.

Atau tulis manual:

```php
use Tavp\Hub\Resource;

class UserResource extends Resource
{
    public function label(): string   { return 'Users'; }
    public function model(): string   { return 'App\\Models\\User'; }

    public function columns(): array
    {
        return [
            ['key' => 'id',         'label' => 'ID',    'sortable' => true],
            ['key' => 'name',       'label' => 'Name',  'sortable' => true],
            ['key' => 'email',      'label' => 'Email', 'sortable' => false],
            ['key' => 'created_at', 'label' => 'Joined', 'sortable' => true],
        ];
    }

    public function fields(): array
    {
        return [
            ['name' => 'name',  'type' => 'text',     'label' => 'Name',  'required' => true],
            ['name' => 'email', 'type' => 'email',    'label' => 'Email', 'required' => true],
            ['name' => 'active','type' => 'toggle',   'label' => 'Active'],
        ];
    }
}
```

Daftarkan lewat auto-discovery (default dari `hub:install`) atau manual:

```php
// Auto-discovery: scan folder berisi Resource (sudah dijalankan di routes/web.php)
\Tavp\Hub\ResourceRegistry::discover(
    __DIR__ . '/../app/Resources',
    'App\\Resources'
);

// Atau manual satu per satu
\Tavp\Hub\ResourceRegistry::register(new UserResource());

// Atau via config('hub.resources') => ['user' => \App\Resources\UserResource::class]
```

Setelah terdaftar, menu muncul di sidebar dan route `/admin/resource/users` aktif otomatis. Tidak perlu wiring route manual.

> **Backwards compatible:** resource bisa didaftarkan lewat `ResourceRegistry`, `discover()`, maupun `config('hub.resources')`. TavpHub membaca ketiganya.

## 2. Filters

Saring tabel index. `Filter` sudah bisa dipakai langsung (default: `where(column, value)`), subclass kalau butuh logika custom.

```php
use Tavp\Hub\Filter;

public function filters(): array
{
    return [
        (new Filter('status'))
            ->type('select')
            ->options(['active', 'inactive', 'banned'])
            ->default('active'),

        (new Filter('created_from'))->type('date'),

        // Custom: subclass untuk range tanggal, raw SQL, dsb
        new class('premium') extends Filter {
            public function apply($query, $value): void {
                if ($value) { $query->where('plan', '!=', 'free'); }
            }
        },
    ];
}
```

## 3. Metrics (Dashboard)

Kartu angka di dashboard (dan di atas tabel resource). Mirip "Metrics"-nya Nova.

```php
use Tavp\Hub\ValueMetric;
use Tavp\Hub\TrendMetric;

public function metrics(): array
{
    return [
        (new ValueMetric('total', 'Total Users'))
            ->aggregate('count'),

        (new ValueMetric('mrr', 'MRR'))
            ->aggregate('sum', 'revenue')
            ->suffix(' USD')
            ->compareTo(fn ($m) => /* nilai periode lalu */ 0), // munculkan delta +12%

        (new TrendMetric('signups', 'Signups'))->range('30d'),
    ];
}
```

`compareTo()` membandingkan dengan periode sebelumnya dan menampilkan badge delta hijau/merah.

## 4. Actions (Bulk)

Jalankan aksi massal terhadap baris terpilih (export, publish, ban, dsb).

```php
use Tavp\Hub\Action;

public function actions(): array
{
    return [
        new class('export_csv', 'Export CSV') extends Action {
            public function handle(array $ids, string $modelClass): void {
                // $ids = id terpilih; $modelClass = model resource
            }
        },
    ];
}
```

Centang baris di tabel → pilih aksi di dropdown → jalan.

## 5. Lenses

Tampilan alternatif yang sudah difilter dari satu resource (Nova-style lenses).

```php
use Tavp\Hub\Lens;

public function lenses(): array
{
    return [
        new class('admins', 'Admins') extends Lens {
            public function query($query): void {
                $query->where('role', 'admin');
            }
            // optional: kolom berbeda untuk lensa ini
            public function columns(): array { return [/* ... */]; }
        },
    ];
}
```

Akses lewat tombol switcher di atas tabel: `/admin/resource/users/lens/admins`.

## 6. Relationships

Field `belongsTo` otomatis jadi dropdown yang diisi dari resource terkait.

```php
public function fields(): array
{
    return [
        ['name' => 'name', 'type' => 'text'],
        // dropdown diisi dari resource 'roles'
        ['name' => 'role_id', 'type' => 'belongsTo',
         'resource' => 'roles', 'label_column' => 'name'],
    ];
}

// Atau deklaratif lewat relations():
public function relations(): array
{
    return [
        new \Tavp\Hub\Relation('role_id', 'belongsTo', 'roles', 'name', 'role_id'),
    ];
}
```

## 7. Policies (Authorization)

Kontrol akses per ability. `before()` bisa short-circuit semua.

```php
use Tavp\Hub\Policy;

class UserPolicy extends Policy
{
    public function before(mixed $user): ?bool
    {
        return $user?->isSuperAdmin() ? true : null;
    }
    public function delete(mixed $user, mixed $model): bool
    {
        return $user !== null && $user->id !== $model->id;
    }
}

// di Resource:
public function policy(): ?string { return UserPolicy::class; }
```

Ability yang didukung: `viewAny`, `view`, `create`, `update`, `delete`, `restore`, `forceDelete`.

## 8. Search

Aktifkan pencarian global antar kolom:

```php
public function searchableColumns(): array
{
    return ['name', 'email'];
}
```

Kotak search di atas tabel akan mencari ke semua kolom tersebut (OR).

## Komponen UI (tavpblocks)

TavpHub merender seluruh panel lewat komponen **tavpblocks** bila terpasang — StatCard, Badge, Alert, Card, SearchBar, Dropdown, Pagination, Button, dan Chart (Chart.js). Tanpa tavpblocks, TavpHub fallback ke HTML Tailwind biasa — panel tetap jalan.

### Tema terang & gelap (dark/light)

Shell admin TavpHub menggunakan pendekatan **shadcn/zenith**: Tailwind dengan `darkMode: 'class'`, aksen warna **brand** (indigo `#4f46e5`), dan sudut membulat (`rounded-xl`). Di pojok kanan atas ada tombol **Toggle Theme** yang:

- menyimpan pilihan ke `localStorage` (`hub-theme`),
- mengikuti preferensi sistem (`prefers-color-scheme`) bila belum dipilih,
- dan langsung membalik kelas `dark` di `<html>` tanpa reload.

Semua komponen **theme-adaptive**: mereka menulis kelas Tailwind `dark:` sehingga otomatis mengikuti tema aktif. Mau memaksa satu tema? lewat parameter `theme`:

```php
// 'light' | 'dark' | 'auto' (default: ikut tema aktif)
UI::statCard('Users', 1284, '+12%', 'green', '👥', 'brand', $sparkline, 'auto');
```

### StatCard (kartu metrik)

```php
UI::statCard(
    label:    'Total Users',
    value:    1284,
    trend:    '+12%',        // string delta, contoh dari ValueMetric::calculate()
    trendColor:'green',      // green | red | yellow | gray
    icon:     '👥',          // glyph/emoji apa pun
    color:    'brand',       // brand | blue | green | red | yellow | purple | pink | gray
    sparkline:[3,5,4,8,7,10,9], // array angka -> sparkline SVG otomatis
    theme:    'auto'
);
```

Di dashboard, metrik `TrendMetric` otomatis dapat sparkline dari seri bulannya; metrik `ValueMetric` dapat badge delta hijau/merah dari `compareTo()`.

### Badge

```php
UI::badge('Active', 'green', 'soft');   // variant: soft | outline | solid
UI::badge('Pro',     'brand', 'solid'); // 8 warna: gray,green,red,yellow,blue,indigo,purple,pink
```

### Alert

```php
UI::alert('Resource disimpan.', 'success', 'Tersimpan', dismissible: true);
// type: success | error | warning | info
```

### Card (panel)

```php
UI::card(
    title:  'Latest Activity',
    body:   '<p>User admin login 2 menit lalu.</p>',
    footer: '',
    actions: '<button class="...">Export</button>', // slot header kanan
    theme:  'auto'
);
```

### Chart (trend metrik)

```php
UI::chart('Signups', $series, 'line', 220); // $series = [label => nilai]
```

`UI::chart()` merender `<canvas>` Chart.js yang responsif (mengisi container, tidak overflow).

### Lihat semua komponen

Repo `tavpblocks` menyertakan demo yang merender seluruh komponen secara langsung dari class PHP: `examples/components-full-demo.html` (buka di browser; ada tombol **Toggle Dark**). Generate ulang dengan `php examples/render-full-demo.php`.

## Lisensi

MIT — gratis selamanya, boleh komersial.
