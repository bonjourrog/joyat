import { useContext, useEffect, useRef } from 'react';
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
import { AppContext } from '../../Context/App';

const Home: React.FC<HomeProps> = ()=>{
    const {scrollPosition, setScrollPosition} = useContext(AppContext);
    const homeRef = useRef<HTMLDivElement>(null)

    const features: FeatureProps[] = Feature_DATA_MOCK;
    const handleScroll = ()=>{
        const {current} = homeRef
        if(current){
            setScrollPosition(current.scrollTop)
        }
    }

    useEffect(()=>{
        const {current} = homeRef
        if(!current){
            return
        }
        current.addEventListener('scroll', handleScroll);
        return ()=>{
            current.removeEventListener('scroll', handleScroll);
        }
    }, [scrollPosition])

    return <div className='home' ref={homeRef}>
        <Header showNavigation={true}/>
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