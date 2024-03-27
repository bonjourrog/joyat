import Header from '../../Components/Header';
import About from './Components/About';
import Hero from './Components/Hero';
import './Home.css';
import { HomeProps } from './Home.props';

const Home: React.FC<HomeProps> = ()=>{
    return <div className='home'>
        <Header/>
        <Hero/>
        <About/>
    </div>
}

export default Home;