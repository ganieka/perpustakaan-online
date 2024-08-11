"use client"
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import { useEffect, useState } from 'react';
import { postRequest, getRequest } from '../../../../../../api';
import DaftarBuku from "@/component/DaftarBuku";

const Page = ({ params }) => {
    var { nama, search } = params; // Extracting `nama` and `search` from URL params
    console.log(nama)
    const [buku, setBuku] = useState([]);
    const [listKategori, setListKategori] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    if(search === "''") {
        search = '';
    }
    if(nama === "''") {
        nama = '';
    }

    useEffect(() => {
        const fetchBuku = async () => {
            try {
                const data = await postRequest('buku/filter', {
                    kategori: nama || "", // Using `nama` for category
                    nama: search || "" // Using `search` for book name filter
                });
                if (Array.isArray(data)) {
                    setBuku(data);
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            } catch (error) {
                console.error('Gagal menarik buku:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchListKategori = async () => {
            try {
                const data = await getRequest('kategori');
                if (Array.isArray(data)) {
                    setListKategori(data);
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            } catch (error) {
                console.error('Gagal menarik kategori:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBuku();
        fetchListKategori();
    }, [nama, search]); // Adding `search` to dependency array

    return (
        <>
            <Header />
            <DaftarBuku buku={buku} kategori={nama || "''"} nama={search || "''"} listKategori={listKategori} />
            <Footer />
        </>
    );
}

export default Page;
