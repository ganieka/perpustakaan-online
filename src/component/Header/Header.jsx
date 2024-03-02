import Image from "next/image";

const Header = () => {
    return (
        <section className="header">
            <div className="header-container">
                <div className="left-header">
                    <Image src="/image/logo/library.png" width={70} height={70} alt="logo"/>
                    <h1>
                        Perpustakaan<br/>Online
                    </h1>
                </div>
                <div className="right-header">
                    <h1>
                        Daftar Buku 
                    </h1>
                    <h1>
                        Profil
                    </h1>
                </div> 
            </div>
        </section>
    )
};

export default Header;