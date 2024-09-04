import Image from "next/image";

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
                                <Image src={buku[0].image} alt="cover buku" width={170} height={210}/>
                                <button className="button">

                                </button>
                            </div>
                        </div>
                        <div className="detail-body">

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