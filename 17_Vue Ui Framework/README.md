# (17) Vue Ui Framework

## Resume
UI Framework merupakan suatu kumpulan elemen visual dan fungsionalitas yang bisa dipakai secara instan. UI Framework membantu kita untuk membuat aplikasi web dengan tampilan yang baik dan terlihat profesional.
Cara Kerja Rangka UI Rangka kerja menyediakan komponen siap pakai kemudian kita impor komponen yang kita butuhkan ke dalam aplikasi. Macam Rangka Kerja Rangka Kerja UI yang tersedia salah satunya yaitu Vuetify.

Vuetify memungkinkan kita membuat aplikasi dengan tampilan yang indah walaupun kita bukanlah seorang desainer. Vuetify memiliki lebih dari 80 komponen berbasis Materian Design yang mana komponen tersebut dapat membantu kita lebih cepat dalam pengembangan aplikasi. Vuetivy telah menyiapkan komponen siap pakai yang bisa kita gunakan di aplikasi kita. Seperti komponen tombol, text field, dll.

Manajemen Warna Tema merupakan suatu pengaturan set warna yang dapat kita terapkan terhadap tampilan di aplikasi. Vuetify menyimpan warna tema bawaan yang bisa kita setel secara manual ketika aplikasi berjalan.
Cara menerapkan Manajemen Warna Tema yaitu Buat fungsi untuk mengganti tema warna Vuetify kemudian tambahkan menu pilihan warna. Ex: changeTheme(color){ this.$vuetify.theme.themes.light.primary = color }

Tema Gelap Terang merupakan Fitur peralihan warna latar belakang aplikasi dari terang gelap atau sebaliknya. Cara Kerja Gelap Terang yaitu Vuetify memiliki variabel boolean dark dan juga menyimpan warna tema bawaan mode gelap.

Reaktivitas Viewport merupakan Perubahan ukuran yang menyesuaikan dengan lebar layar tampilan. Cara Kerja Reaktivitas pada Vuetify yaitu Lebar layar dibagi menjadi beberapa golongan dan setiap komponen dapat ditentukan ukurannya berdasarkan golongan tersebut.
Material Design Breakpoints
- Extra small xs < 600px
- Small sm 600px > < 960px
- Medium md 960px > < 1264px
- Large lg 1264px > < 1904px
- Extra large xl >1904px
Menerapkan Reaktivitas <v-flex class="pa-2" xs12 sm6 md4 lg2

## Task
Membuat tampilan aplikasi berita pada latihan materi vue data dengan menggunakan vuetify, serta menambahkan pilihan kategori dan pencarian