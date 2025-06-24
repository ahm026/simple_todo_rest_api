# Simple To-Do REST API with Express.js & MySQL

Proyek ini adalah aplikasi sederhana untuk belajar konsep backend menggunakan **Express.js** dan **MySQL**. Tujuannya adalah memahami cara membuat REST API serta berinteraksi dengan database lokal melalui XAMPP.

Aplikasi ini masih dalam tahap pembelajaran, dan aku sangat senang bisa berbagi proses belajarku di sini. Masih banyak hal yang perlu dipelajari, jadi jika ada kesalahan atau saran, aku sangat terbuka untuk menerima masukan!

## 🛠️ Teknologi yang Digunakan
- Node.js
- Express.js
- MySQL (via XAMPP)
- body-parser, cors, dotenv

## 📁 Struktur Folder
      ```bash
      simple_todo_rest_api/
      ├── controllers/ # Tempat logika bisnis CRUD
      ├── routes/ # Endpoint REST API
      ├── public/ # File HTML statis untuk testing frontend
      ├── .env # Konfigurasi lingkungan (misal: koneksi database)
      ├── server.js # Poin utama aplikasi
      └── README.md

## 🏃‍♂️ Cara Menjalankan Proyek
1. **Clone Repo Ini**
   ```bash
   git clone https://github.com/ahm026/simple_todo_rest_api.git
2. Install Depedensi
    ```bash
    npm install
4. Konfigurasi Database
   - Pastikan kamu sudah menjalankan XAMPP dan mengaktifkan MySQL.
   - Buat database baru bernama todo_db.
   - Salin file .env.example menjadi .env
5. table database
   ```bash
   CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
6. Start Proyek
   ```bash
   npm run dev
---
Thank You
