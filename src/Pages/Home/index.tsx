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
        <Header showNavigation={true}/>
        <Hero/>
        <About/>
        <Contact/>
        <Location/>
        <WhyUs/>
    </div>
}
export default Home;