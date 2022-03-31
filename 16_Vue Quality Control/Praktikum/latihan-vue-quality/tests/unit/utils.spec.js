import {
    penjumlahan,
    pengurangan,
    pembagian,
    perkalian,
    rataRata,
    sisaBagi,
    luasPersegi,
    luasLingkaran,
    luasKubus,
    volumeKubus
} from "@/util";

describe("Melakukan Penjumlahan", () => {
    test("Penjumlahan dua bilangan positif", () => {
        expect(penjumlahan(2, 4)).toBe(6)
    })
    test("Penjumlahan dua bilangan negatif", () => {
        expect(penjumlahan(-10, -5)).toBe(-15)
    })
    test("Penjumlahan dua bilangan non-numerik", () =>{
        expect(penjumlahan("2", "5")).toBe("25")
    })
})

describe("Melakukan Pengurangan", () => {
    test("Pengurangan dua bilangan positif", () => {
        expect(pengurangan(9, 3)).toBe(6)
    })
    test("Pengurangan dua bilangan negatif", () => {
        expect(pengurangan(-3, -5)).toBe(2)
    })
    test("Pengurangan dua bilangan positif dan negatif", () => {
        expect(pengurangan(5, -2)).toBe(7)
    })
})

describe("Melakukan Pembagian", () => {
    test("Pembagian dua bilangan positif", () => {
        expect(pembagian(10, 2)).toBe(5)
    })
    test("Pembagian dua bilangan negatif", () => {
        expect(pembagian(-15, -5)).toBe(3)
    })
    test("Pembagian dua bilangan positif dan negatif", () => {
        expect(pembagian(20, -4)).toBe(-5)
    })
})

describe("Melakukan Perkalian", () => {
    test("Perkalian dua bilangan positif", () => {
        expect(perkalian(3, 4)).toBe(12)
    })
    test("Perkalian dua bilangan negatif", () => {
        expect(perkalian(-5, -2)).toBe(10)
    })
    test("Perkalian dua bilangan positif dan negatif", () => {
        expect(perkalian(5, -3)).toBe(-15)
    })
})

describe("Melakukan Rata-rata", () => {
    test("Rata-rata lima bilangan positif", () => {
        expect(rataRata(2, 3, 4, 10, 6)).toBe(5)
    })
    test("Rata-rata lima bilangan negatif", () => {
        expect(rataRata(-2, -6, -2, -5, -5)).toBe(-4)
    })
    test("Rata-rata lima bilangan positif dan negatif", () => {
        expect(rataRata(2, -2, 5, -3, 8)).toBe(2)
    })
})

describe("Melakukan Sisa bagi", () => {
    test("Sisa bagi dua bilangan positif", () => {
        expect(sisaBagi(6, 2)).toBe(0)
    })
    test("Sisa bagi dua bilangan negatif", () => {
        expect(sisaBagi(-4, -3)).toBe(-1)
    })
    test("Sisa bagi dua bilangan positif dan negatif", () => {
        expect(sisaBagi(10, -3)).toBe(1)
    })
})

describe("Melakukan hitung Luas Persegi", () => {
    test("Luas Persegi bilangan positif", () => {
        expect(luasPersegi(5)).toBe(25)
    })
    test("Luas Persegi bilangan desimal", () => {
        expect(luasPersegi(2.5)).toBe(6.25)
    })
    test("Luas Persegi bilangan a - b", () => {
        expect(luasPersegi(5-2)).toBe(9)
    })
})

describe("Melakukan hitung Luas Lingkaran", () => {
    test("Phi lingkaran 3.14", () => {
        expect(luasLingkaran(3.14, 10)).toBe(314)
    })
    test("Phi lingkaran 22/7", () => {
        expect(luasLingkaran(22/7, 7)).toBe(154)
    })
    test("Phi lingkaran bukan 3.14 atau 22/7", () => {
        expect(luasLingkaran(10, 25)).toBe("phi harus 3.14 atau 22/7")
    })
})

describe("Menghitung luas permukaan kubus", () => {
    test("Luas permukaan kubus bilangan positif", () => {
        expect(luasKubus(5)).toBe(150)
    })
    test("Luas permukaan kubus bilangan desimal", () => {
        expect(luasKubus(2.5)).toBe(37.5)
    })
    test("Luas permukaan kubus bilangan a - b", () => {
        expect(luasKubus(10-2)).toBe(384)
    })
})

describe("Menghitung volume kubus", () => {
    test("Volume kubus bilangan positif", () => {
        expect(volumeKubus(5)).toBe(125)
    })
    test("Volume kubus bilangan desimal", () => {
        expect(volumeKubus(2.5)).toBe(15.625)
    })
    test("Volume kubus bilangan a - b", () => {
        expect(volumeKubus(10-4)).toBe(216)
    })
})