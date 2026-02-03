# 🚜 Duren Farm Dashboard

Selamat datang di repository proyek **Duren Farm**. Ini adalah aplikasi web dashboard modern yang dibangun untuk membantu manajemen operasional bisnis pertanian durian. Aplikasi ini mencakup fitur pengelolaan produk, analisis penjualan, manajemen pesanan, dan ulasan pelanggan.

## 📋 Deskripsi

**Duren Farm Dashboard** adalah sistem manajemen terpadu yang dirancang untuk memudahkan pemilik bisnis dalam memantau dan mengelola aktivitas harian mereka. Dengan antarmuka yang responsif dan fitur yang lengkap, aplikasi ini membantu dalam pengambilan keputusan berbasis data.

## ✨ Fitur Utama

Aplikasi ini memiliki beberapa halaman utama dengan fungsionalitas spesifik:

- **🏠 Dashboard Utama**: Ringkasan cepat kinerja bisnis, statistik penjualan, dan notifikasi penting.
- **📦 Manajemen Produk (`ProductPage`)**: Kelola inventaris durian, tambahkan produk baru, edit detail, dan atur stok.
- **📊 Analitik (`AnalyticsPage`)**: Visualisasi data penjualan dan kinerja toko menggunakan grafik interaktif (Chart.js) untuk wawasan yang lebih mendalam.
- **📝 Detail Pesanan (`OrderDetailPage`)**: Pantau status pesanan pelanggan, rincian transaksi, dan riwayat pemesanan.
- **⭐ Ulasan Pelanggan (`ReviewPage`)**: Kelola dan tanggapi ulasan dari pelanggan untuk menjaga reputasi dan kepuasan pelanggan.
- **⚙️ Pengaturan (`SettingsPage`)**: Konfigurasi aplikasi, termasuk metode pembayaran, jam operasional toko, dan preferensi akun.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi web modern untuk memastikan performa tinggi dan kemudahan pengembangan:

- **[React](https://react.dev/)**: Library UI untuk membangun antarmuka pengguna yang interaktif.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript yang menambahkan tipe statis untuk kode yang lebih aman dan mudah dipelihara.
- **[Vite](https://vitejs.dev/)**: Build tool super cepat untuk pengembangan frontend modern.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first untuk styling yang cepat dan responsif (menggunakan v4).
- **[Chart.js](https://www.chartjs.org/)** & **[react-chartjs-2](https://react-chartjs-2.js.org/)**: Untuk visualisasi data dan grafik yang menarik.
- **[React Router](https://reactrouter.com/)**: Untuk navigasi antar halaman (SPA).

## 🚀 Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer lokal Anda:

### Prasyarat

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi terbaru direkomendasikan).

### Instalasi

1. **Clone repository ini** (jika menggunakan git) atau unduh filenya.
2. **Buka terminal** di direktori root project.
3. **Instal dependensi** dengan menjalankan perintah:
   ```bash
   npm install
   ```

### Menjalankan Server Development

Untuk memulai server pengembangan lokal:
```bash
npm run dev
```
Aplikasi akan dapat diakses di `http://localhost:5173` (atau port lain yang ditampilkan di terminal).

### Build untuk Produksi

Untuk membuat build produksi yang optimal:
```bash
npm run build
```

## 📂 Struktur Folder

```
duren-farm/
├── public/              # Aset statis publik
├── src/
│   ├── assets/          # Gambar, font, dan aset lainnya
│   ├── components/      # Komponen UI yang dapat digunakan kembali
│   ├── pages/           # Halaman-halaman utama aplikasi
│   │   ├── Dashboard.tsx
│   │   ├── ProductPage.tsx
│   │   ├── AnalyticsPage.tsx
│   │   ├── OrderDetailPage.tsx
│   │   ├── ReviewPage.tsx
│   │   └── SettingsPage.tsx
│   ├── types/           # Definisi tipe TypeScript
│   ├── App.tsx          # Komponen utama dan konfigurasi routing
│   └── main.tsx         # Entry point aplikasi
├── index.html           # File HTML utama
├── package.json         # Manifest dependensi dan skrip proyek
├── tailwind.config.js   # Konfigurasi Tailwind CSS
└── vite.config.ts       # Konfigurasi Vite
```

---
Dibuat dengan ❤️ oleh Tim Duren Farm.
