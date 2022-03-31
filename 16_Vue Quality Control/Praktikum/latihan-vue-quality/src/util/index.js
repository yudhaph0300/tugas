export const penjumlahan = (bilSatu, bilDua) => {
    return bilSatu + bilDua
}

export const pengurangan = (bilSatu, bilDua) => {
    return bilSatu - bilDua
}

export const pembagian = (bilSatu, bilDua) => {
    return bilSatu / bilDua
}

export const perkalian = (bilSatu, bilDua) => {
    return bilSatu * bilDua
}

export const rataRata = (bilSatu, bilDua, bilTiga, bilEmpat, bilLima) => {
    return (bilSatu + bilDua + bilTiga + bilEmpat + bilLima) / 5
}

export const sisaBagi = (bilSatu, bilDua) => {
    return bilSatu % bilDua
}

export const luasPersegi = (panjangSisi) => {
    return panjangSisi*panjangSisi
}

export const luasLingkaran = (phi, jariJari) => {
    if(phi == 3.14){
        return 3.14 * jariJari * jariJari
    } else if (phi == 22/7) {
        return 22/7 * jariJari * jariJari
    } else {
        return "phi harus 3.14 atau 22/7"
    }
    
}

export const luasKubus = (panjangSisi) => {
    return 6 * panjangSisi * panjangSisi
}

export const volumeKubus = (panjangSisi) => {
    return panjangSisi * panjangSisi * panjangSisi
}