import Feature from '../../Components/Feature';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Location from './Components/Location';
import WhyUs from './Components/WhyUs';
import './Home.css';
import { HomeProps } from './Home.props';

const Home: React.FC<HomeProps> = ()=>{
    
    const laJollaCaption:string = 'Descubre la oportunidad de tu vida en La Jolla. Terrenos en venta en una ubicación privilegiada, ideales para construir tu hogar o inversión. ¡Haz de este paraíso tu nuevo lugar!'
    const seaPointCaption:string = 'Construye el futuro en Seapoint. Terrenos en venta en una ubicación exclusiva, diseñados para quienes buscan lo mejor'

    return <div className='home'>
        <div className='home__header'>
            <Header showNavigation={true}/>
        </div>
        <Hero/>
        <About/>
        <section className='home__feature'>
            <Feature url='https://firebasestorage.googleapis.com/v0/b/jojat-4c839.appspot.com/o/jolla%2Fvideos%2F0807.mp4?alt=media&token=4c5e0304-c11d-45c1-b977-de1058b5a609' headline='LA JOLLA' caption={laJollaCaption}/>
            <Feature url='https://firebasestorage.googleapis.com/v0/b/jojat-4c839.appspot.com/o/jolla%2Fvideos%2Fseapint.mp4?alt=media&token=c9e3f987-555c-4a49-a5bb-64bc84ee5d67' headline='SEAPOINT' caption={seaPointCaption} flip={true}/>
        </section>
        <Contact/>
        <Location/>
        <WhyUs/>
        <Footer/>
    </div>
}
export default Home;