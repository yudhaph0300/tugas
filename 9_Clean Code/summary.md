(9) Clean Code

# Resume
3 Point yang dipelajari dari materi :
1. Pengertian Clean Code
2. Karakteristik dan Prinsip Clean Code
3. Refactoring
## Pengertian
Clean Code merupakan istilah untuk kode yang mudah dibaca, dipahami dan diubah. Tujuan dari penggunaan Clean Code agar kode mudah untuk dibaca, dipahami, serta diubah oleh rekan tim, sehingga proses development menjadi lebih cepat selesai.

## Karakteristik
9 karakteristik Clean Code :
- Mudah dipahami
- Mudah dieja dan dicari
- Singkat namun mendeskripsikan konteks
- Konsisten
- Menghindari penambahan konteks yang tidak diperlukan
- Komentar
- Good Function
- Menggunakan konvensi
- Formatting

## Prinsip Clean Code
1. KISS (Keep It So Simple), menghindari pembuatan fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
Tips untuk menerapkan prinsip Kiss:
- Fungsi atau class harus kecil
- Fungsi dibuat untuk melakukan satu tugas saja.
- Tidak menggunakan terlalu banyak argumen pada fungsi.
- Memperhatikan kondisi yang seimbang, kecil dan jumlah yang minimal.

2. DRY (Don't Repeat Youtself), duplikasi kode terjadi karena sering di copy paste. Untuk menghindari duplikasi tersebut buatlah fungsi yang dapat dipakai / digunakan secara berulang-ulang.

## Refactoring
Refactoring merupakan proses restrukturisasi kode yang telah dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY dapat dicapai dengan cara Refactoring.
Teknik Refactoring :
- Membuat sebuah abstraksi
- Memecah kode dengan fungsi/class
- Memperbaiki penamaan dan lokasi kode
- Mendeteksi kode yang memiliki duplikasi