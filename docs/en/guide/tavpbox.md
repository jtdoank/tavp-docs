# TAVP Box — Dev Environment All-in-One

TAVP Box adalah dev environment lokal ala **Lando**, tapi berbasis **LXC**
bukan Docker. Hasilnya: jauh lebih irit RAM, dan **Phalcon tidak perlu
di-compile ulang tiap kali laptop mati/restart**.

```
1 laptop = banyak "VPS mini". Tiap project = 1 box LXC terisolasi.
```

| | Lando (Docker) | TAVP Box (LXC) |
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

### Linux (native)
```bash
sudo bash install/install-linux.sh
```

### Windows (WSL2)
Buka **PowerShell sebagai Administrator**:
```powershell
powershell -ExecutionPolicy Bypass -File install/install-windows.ps1
```
Setelah reboot (kalau WSL baru di-install), jalankan installer itu lagi.

> **Tips:** Setelah terpasang, lo bisa gunakan GUI desktop **TAVP Box Desktop**  
> (unduh di [release tavpbox-desktop](https://github.com/tavp-stack/tavpbox-desktop/releases)).

### macOS (Lima)
```bash
bash install/install-mac.sh
```

Installer memasang **LXD**, **whiptail** (TUI), **jq**, dan menyalin CLI
`tavpbox` ke PATH.

---

## 2. Inisialisasi (`tavpbox init`)

Jalankan sekali. TUI akan muncul:

```
Pilih base distro:
  ⮞ Ubuntu 24.04      (default, stabil, LXD resmi)
    Alpine 3.20      (paling irit RAM)
    Debian 12 / Fedora / Arch / Rocky / openSUSE / Mint / Manjaro / Void
    Lainnya...       (ketik nama distro)
Domain suffix: tavp.local
RAM max/box: 512MB
CPU max/box: 1
```

- **Distro**: 10 populer + "lainnya". Box dibuat dari image distro ini.
- **Domain**: tiap box dapat subdomain otomatis `namabox.tavp.local`.
- **RAM/CPU**: limit per box agar 1 box tidak memakan semua resource.

Setelah init, **Caddy** (reverse proxy) dan **DNS wildcard** sudah jalan.

---

## 3. Buat Box (`tavpbox create`)

Tanpa argumen → TUI interaktif:

```
Nama box : project1
Stack    : tavp
Phalcon  : 5.16          (kosong = tanpa Phalcon)
Folder   : /path/ke/project   (jadi webroot box)
Services : [✓] mariadb [✓] redis [✓] mailpit [✓] phpmyadmin
```

Atau dari file (alak `.lando.yml`):

```bash
tavpbox create --from tavpbox.yml
```

Yang dilakukan `tavpbox`:

1. `lxc launch` image distro pilihan.
2. Pasang limit RAM/CPU.
3. **Map folder lo** → `/var/www/html` di box (persis seperti Lando
   memetakan webroot).
4. Pasang **stack** (PHP + nginx + composer, atau Python/Node/Go/...).
5. **Bake Phalcon** kalau dipilih — sekali saja, persist across restart.
6. Pasang **services** yang dipilih.
7. Daftarkan domain + mail ke Caddy/DNS.

### Contoh `tavpbox.yml`

```yaml
name: project1
stack: tavp
phalcon: "5.16"
path: /home/user/projects/cms
services:
  - mariadb
  - redis
  - mailpit
  - phpmyadmin
```

---

## 4. Jalankan & Akses

```bash
tavpbox start project1
```

Buka browser:

- **App** : `http://project1.tavp.local`
- **Mail**: `http://mail.project1.tavp.local`  ← OTP/email per-project
- **DB UI**: `http://pma.project1.tavp.local` (kalau pilih phpmyadmin)

Perintah harian:

```bash
tavpbox list              # semua box + status
tavpbox stop project1     # matikan → RAM balik 0
tavpbox start project1    # nyalakan (detik, Phalcon tetap ada)
tavpbox rebuild project1  # recreate container, data tetap
tavpbox ssh project1      # masuk terminal box
tavpbox mail project1     # buka mailpit
tavpbox destroy project1  # hapus box
tavpbox snapshot project1 # backup (production)
```

---

## 5. Multi-Project (20 box sekaligus)

Karena tiap box cuma ~30 MB, 20 project aman:

```bash
tavpbox create   # project1
tavpbox create   # project2
tavpbox create   # project3
...
tavpbox list
```

Masing-masing dapat domain sendiri:

```
http://project1.tavp.local   + mail.project1.tavp.local
http://project2.tavp.local   + mail.project2.tavp.local
http://project3.tavp.local   + mail.project3.tavp.local
```

Email **tidak tercampur** karena tiap box punya mailpit sendiri.

---

## 6. Service Plugin (tambah sendiri)

Tiap service = 1 file `*.tavp.sh` di `~/.tavpbox/services/`. Contoh
`solr.tavp.sh`:

```bash
TVP_NAME="solr"
TVP_DESC="Apache Solr search"
TVP_CATEGORY="search"
TVP_PORTS=(8983)
TVP_UI_PORT="8983"
TVP_UI_SUBDOMAIN="solr"
TVP_INSTALL_apt='apt-get install -y solr-tomcat && service solr start'
TVP_INSTALL_apk='apk add solr && rc-service solr start'
# ... per distro: dnf / zypper / pacman / xbps
```

Taruh file → langsung muncul di TUI `create`. Lando punya ~30 plugin;
TAVP Box bisa **unlimited** karena definisinya terbuka.

Service bawaan: `mariadb mysql postgres mongodb redis memcached
elasticsearch solr varnish mailpit mailhog phpmyadmin adminer nginx apache`.

Stack bawaan: `tavp laravel symfony wordpress python node go ruby blank`.

---

## 7. Production & TAVP Cloud

TAVP Box dipakai juga di **VPS production**: banyak website, 1 VPS, tiap box
terisolasi + resource limit. Untuk **jual hosting ke orang asing** (untrusted
tenant), pakai mode **VM** (LXD `--vm`) — evolusi ke **tavp-cloud**.

---

## 8. TAVP Box Desktop (GUI)

Supaya tidak perlu terminal, pakai **TAVP Box Desktop** — aplikasi native (Rust + Slint)
yang membungkus `tavpbox` CLI dengan antarmuka grafis:

- List box live (status, IP, distro)
- Tombol Start / Stop / Open / Destroy
- Wizard buat box baru (pilih distro, stack, service)
- Pengaturan (cek dependensi, install otomatis)

Unduh installer untuk Windows (`.exe`), macOS (`.dmg`), atau Linux (`.AppImage`)
di [halaman rilis](https://github.com/tavp-stack/tavpbox-desktop/releases).

---

## 9. Troubleshooting

- **Domain tidak resolve (Windows)**: IP WSL2 bisa berubah tiap reboot.
  Jalankan lagi `install/install-windows.ps1`.
- **Caddy gagal**: pastikan port 80/443 bebas. Cek log Caddy.
- **dnsmasq bentrok systemd-resolved**: arahkan `/etc/resolv.conf` ke dnsmasq.
- **Folder Windows tak kelihatan di box**: pakai path WSL
  (`/mnt/c/Users/...`), bukan `C:\...`.

Lisensi: MIT
