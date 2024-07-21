import Image from "next/image";
import Wrapper from "@/component/Wrapper";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
// import image from "@/public/image";

export default function Index() {
  return (
    <>
      <Header/>
      <section className="home" style={{marginTop: 64, display: 'flex'}}>
        <div className="left-content">
          <h1>Perpustakaan<br/>Online Favorit Anda</h1>
          <p className="home-description">Tempat anda membaca buku tanpa perlu<br/>meminjam dan bisa dibaca dari mana saja!</p>
          <div className="search-container">
            <Image src="/image/icon/search.png" height={30} width={30}/>
            <p>Cari Buku</p>
          </div>
        </div>
        <div>
          
        </div>
      </section>
      
      <Footer/>
    </>
  );
}
