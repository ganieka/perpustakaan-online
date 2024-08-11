"use client"
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import { useEffect, useState } from 'react';
import { getRequest } from '../../../api';
import Image from "next/image";
import Link from "next/link";

const Kategori = () => {
  const [kategori, setKategori] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchKategori = async () => {
      try {
        const data = await getRequest('kategori');
        if (Array.isArray(data)) {
          setKategori(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Gagal menarik kategori:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchKategori();
  }, []);
  // console.log(kategori)
  return (
    <>
      <Header />
      <section className="kategori">
        {loading ? (
          <p>Loading...</p>
        ) : kategori.length > 0 ? (
          kategori.map((item, key) => (
            <Link href={"kategori/" + item.nama} key={key}>
              <div className="card" key={item.id}>
                <div className="card-image-container">
                  <Image src={item.image} height={140} width={140} alt={item.nama} />
                </div>
                <div className="card-text-container">
                  <h2>{item.nama}</h2>
                  <p>{item.deskripsi}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No data available</p>
        )}
      </section>
      <Footer />
    </>
  );
};
  
export default Kategori;