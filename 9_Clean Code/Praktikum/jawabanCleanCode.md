#Clean Code
## Problem 1 - Analysis
Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan.


### Jawab :
Berapa banyak kekurangan dalam penulisan kode tersebut?
- 2

Bagian mana saja terjadi kekurangan tersebut?
- Dibagian pendeklarasian class
- Dibagian pendeklarasian isi dari class userservice

Tuliskan alasan dari tiap kekurangan tersebut
- Kode susah untuk dieja karena tidak menggunakan gaya penulisan yang biasa digunakan oleh programer seperti camel case, pascal case, snake case atau yang lainnya.
- Kode susah untuk dipahami karena pendeklarasian yang sulit untuk dimengerti dan tidak menggunakan gaya penulisan camel case ataupun yang lain serta tidak adanya komentar.

##  Problem 2 - Rewrite
Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan.
Ubahlah penulisan kode berikut menjadi lebih terbaca dan rapi!


### Jawab :
class kendaraan {
    var totalRoda = 0;
    var kecepatanPerJam = 0;
}

class mobil extends kendaraan {
    void berjalan() {
        tembahKecepatan(10);
    }

    tambahKecepatan(var kecepatanBaru) {
        kecepatanPerJam += kecepatanBaru;
    }
}

void main() {
    mobilCepat = new mobil();
    mobilCepat.berjalan();

    mobilLamban = new mobil();
    mobilLamban.berjalan();
}