# (19) Vue With Nuxt

## Resume
### Nuxt
Nuxt Kerangka kerja yang dibangun di atas Vue yang membuat pengembangan web menjjadi sederhana dan ampuh
Pemasangan Nuxt Untuk membuat sebuah aplikasi baru dapat menggunakan perintah npx create-nuxt-app
Penggunaan Nuxt Untuk menjalankan aplikasi, terdapat beberapa perintah yang tertulis di script di dalam package.json seperti perintah npm run dev
Perbedaan Struktur Direktori Nuxt dengan Vue
Didalam struktur direktori nuxt tidak terdapat Src, Public, Views, dan Router tetapi terdapat Pages, Static, dan Layouts
Pages Router di Nuxt secara otomatis membaca direktori ini sehingga file yang ada di direktori /pages langsung terhubung menjadi path halaman
Layouts Setiap file di direktori /layouts akan membuat tata letak khusus yang dapat diakses dengan properti layout di komponen halaman
Static Semua file yang disertakan akan secara otomatis diekspose oleh Nuxt dan dapat diakses melalui URL root proyek.


=== Nuxt SSG dan SSR ===
Nuxt SSG dan Cara Kerja SSG (Static Site Generation), metode pengembangan ini lebih cocok untuk situs web yang tidak memiliki halaman dinamis.
Cara Kerja: Ketika sebuah proyek dibangun untuk produksi, file HTML siap pakai akan dibuat di folder dist, kemudian disuguhkan oleh server dan dapat diakses per masing-masing file HTML.
Nuxt SSR dan Cara Kerja SSR (Server Side Rendering), metode pengembangan ini adalah solusi terbaik untuk proyek dimana halaman dibuat secara real time, yaitu melalui panel admin, misalnya, halaman blog, dan e-commerce.
Cara Kerja: Server yang dibangun ke dalam Nuxt akan berjalan dalam produksi, yang akan memastikan bahwa file HTML baru dihasilkan secara real time ketika data baru diterima, misalkan melalui API.

=== SEO Meta ===
SEO & SEO Meta SEO (Search Engine Optimization), yaitu proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs web atau halaman web dari mesin pencari
SEO Meta tag adalah tag tak terlihat di dalam yang memberikan data tentang halaman ke mesin pencari dan pengunjung situs web

Cara Kerja SEO Meta SEO Meta Tag dapat diterapkan dari Nuxt config untuk pengaturan global, yaitu konten head akan sama di setiap halaman aplikasi Ex: nuxt.config.js export default { head: { title: 'websiteku', meta: [ { charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' } ] } }

=== PWA ===
PWA (Progressive Web Apps) dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan, keandalan, dan kemudahan pemasangan sekaligus menjangkau siapa saja, di mana saja, di perangkat apa pun dengan basis kode tunggal
