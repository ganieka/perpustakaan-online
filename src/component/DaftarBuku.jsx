import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const DaftarBuku = (prop) => {
    const { buku, kategori: initialKategori, nama: initialNama, listKategori} = prop;
    const [kategori, setKategori] = useState(initialKategori);
    const [nama, setNama] = useState(initialNama);
    // console.log(prop)
    const handleKategoriChange = (event) => {
        setKategori(event.target.value);
    };

    const handleNamaChange = (event) => {
        setNama(event.target.value);
    };

    // Find the selected category ID based on the kategori name
    const selectedKategoriId = listKategori.find((item) => item.nama === kategori)?.id;

    const filteredBuku = buku.filter((item) => {
        const matchKategori = selectedKategoriId ? item.kategori_id === selectedKategoriId : true;
        const matchNama = nama ? item.nama.toLowerCase().includes(nama.toLowerCase()) : true;
        return matchKategori && matchNama;
    });

    console.log("buku: ", buku, "\nkategori: ", kategori, "\nnama: ", nama, "\nlistKategori: ", listKategori, "\nfiltered buku: ", filteredBuku)
    return (
        <section className="daftar-buku" style={{padding: '0'}}>
            <div className="filter-buku">
                <div className="filter-kategori">
                    {kategori && (
                        <select value={kategori} onChange={handleKategoriChange}>
                            {listKategori.map((item, key) => (
                                <option value={item.nama} key={key}>{item.nama}</option>
                            ))}
                        </select>
                    )}
                </div>
                <div className="filter-nama">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={nama}
                        onChange={handleNamaChange}
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            width: '100%',
                        }}
                    />
                </div>
            </div>
            <div className="hasil-buku">
                {filteredBuku.length > 0 ? (
                    filteredBuku.map((item, key) => (
                        <div key={key} className="item-buku">
                            <h3>{item.nama}</h3>
                            <p>{item.penulis}</p>
                            <p>{item.tahun}</p>
                        </div>
                    ))
                ) : (
                    <p>No books found</p>
                )}
            </div>
        </section>
    )
};

export default DaftarBuku;