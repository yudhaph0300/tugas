# (13) Komponen Vue

## Resume
1. Module Eksport dan Import
- JavaScript Module berisi kelas atau pustaka fungsi untuk tujuan tertentu. Modul hanya sebuah file. Satu kode skrip adalah satu modul.

- Export digunakan untuk menyediakan fungsi, objek, atau nilai primitif dari modul sehingga dapat digunakan oleh modul lain dengan pernyataan import. Ada 2 tipe dari Export yaitu Named Exports (Ekspor nol atau lebih per modul) dan Default Exports (Satu per modul)

- Import digunakan untuk mengambil varibel, objek, atau fungsi yang disediakan oleh modul lain. Ada 4 tipe Import yaitu Importing defaults, Import multiple exports, Rename multiple exports, dan Import default + multiple

2. Komponen Dapat digunakan Kembali
- Reuseable Componen merupakan sebuah Komponen File Tunggal Vue yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda. Cara kerja komponen vue yaitu dengan menggunakan sistem parent dan child. Pada umumnya komponen dijadikan satu dengan komponen lain dan dipisah dengan komponen yang bertugas sebagai halaman.

3. Paradigma Fungsi Pembantu
Paradigma Fungsi Pembantu merupakan sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda. Tujuannya agar lebih efektif dan efisien.

4. Instance Lifecycle Hooks
Instance Lifecycle Hooks : Setiap Vue Instance melewati beberapa serangkaian tahapan pada saat dibuat, tahapan ini disebut sebagai Lifecycle atau siklus hidup. Siklus hidup sebuah Vue Instance berawal ketika inisiasi dan berakhir ketika penghancuran. setiap siklus memiliki hooknya masing-masing yang membentuk fungsi. Terdapat 3 Lifecycle Utama diantaranya adalah
- Created : Berlangsung setelah instance terbentuk dan sebelum DOM dirender
- Mounted : Berlangsung setelah DOM dirender
- Destroyed : Berlangsung sebelum instance dihancurkan

## Task
Membuat sebuah Todo list yang mempunyai fitur tambah, edit, serta hapus