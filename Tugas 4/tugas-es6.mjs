
const data_belanja = [
    { id: 1, nama: "Mouse", harga: 50000, qty: 2, kategori: "Elektronik" },
    { id: 2, nama: "Kemeja", harga: 100000, qty: 2, kategori: "Pakaian" },
    { id: 3, nama: "Kipas Angin", harga: 300000, qty: 1, kategori: "Elektronik" },
    { id: 4, nama: "Celana", harga: 80000, qty: 2, kategori: "Pakaian" },
    { id: 5, nama: "Kecap Manis", harga: 5000, qty: 3, kategori: "Sembako" },
    { id: 6, nama: "Gula", harga: 15000, qty: 5, kategori: "Sembako" }
];

// Map() untuk menghitung subtotal semua barang
const hasil_map = data_belanja.map(
    ({ id, nama, harga, qty, kategori }) => ({
        id,
        nama,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    })
);

// Filter() untuk memilih kategori
const hasil_filter = hasil_map.filter(
    ({ kategori }) => kategori === "Elektronik"
);

// Reduce()
