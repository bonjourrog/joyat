import Feature from '../../Components/Feature';
import { FeatureProps } from '../../Components/Feature/Feature.props';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { Feature_DATA_MOCK } from '../../Mocks/Feature';
import About from './Components/About';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import Location from './Components/Location';
import WhyUs from './Components/WhyUs';
import './Home.css';
import { HomeProps } from './Home.props';

const Home: React.FC<HomeProps> = ()=>{

    const features: FeatureProps[] = Feature_DATA_MOCK;

    return <div className='home'>
        <div className='home__header'>
            <Header showNavigation={true}/>
        </div>
        <Hero/>
        <About/>
        <section className='home__feature'>
            {features.map(feature=><Feature url={feature.url} headline={feature.headline} caption={feature.caption} id={feature.id} flip={feature.flip}/>)} 
        </section>
        <Contact/>
        <Location/>
        <WhyUs/>
        <Footer/>
    </div>
}
export default Home;