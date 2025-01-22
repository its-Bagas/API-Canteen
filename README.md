# **Manajemen Transaksi Kantin**

Proyek ini adalah sistem manajemen transaksi untuk kantin, yang mencakup fitur seperti pembuatan transaksi, penghitungan pemasukan bulanan, dan diskon menu. Dibangun menggunakan **Node.js**, **TypeScript**, dan **Prisma ORM**, dengan basis data **MySQL**.

## **Fitur**

 - User Authentication dan Manajemen Role(Admin, Customer)
 - Manejemen Stan (create, update, delete stands)
 - Managemen Menu (create, update, delete Menu) 
 - Managemen Diskon (create, update, delete Diskon) 
 - Managemen Transaksi (create, pemasukan, rekap Transaksi) 

## **Teknologi yang Digunakan**

- **Backend**:
  - Node.js
  - TypeScript
  - Prisma ORM
  - Express.js

- **Database**:
  - MySQL

- **Lainnya**:
  - RESTful API
  - JWT (Json Web Token)
  - Multer

## **Instalasi**

### **1. Clone Repository**
```bash
git clone https://github.com/its-bagas/repository-name.git

cd repository-name
```

### **2. Install Dependencies**
```bash
npm install 
```

### **3. Konfigurasi Databases**
 - Buat file **.env** di root project dan tambahkan konfigurasi berikut:
```bash
DATABASE_URL="mysql://username:password@localhost:3306/database_name"
```
 - Jalankan migrasi Prisma:
 ```bash
npx prisma migrate dev
```

### **4. Run Project**
```bash
npm run start || nodemon
```
Proyek akan berjalan di **http://localhost:4000**.

## **Pengembanagan**

 - Menambahkan logika di folder **services/**.
 - Buat endpoint baru di **controllers/**.
 - Tambahkan route di **routes/**.

## **Kontribusi**
Kami menerima kontribusi dari siapa saja. Silakan buat pull request atau buka issue jika Anda menemukan bug atau memiliki ide untuk fitur baru.
