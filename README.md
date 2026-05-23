# MealsAI - Aplikasi Rekomendasi Menu Hemat & Sehat

MealsAI adalah aplikasi web/mobile yang dirancang khusus untuk mahasiswa UNDIP dan anak kos di Indonesia. Aplikasi ini membantu pengguna merencanakan menu makan selama seminggu dengan budget terbatas, sehat, dan hemat. 

## Fitur Utama

1. **Kalkulator Kalori Personal**: Menghitung kebutuhan kalori harian berdasarkan data pribadi pengguna.
2. **Rencana Menu Seminggu**: Membantu merencanakan menu makan selama seminggu dengan mempertimbangkan budget dan preferensi makanan.
3. **Filter Preferensi & Alergi**: Menyaring menu berdasarkan preferensi makanan dan alergi yang dimiliki pengguna.
4. **Resep Masak Hemat**: Menyediakan rekomendasi resep masak yang sederhana dan hemat.
5. **Integrasi Layanan Pesan Antar**: Memudahkan pengguna untuk memesan makanan dari warung/gerai/resto terdekat.
6. **Manajemen Budget**: Mencatat dan mengelola pengeluaran untuk masak vs beli.

## Struktur Proyek

```
mealsai/
├── public/
│   ├── icons/          # Ikon untuk PWA
│   └── manifest.json    # Metadata PWA
├── src/
│   ├── assets/         # Aset statis (gambar, font)
│   ├── components/     # Komponen UI
│   ├── pages/          # Halaman aplikasi
│   ├── hooks/          # Custom hooks
│   ├── services/       # API dan data fetching
│   ├── store/          # Manajemen state
│   ├── utils/          # Fungsi utilitas
│   ├── data/           # Dataset menu, resep, alergi
│   ├── App.tsx         # Komponen utama aplikasi
│   └── main.tsx        # Entry point aplikasi
├── .github/
│   └── workflows/
│       └── deploy.yml   # Konfigurasi CI/CD
├── package.json         # Konfigurasi npm
├── tsconfig.json        # Konfigurasi TypeScript
├── tailwind.config.js    # Konfigurasi Tailwind CSS
└── vite.config.ts       # Konfigurasi Vite
```

## Cara Memulai

1. **Clone Repository**: 
   ```bash
   git clone https://github.com/[username]/mealsai.git
   cd mealsai
   ```

2. **Instalasi Dependensi**: 
   ```bash
   npm install
   ```

3. **Jalankan Aplikasi**: 
   ```bash
   npm run dev
   ```

4. **Buka di Browser**: Akses aplikasi di `http://localhost:5173`.

## Kontribusi

Kontribusi sangat diterima! Silakan buka issue atau kirim pull request untuk fitur baru atau perbaikan bug.

## Lisensi

Proyek ini dilisensikan di bawah MIT License. Silakan lihat file LICENSE untuk informasi lebih lanjut.