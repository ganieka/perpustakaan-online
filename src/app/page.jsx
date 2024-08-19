"use client"
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/component/Wrapper";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import { useEffect, useState } from 'react';
import { getRequest } from '../../api';
import { useRouter } from "next/navigation";

export default function Index() {
  const [buku, setBuku] = useState('');
  const [nama, setNama] = useState("''");
  const router = useRouter();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getRequest('buku/highest-rating');
        setBuku(data);
      } catch (error) {
        console.error('Gagal menarik data:', error);
      }
    };

    fetchBooks();
  }, []);
  console.log(buku)

  const handleSearch = (event) => {
      if (event.key === 'Enter') {
        // Replace 'search' with your desired route and inputValue with query params
        router.push(`/kategori/''/nama/${nama}`);
      }
    };

  const handleNamaChange = (event) => {
      if(event.target.value === "") {
          setNama("''");
      } else {
          setNama(event.target.value);
      }
  };
  return (
    <>
      <Header/>
      <section className="home">
        <div className="left-content">
          <h1>Perpustakaan<br/>Online Favorit Anda</h1>
          <p className="home-description">Tempat anda membaca buku tanpa perlu<br/>meminjam dan bisa dibaca dari mana saja!</p>
          <div className="filter-nama">
            <input
              type="text"
              placeholder="Masukkan nama..."
              value={nama=="''" ? "": nama}
              onChange={handleNamaChange}
              onKeyDown={handleSearch}
            />
            <Link href={`/kategori/''/nama/${nama}`}><Image src="/image/icon/search.png" height={22.5} width={22.5} alt="search-icon.png"/></Link>
          </div>
        </div>
        <div className="right-content">
          <Image src={buku[0]?.image} height={400} width={300} alt="buku rating tertinggi.png"/>
          <h1>{buku[0]?.nama}</h1>
        </div>
      </section>
      
      <Footer/>
    </>
  );
}
