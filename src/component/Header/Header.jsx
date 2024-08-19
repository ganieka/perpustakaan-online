import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <section className="header">
            <div className="header-container">
                <div className="left-header">
                    {/* <Image src="/image/logo/library.png" width={70} height={70} alt="logo"/> */}
                    <Link href={"/"}>
                        <h1>
                            Perpustakaan
                        </h1>
                    </Link>
                </div>
                <div className="right-header">
                    <Link href={"/kategori"}>
                        <h1>
                            Kategori
                        </h1>
                    </Link>
                </div> 
            </div>
        </section>
    )
};

export default Header;