"use client"
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import { useEffect, useState } from 'react';
import { postRequest, getRequest } from '../../../../api';
import DaftarBuku from "@/component/DaftarBuku";

const Page = ({params}) => {
    var kategori = params.nama
    const [buku, setBuku] = useState([]);
    const [listKategori, setListKategori] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const fetchBuku = async () => {
            try {
                const data = await postRequest('buku/filter', {
                    kategori: kategori,
                    nama: ""
                });
                if (Array.isArray(data)) {
                    setBuku(data);
                    // console.log(data)
                } else {
                    console.error('Fetched data is not an array:', data);
                }
            } catch (error) {
                console.error('Gagal menarik buku:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBuku();

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
        fetchListKategori();
    }, [params.name]);
    // console.log(buku, listKategori)
    return(
        <>
            <Header />
            <DaftarBuku buku={buku} kategori={kategori} nama={""} listKategori={listKategori}/>
            <Footer />
        </>
    );
}

export default Page;