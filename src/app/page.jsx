"use client"
import Image from "next/image";
import Wrapper from "@/component/Wrapper";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import { useEffect, useState } from 'react';
import { getRequest } from '../../api';

export default function Index() {
  const [buku, setBuku] = useState('');

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
  return (
    <>
      <Header/>

      <section className="home">
        <div className="left-content">
          <h1>Perpustakaan<br/>Online Favorit Anda</h1>
          <p className="home-description">Tempat anda membaca buku tanpa perlu<br/>meminjam dan bisa dibaca dari mana saja!</p>
          <div className="search-container">
            <Image src="/image/icon/search.png" height={30} width={30} alt="search-icon.png"/>
            <p>Cari Buku</p>
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
