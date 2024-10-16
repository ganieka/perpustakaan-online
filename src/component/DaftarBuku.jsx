import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const DaftarBuku = (prop) => {
    const { router, buku, kategori: initialKategori, nama: initialNama, listKategori} = prop;
    const [kategori, setKategori] = useState(initialKategori);
    const [nama, setNama] = useState(initialNama);

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
          // Replace 'search' with your desired route and inputValue with query params
          router.push(`/kategori/${kategori}/nama/${nama}`);
        }
      };
    // console.log(prop)
    const handleKategoriChange = (event) => {
        if(event.target.value === "") {
            setKategori("''");
        } else {
            setKategori(event.target.value);
        }
    };

    const handleNamaChange = (event) => {
        if(event.target.value === "") {
            setNama("''");
        } else {
            setNama(event.target.value);
        }
    };

    const nameHandler = (name) => {
        var maxLength = 29
        if (name.length > maxLength) {
            return `${name.slice(0, maxLength - 3)}...`;
        }
        return name;
    }

    console.log("buku: ", buku, "\nkategori: ", kategori, "\nnama: ", nama, "\nlistKategori: ", listKategori, "\nfiltered buku: ")
    return (
        <section className="daftar-buku" style={{padding: '0'}}>
            <div className="filter-buku">
                <div className="filter-kategori">
                    <select value={kategori} onChange={handleKategoriChange}>
                        <option value={''}>Pilih Kategori</option>
                        {listKategori.map((item, key) => (
                            <option value={item.nama} key={key}>{item.nama}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-nama">
                    <input
                        type="text"
                        placeholder="Masukkan nama..."
                        value={nama=="''" ? "": nama}
                        onChange={handleNamaChange}
                        onKeyDown={handleSearch}
                    />
                    <Link href={`/kategori/${kategori}/nama/${nama}`}><Image src="/image/icon/search.png" height={22.5} width={22.5} alt="search-icon.png"/></Link>
                </div>
            </div>
            <div className="hasil-buku">
                {buku.length > 0 ? (
                    buku.map((item, key) => (
                        <Link href={`/buku/${item.id}`} key={key}>
                            <div className="item-buku">
                                <Image src={`${item.image || ''}`} width={300} height={350} alt={`${item.name} Image`}/>
                                <div className="item-buku-detail">
                                    <h3>{nameHandler(item.nama)}</h3>
                                    <div>
                                        <p>{item.penulis}</p>
                                        <p>{item.tahun}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No books found</p>
                )}
            </div>
        </section>
    )
};

export default DaftarBuku;