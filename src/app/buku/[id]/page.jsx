"use client"
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";
import DetailBuku from "@/component/DetailBuku";
import { postRequest } from "../../../../api";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const [buku, setBuku] = useState();
    const [loading, setLoading] = useState();
    useEffect(() => {
        const fetchBuku = async () => {
            try {
                const data = await postRequest('buku/id', {
                    id: id
                });
                setBuku(data);
            } catch (error) {
                console.error('Gagal menarik buku:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBuku();
    }, []);
    console.log(buku)
    return (
        <>
            <Header />
                {loading ? (
                    <p>Loading...</p>
                    ) : (
                        <DetailBuku router={router} buku={buku} />
                    )
                }
            <Footer />
        </>
    )
}

export default Page;