# (15) Vue Data

## Resume
1 Data Fetching merupakan pengambilan data oleh program perangkat lunak atau skrip. Setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar.
Cara Kerja Fetch API : API (Application Programming Interface) yaitu sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi
API Endpoint : Saat API berinteraksi dengan sistem lain, titik kontak dari komunikasi ini dianggap sebagai endpoint yang berbentuk link
Fetch Data dengan Axios : Axios adalah sebuah pustaka yang dipakai front-end untuk melakukan HTTP Request kepada link API Endpoint.
Pagination dengan Queries : Salah satu contoh penggunaan string query pada endpoint adalah untuk pembagian/manajemen halaman

2 Penanganan Data Error : JavaScript adalah bahasa yang memiliki tipe data dinamis. Tidak memberikan kesalahan ketika kompilasi, jadi beberapa kali kita akan mendapatkan runtime-error untuk mengakses variabel atau fungsi yang undefined. Penanganan data error adalah konsep untuk mencegah runtime-error
Akibat Data Error yang Tidak Ditangani : ketika kita mengakses suatu variabel dengan nama yang salah atau kurang tepat, maka data yang akan kita tuju tidak akan keluar.
Try Catch Finally adalah metode penanganan error bawaan dari javascript.
Promise : Objek Promise mewakili penyelesaian (atau kegagalan) akhirnya dari operasi asinkrondan nilai yang dihasilkannya. Aktivitas berkomunikasi dengan API pada umumnya berbentuk promise.

3. Validasi Data merupakan konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum terutapa pada input pengguna. Fungsi validasi menerima nilai yang ingin dicek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean (true/false)
    
4. Autentikasi merupakan suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap identitas pengguna ketika ingin memasuki dan mengakses sistem tertentu
Cara Kerja Autentikasi : Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username dan password, jika cocok maka server akan mengirim akses token di mana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A, bukan B, C atau yang lain
Otorisasi : mengatur perizinan terhadap tindakan yang dapat dilakukan pengguna
Cara Kerja Otorisasi : seperti contoh ketika login sebagai user biasa, maka hanya dapat mengakses home. Namun apabila login sebagai admin, maka dapat mengakses dashboard.

## Task
Membuat website yang menampung berita-berita dengan menggunakan Newsapi