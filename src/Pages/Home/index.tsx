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
    return <div className='home'>
        <div className='home__header'>
            <Header showNavigation={true}/>
        </div>
        <Hero/>
        <About/>
        <Contact/>
        <Location/>
        <WhyUs/>
        <Footer/>
    </div>
}
export default Home;