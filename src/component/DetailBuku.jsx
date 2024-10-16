import Image from "next/image";
import Link from "next/link";

const DetailBuku = (params) => {
    const {router, buku} = params
    console.log("buku", typeof(buku))
    return (
        <>            
            {buku && buku.length > 0 ? (
                <section className="detail-buku">
                    <div className="detail-container">
                        <div className="detail-head">
                            <div className="image-container">
                                <Image src={buku[0].image} alt="cover buku" width={170} height={210} />
                                <Link href={`/${buku[0].link}`}>
                                    <button className="read-button">
                                        Baca Buku
                                    </button>
                                </Link>
                            </div>
                            <div className="detail-head-right">
                                <div className="detail-head-1">
                                    <div>
                                        <Link href={`/${buku[0].link}`}><h2>{buku[0].nama}</h2></Link>
                                        <p>by <span style={{fontWeight: 600}}>{buku[0].penulis}</span></p>
                                        <p>Kategori: <span style={{fontWeight: 600}}>{buku[0].kategori}</span></p>
                                    </div>
                                    <div>
                                        <h1>{buku[0].rating}</h1>
                                        <p style={{fontSize: 24}}>Rating</p>
                                    </div>
                                </div>
                                <div className="detail-head-2">
                                    <div>
                                        <h5>Tanggal Terbit</h5>
                                        {buku[0].tahun}
                                    </div>
                                    <div>
                                        <h5>Penerbit</h5>
                                        {buku[0].penerbit}
                                    </div>
                                    <div>
                                        <h5>Bahasa</h5>
                                        {buku[0].bahasa}
                                    </div>
                                    <div>
                                        <h5>Halaman</h5>
                                        {buku[0].halaman}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-body">
                            <h3>Sinopsis</h3>
                            <p className="sinopsis">{buku[0].deskripsi}</p>
                        </div>
                    </div>
                </section>
            ) : (
                <p>No image available</p> // or a loading spinner, placeholder image, etc.
            )}
        </>
    )
}

export default DetailBuku;