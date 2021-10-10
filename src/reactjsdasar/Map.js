import React from 'react'

const makanans = [
    {
        nama: 'Soto',
        harga: 12000
    },
    {
        nama: 'Bakso',
        harga: 10000
    },
    {
        nama: 'Mie Ayam',
        harga: 6000
    },
    {
        nama: 'Nasi Goreng',
        harga: 15000
    },
]

// Reduce
const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga + makanan.harga
}, 0)

const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanans.map((makanan) => (
                    <li>{makanan.nama} - Harga {makanan.harga}</li>
                ))}
            </ul>

            <h2>Map filter harga lebih dari sama dengan 11.000</h2>
            <ul>
                {makanans
                .filter((makanan) => makanan.harga > 11000)
                .map((makanan) => (
                    <li>{makanan.nama} - Harga {makanan.harga}</li>
                ))}
            </ul>
            
            <p>Total Harga : {total_bayar}</p>
        </div>
    )
}

export default Map
