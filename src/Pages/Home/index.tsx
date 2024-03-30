import Header from '../../Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Location from './Components/Location';
import './Home.css';
import { HomeProps } from './Home.props';

const Home: React.FC<HomeProps> = ()=>{
    return <div className='home'>
        <Header/>
        <Hero/>
        <About/>
        <Contact/>
        <Location/>
    </div>
}

export default Home;