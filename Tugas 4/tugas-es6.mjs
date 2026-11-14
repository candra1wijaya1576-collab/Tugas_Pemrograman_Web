const data_belanja = [
    { id: 1, nama: "Mouse", harga: 50000, qty: 2, katerogi: "Elektronik"  }
    { id: 2, nama: "Kemeja", harga: 100000, qty: 2, kategori: "Pakaian"}
    { id: 3, nama: "Kipas Angin", harga: 300000, qty: 1, kategori "Elekronik"}
    { id: 4, nama: "Celana", harga: 80000, qty: 2, kategori: "Pakaian" }
    { id: 5, nama: "kecap manis", harga: 5000, qty: 3, kategori: "Sembako"}
    { id: 6, nama: "Gula", harga: 15000, qty: 5, kategori: "Sembako"}

]

// Filter Berdasarkan Kategori
const filterByKategori = (data, kategoriDipilih) =>
  data.filter(({ kategori }) => kategori === kategoriDipilih);

