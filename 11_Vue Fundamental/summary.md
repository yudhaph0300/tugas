# (11) Vue Fundamental

## Resume
1. Pengertian dan Pentingnya Vue
Vue adalah framework dari Javascript untuk menghubungkan tampilan website yang lebih interaktif dan dinamis. Vue mudah dipelajari dan dengan menggunakan Vue kita dapat mudah membuat aplikasi frontend dan website. Dokumentasi yang lengkap dan rapi. Vue CDN dapat digunakan langsung di file HTML dengan menambahkan  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>, sedangkan Vue CLI dapat menggunakan perkakas standar dari ekosistem Vue untuk memudahkan setup / pembuatan aplikasi Vue

2. Dasar-dasar Vue
- Vue Instance : Setiap aplikasi Vue dimulai dengan membuat instance Vue baru dengan fungsi Vue
- Vue Data Binding : Vue.js menggunakan sintaks template berbasis HTML yang memungkinkan kita untuk secara deklaratif mengikat DOM yang dirender ke data instance Vue yang mendasarinya
Ada 3 Jenis data binding yaitu di dalam konten, atribut, dan didalam HTML
- Vue Reactivity : Vue instance memiliki property bernama data, jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimuat ulang. 

3. Vue Directive
Directive adalah atribut khusus yang diawali dengan v-. Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascipt di dalam atribut.
Macam Vue Directive
- v-bind : Direktif untuk memberitahu Vue kalau kita ingin melakukan one way data binding.
- v-model : Direktif untuk memberitahu Vue kalau kita ingin melakukan two way data binding.
- v-if, v-else, dan else-if : Direktif yang digunakan untuk melakukan rendering secara kondisional.
- v-on : Direktif untuk memberitahu Vue kalau kita ingin memanggil fungsi
- v-for : Direktif untuk memberitahu Vue kalau kita ingin melakukan pengulangan.


## Task
Membuat to do list sederhana 