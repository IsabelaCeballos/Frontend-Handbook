import Head from 'next/head';
import { Header } from '../../src/components/Header';
import { Menu } from '../../src/components/Menu';
import { HeaderProfile } from '../../src/components/HeaderProfile';
import { ReviewForm } from '../../src/components/ReviewForm';
import { Footer } from "../../src/components/Footer"

export default function Review() {
    return (
        <>
            <Head><title>Reseña</title></Head>
            <Header />
            <Menu />
            <HeaderProfile 
                photoUser="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Emilia_Clarke_Dior_Rose_des_Vents.jpg/800px-Emilia_Clarke_Dior_Rose_des_Vents.jpg"
                nameUser="Mommy drag 🐲"
                />
            <ReviewForm dataUser = "Mommy drag"/>
            <Footer />
        </>
    )
}