# TAVPBox — Dev Environment All-in-One

TAVPBox adalah dev environment lokal ala **Lando**, tapi berbasis **LXC**
bukan Docker. Hasilnya: jauh lebih irit RAM, dan **Phalcon tidak perlu
di-compile ulang tiap kali laptop mati/restart**.

```
1 laptop = banyak "VPS mini". Tiap project = 1 box LXC terisolasi.
```

| | Lando (Docker) | TAVPBox (LXC) |
|---|---|---|
| RAM / 20 project | ~40 GB | ~700 MB (Windows) · ~600 MB (Linux) |
| Phalcon reinstall? | Sering | Sekali (di-bake ke box) |
| Auto domain | `*.lndo.site` | `*.tavp.local` |
| Mail per-project | `mail.*.lndo.site` | `mail.*.tavp.local` |
| Multi-distro | ✗ | ✓ (Ubuntu/Alpine/Debian/...) |
| Multi-stack | ✓ | ✓ (TAVP/Laravel/Python/Node/Go/...) |
| Production | ✗ | ✓ (banyak site di 1 VPS) |

---

## Prasyarat

- **Linux**: distro apa pun (Ubuntu/Debian/Fedora/Arch/...).
- **Windows**: Windows 10/11 64-bit, WSL2 aktif.
- **macOS**: Homebrew terpasang.
- Tidak perlu paham nginx/docker/LXC.

---

## 1. Install

### Windows (PowerShell as Administrator)

```powershell
# Cara cepat
iex (irm 'https://get.tavp.dev/setup-tavpbox.ps1' -UseB)
```

Atau manual:
```powershell
# 1. Enable WSL2
wsl --install --no-distribution

# 2. Install Ubuntu
wsl --install -d Ubuntu

# 3. Install LXD di dalam WSL
wsl -d Ubuntu -- sudo snap install lxd
wsl -d Ubuntu -- sudo lxd init --auto

# 4. Download binary dari GitHub Releases
# https://github.com/tavp-stack/tavpbox/releases

# 5. Jalankan
.\tavpbox.exe init
```

### macOS

```bash
# Install via Lima
curl -fsSL https://get.tavp.dev/setup-tavpbox.sh | bash
```

### Linux

```bash
# Install langsung
sudo curl -fsSL https://get.tavp.dev/setup-tavpbox.sh | bash
```

Installer memasang **LXD**, **Caddy**, **dnsmasq**, dan menyalin CLI
`tavpbox` ke PATH.

---

## 2. Inisialisasi (`tavpbox init`)

Jalankan sekali. TUI akan muncul:

```
⚡ TAVPBox — Initial Setup

Select base distro for your boxes:

  > ubuntu/24.04
    alpine/3.20
    debian/12
    fedora/40
    archlinux

  ↑↓ navigate · enter select
```

- **Distro**: Box dibuat dari image distro ini.
- **Domain**: tiap box dapat subdomain otomatis `namabox.tavp.local`.
- **RAM/CPU**: limit per box agar 1 box tidak memakan semua resource.

Setelah init, **Caddy** (reverse proxy) dan **DNS wildcard** sudah jalan.

---

## 3. Buat Box (`tavpbox create`)

Tanpa argumen → TUI interaktif:

```
⚡ Create Box (step 1/4)

Box name:

  [Type name and press Enter]
  (becomes: <name>.tavp.local)
```

Atau dari file `.tavpbox.yml`:

```bash
tavpbox create
```

### Contoh `.tavpbox.yml`

```yaml
name: my-project
stack: tavp
services:
  - mariadb
  - redis
  - mailpit
webroot: .
env:
  APP_NAME: "My Project"
  APP_ENV: local
tooling:
  artisan:
    cmd: php artisan
  composer:
    cmd: composer
```

Yang dilakukan `tavpbox create`:

1. `lxc launch` image distro pilihan.
2. Pasang limit RAM/CPU.
3. **Map folder lo** → `/var/www/html` di box (persis seperti Lando
   memetakan webroot).
4. Pasang **stack** (PHP + nginx + composer, atau Python/Node/Go/...).
5. Pasang **services** yang dipilih.
6. Inject **environment variables** ke container.
7. Daftarkan domain + mail ke Caddy/DNS.

---

## 4. Jalankan & Akses

```bash
tavpbox start my-project
```

Buka browser:

- **App** : `http://my-project.tavp.local`
- **Mail**: `http://mail.my-project.tavp.local`  ← OTP/email per-project
- **DB UI**: `http://pma.my-project.tavp.local` (kalau pilih phpmyadmin)

### Perintah Harian

```bash
tavpbox list                  # semua box + status
tavpbox stop my-project       # matikan → RAM balik 0
tavpbox start my-project      # nyalakan (detik, Phalcon tetap ada)
tavpbox rebuild my-project    # recreate container, data tetap
tavpbox ssh my-project        # masuk terminal box
tavpbox logs my-project       # lihat logs
tavpbox destroy my-project    # hapus box
tavpbox snapshot my-project   # backup (production)
```

### Custom Tooling

Jika `.tavpbox.yml` punya `tooling:` section, bisa langsung:

```bash
tavpbox artisan migrate       # php artisan migrate
tavpbox composer install      # composer install
tavpbox npm run dev           # npm run dev
```

---

## 5. Semua Commands

### Lifecycle

| Command | Description |
|---------|-------------|
| `tavpbox init` | Setup pertama kali (TUI wizard) |
| `tavpbox create` | Buat box baru (TUI wizard atau dari file) |
| `tavpbox start <name>` | Start box |
| `tavpbox stop <name>` | Stop box (RAM langsung bebas) |
| `tavpbox restart <name>` | Restart box |
| `tavpbox destroy <name>` | Hapus box permanen |
| `tavpbox rebuild <name>` | Rebuild box (data di folder tetap ada) |

### Monitoring

| Command | Description |
|---------|-------------|
| `tavpbox list` | Lihat semua box |
| `tavpbox status` | Lihat status system + resource usage |
| `tavpbox info <name>` | Detail box (IP, stack, services) |
| `tavpbox logs <name>` | Lihat logs (nginx, PHP, system) |
| `tavpbox snapshot <name>` | Buat snapshot |

### Exec & SSH

| Command | Description |
|---------|-------------|
| `tavpbox ssh <name>` | Masuk terminal box |
| `tavpbox ssh <name> <cmd>` | Jalankan command di box |
| `tavpbox exec <name> <cmd>` | Jalankan command di box |

### Plugin & Images

| Command | Description |
|---------|-------------|
| `tavpbox plugin list` | Lihat plugin terinstall |
| `tavpbox plugin install <file>` | Install plugin dari YAML |
| `tavpbox plugin remove <name>` | Hapus plugin |
| `tavpbox images list` | Lihat cached images |
| `tavpbox images pull <image>` | Download & cache image |

---

## 6. Stacks

| Stack | Description | Components |
|-------|-------------|------------|
| `tavp` | TAVP Stack (PHP + Nginx + Node.js) | PHP 8.3, Nginx, Node 20 |
| `laravel` | Laravel | PHP 8.3, Nginx |
| `node` | Node.js | Node 20, Nginx |
| `python` | Python | Python 3, Nginx |
| `blank` | Empty container | Basic tools |

## 7. Services

| Service | Description | Port |
|---------|-------------|------|
| `mariadb` | MariaDB database | 3306 |
| `postgres` | PostgreSQL database | 5432 |
| `redis` | Redis cache | 6379 |
| `mailpit` | Email testing | 8025, 1025 |
| `phpmyadmin` | Database admin UI | 8080 |

---

## 8. Service Plugin (tambah sendiri)

Tiap service = 1 file YAML di `~/.tavpbox/plugins/services/`. Contoh:

```yaml
name: solr
display_name: "Apache Solr"
description: "Search engine"
category: service
provision: scripts/solr.sh
ports:
  - 8983
```

Taruh file → langsung muncul di TUI `create`. TAVPBox bisa **unlimited**
karena definisinya terbuka.

---

## 9. RAM Comparison

```
Scenario: 20 development projects running simultaneously

Docker (Lando):
  dockerd         :  ~200MB
  20 containers   :  ~20 × 150MB = ~3000MB
  Total           :  ~3.2GB

LXC (TAVPBox):
  lxd daemon      :  ~30MB
  20 containers   :  ~20 × 35MB = ~700MB
  Caddy + dnsmasq :  ~15MB
  Total           :  ~745MB

  Savings: ~2.4GB (75% less RAM!)
```

---

## 10. Production & TAVP Cloud

TAVPBox dipakai juga di **VPS production**: banyak website, 1 VPS, tiap box
terisolasi + resource limit. Untuk **jual hosting ke orang asing** (untrusted
tenant), pakai mode **VM** (LXD `--vm`) — evolusi ke **tavp-cloud**.

---

## 11. Troubleshooting

- **Domain tidak resolve (Windows)**: IP WSL2 bisa berubah tiap reboot.
  Jalankan lagi `tavpbox init`.
- **Caddy gagal**: pastikan port 80/443 bebas. Cek log Caddy.
- **dnsmasq bentrok systemd-resolved**: arahkan `/etc/resolv.conf` ke dnsmasq.
- **Folder Windows tak kelihatan di box**: pakai path WSL
  (`/mnt/c/Users/...`), bukan `C:\...`.
- **Container tidak bisa start**: `tavpbox logs <name>` untuk cek error.

---

## Links

- **Gitea (primary)**: https://git.glotama.com/tavp-stack/tavp-box
- **GitHub (mirror)**: https://github.com/tavp-stack/tavpbox
- **Releases**: https://github.com/tavp-stack/tavpbox/releases

Lisensi: MIT
