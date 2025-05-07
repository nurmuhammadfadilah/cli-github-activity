# GitHub Activity CLI

Sebuah antarmuka baris perintah (CLI) sederhana yang dibuat dengan Node.js untuk mengambil dan menampilkan aktivitas publik terbaru dari pengguna GitHub yang ditentukan.

---

## 🚀 Fitur

- Mengambil aktivitas publik terbaru GitHub menggunakan API GitHub
- Mendukung berbagai jenis aktivitas seperti Push, Issues, Star, Fork, dan Pull Request
- Mudah digunakan melalui terminal

---

## 📦 Instalasi

1. Clone repositori:

```bash
git clone <repository-url>
cd github-activity
```

2. Instal dependensi:

```bash
npm install
```

3. Daftarkan CLI secara global:

```bash
npm link
```

---

## 🧪 Penggunaan

Jalankan CLI dengan nama pengguna GitHub:

```bash
github-activity <username>
```

Jalankan CLI tanpa npm link:

```bash
node bin/github-activity.js <username>
```

### Contoh

```bash
github-activity nurmuhammadfadilah
```

### Contoh Output

```
🔄 Melakukan push 3 commit ke <username>/developer-roadmap
🐛 Membuka issue baru di <username>/developer-roadmap
⭐ Memberi bintang pada <username>/developer-roadmap
🔀 Menggabungkan pull request di <username>/developer-roadmap
```

---

## 🛠 Struktur Folder

```
github-activity/
├── bin/
│   └── github-activity.js    # Titik masuk CLI
├── src/
│   └── fetchActivity.js      # Logika pengambilan data dari GitHub API
├── package.json              # Konfigurasi proyek
└── README.md                 # File dokumentasi ini
```

---
