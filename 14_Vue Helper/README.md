# (14) Vue Helper

## Resume
1. Navigasi Pada Vue adalah kegiatan berpindah dari satu halaman ke halaman lain. Cara Vue melakukannya adalah memastikan halaman tersebut ada, lalu membuka halaman tersebut dengan mengetik manual di address bar: /about.

Macam Jenis Redireksi this.$router.push('/user'); this.$router.replace('/user');
this.$router.go(-1); //back this.$router.go(1); //forward
Params dan Query const userId = 123; this.$router.push({ name: 'user', params: {userId: userId}}); this.$router.push({ path: '/user/${userId}' }) // /user/123
this.$router.push({ path: 'register', query: { plan: 'private' } }) //register?plan=private

Navigasi Beranak Adalah sub-path dari path yang ada /user/setting/privacy
Navigasi Dinamis Navigasi dinamis adalah dimana path tersebut memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilainya satu-persatu.

2. Layout Template Vue adalah susunan tata letak, sedangkan layout template pada Vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing-masing halaman.
Layout memuat susunan tata letak yang sama untuk setiap halaman, seperti halnya navbar atau footer.
Halaman memuat komponen yang berubah ubah sesuai konten halaman namun sudah tidak perlu lagi mentertakan navbar di setiap komponen view halaman.
Layout diterapkan supayakode di setiap halaman tetap bersih dan efisien.
Cara Kerja Layout Template Pada dasarnya layout hanyalah komponen biasa, yang membedakan adalah layout dapat meneruskan konten dari anak komponennya.

3. Penyimpanan Global merupakan sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh bagian aplikasi.
- State Komponen Hanya tersimpan dan valid pada satu komponen saja
- Props Hanya tersimpan dan valid di induk atau anak komponen saja.
- Store Tersimpan dan valid di bagian manapun dari aplikasi
Penyimpanan Global dengan Vuex Vuex adalah pola manajemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi Vue.js. Penyimpanan terpusat untuk semua komponen dalam aplikasi, dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara yang terstruktur dan terprediksi.
- Mutations bertujuan untuk mengubah nilai variabel yang ada di dalam store tanpa ada logika pengolahan muatan di dalam fungsi mutation tersebut.
- Vuex Actions Bertugas sebagai pintu masuk perintah yang menghubungkan komponen dengan store, Actions perlu memanggil fungsi di mutations untuk memodifikasi nilai store yang ada di store. Selain itu action juga tempat untuk melakukan komunikasi dengan API

## Task
Membuat halaman todolist yang dapat mengarahkan ke halaman deskripsi dari setiap item todolist tersebut, dan data todolist akan bernilai tetap walaupun halaman web direfresh.