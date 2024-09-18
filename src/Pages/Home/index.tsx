import { useContext, useEffect, useRef, useState } from 'react';
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
import { getGallery } from '../../controller/firebase/feature';

const Home: React.FC<HomeProps> = ()=>{
    const {scrollPosition, setScrollPosition} = useContext(AppContext);
    const homeRef = useRef<HTMLDivElement>(null)
    const [locationImages, setLocationImages] = useState<string[][]>([]);

    const features: FeatureProps[] = Feature_DATA_MOCK;
    const handleScroll = ()=>{
        const {current} = homeRef
        if(current){
            setScrollPosition(current.scrollTop)
        }
    }

    const  getFeatureImages = async ()=>{
        try {
            const res = await getGallery('VbKnoZHm0grzQ3flwbDR');
            if(!res){
                throw new Error('Error retrieving photos')
            }
            setLocationImages(prev=>[...prev,res])
            const _res = await getGallery('ab1fA14XUwlYPP1Jm1fg');
            if(!res){
                throw new Error('Error retrieving photos')
            }
            setLocationImages(prev=>[...prev,_res])
        } catch (error) {
            console.log(error);   
        }
    }
    useEffect(()=>{
        getFeatureImages();
    },[])
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
            {features.map((feature, index)=><Feature key={feature.id} url={feature.url} headline={feature.headline} caption={feature.caption} flip={feature.flip} images={locationImages[index]}/>)} 
        </section>
        <Contact/>
        <Location/>
        <WhyUs/>
        <Footer/>
    </div>
}
export default Home;