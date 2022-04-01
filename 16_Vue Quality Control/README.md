# (16) Vue Quality Control

## Resume
1. Debugging merupakan proses mengidentifikasi dan menghilangkan kesalahan dari perangkat lunak komputer. Cara kerjanya yaitu dengan melakukan identifikasi kesalahan dan melakukan identifikasi solusi. Perkakas debugging dapat menggunakan Devtools, Consoles, dan Log
Tips untuk melakukan Debugging :
- Tenang dan fokus
- Rasional dan kontekstual
- Perhatian yang detail untuk petunjuk sekecil apapun
- Tidak tergesa-gesa untuk bertanya

Sumber Identifikasi Solusi :
- Diri Sendiri : Pengetahuan dan pengalaman
- Rekan Kerja : Peer, senior atau leader
- Google : Dokumentasi, Stackoverflow, Isu Repository, Blog/vlog tutorial, dll.
- Komunitas : Forum Telegram, Discord, Media Sosial, dll

2. Unit Testing merupakan proses verifikasi bahwa kode kita benar-benar berperilaku seperti yang diharapkan dan validasi bahwa kode kita tetap benar sepanjang masa aplikasi. Cara kerja unit testing yaitu Unit Testing memberikan kita kesempatan untuk menguji potongan kode secara individual dan terisolasi dalam bentuk Test Assertion. Unit testing pada aplikasi Vue umumnya dilakukan oleh pustaka rangka kerja pendukung seperti Jest dan Mocha. Jest adalah salah satu kerangka kerja untuk melakukan Unit Testing pada aplikasi yang berbasis javascript
Menapa Harus Unit Testing :
- Meningkatkan rasa percaya diri
- Meningkatkan standar kode
- Mencegah kesalahan sebelum benar-benar terjadi
- Memberikan batasan dan kriteria yang jelas jika melakukan refactor

3. Matriks Ukur Kinerja merupakan tolak ukur penting yang menunjukkan informasi seberapa baik kinerja aplikasi kita. Cara kerja sendiri dengan bantuan sebuah perkakas yang menjalankan serangkaian pemeriksaan sebelum menghasilkan laporan terperinci dan skor tentang seberapa baik kinerja sebuah halaman web. Lighthouse Audit adalah perkakas yang membantu menentukan skor pada matriks ukur kinerja aplikasi web. Untuk menjalankan Lighthouse Audit sendiri yaitu dengan menjalankan aplikasi pada Google Chrome, buka Devtools pada tab Lighthouse kemudian "Generate Report".

## Task
Membuat sebuah file pembantu yang berisikan operasi aritmatika yang valid. Kemudian membuat unit test yang meliputi 100% coverage dari file tersebut.