import Hero from './Components/Hero';
import './Home.css';
import { HomeProps } from './Home.props';

const Home: React.FC<HomeProps> = ()=>{
    return <div className='home'>
        <Hero/>
    </div>
}

export default Home;