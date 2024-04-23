import './Results.css';
import Header from '../../Components/Header';
import { ResultsProps } from './Results.props';
import Footer from '../../Components/Footer';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/App';
import Map from '../../Components/Map';
import { LatLngExpression, divIcon } from 'leaflet';
import Search from '../../Components/Search';
import ResultCard from './ResultCard';
import LotCard from './LotCard';
import { MdOutlineChevronLeft } from "react-icons/md";

const images: {[key:string]:string} = {
    "Puerto Peñasco":"https://res.cloudinary.com/dvdmz9djk/image/upload/v1712691254/JOYAT/images/chzwvowkloon0o6g0n8b.jpg",
    "La Paz": "https://res.cloudinary.com/dvdmz9djk/image/upload/v1713048907/JOYAT/images/prkurbitg6segbalxrwd.jpg",
    "Los Cabos": "https://res.cloudinary.com/dvdmz9djk/image/upload/v1713048922/JOYAT/images/ijuhqzpyv52s3qapvvj8.jpg"
}

const Results: React.FC<ResultsProps> = ()=>{
    const  { selectedCity, lots, showLot, setShowLot } = useContext(AppContext);
    const [markers, setMarkers] = useState<LatLngExpression[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    const handleWindowWidth = ()=>{
        setWindowWidth(window.innerWidth);
    }

    const handleLotDetails = ()=>{
        setShowLot(false)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleWindowWidth);
        return ()=> window.removeEventListener('resize', handleWindowWidth);
    })

    useEffect(()=>{
        const newArray:LatLngExpression[] = [];
        lots.forEach(lot=>{
            newArray.push(lot.location);
        });
        setMarkers(newArray);
    },[selectedCity]);

    return <div className='results'>
        <section className='results__header'>
            <div className='results__headlines'>
                <h1>{selectedCity? selectedCity:"Selecciona una ciudad para mostrar los terrenos disponibles"}</h1>
            </div>
            {
                !selectedCity ? <img className='results__bg-image' src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1712691254/JOYAT/images/chzwvowkloon0o6g0n8b.jpg" alt=""/> : <img className='results__bg-image' src={images[selectedCity]} />
            }
            <div>
                <Header showNavigation={false}/>
            </div>
        </section>
        <section className='results-bottom'>
            <div className='results-bottom__container'>
                <div className='results-bottom__search'>
                    <Search showBtn={false}/>
                </div>
                {
                    selectedCity ? <div className='results-bottom__map'><Map position={[31.305624989953, -113.42662792477782]} zoom={11} markers={markers}/></div> : <img className='results-bottom__img' src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1712778687/JOYAT/images/ss6u3tfqghju0qrgocyv.svg" alt="" />
                }
                <div style={{right: selectedCity? "2em" : "-1em", opacity: selectedCity ? '1':'0', backgroundColor:showLot?'white':'white'}} className='results-bottom__list'>
                    {windowWidth>800?<p style={{display:showLot?'none':'block', fontSize:'4em', padding:'.2em', fontWeight:'bold', opacity:'.1', letterSpacing:'.2em', fontStyle:'italic'}}>JOYAT</p>:null}
                    {
                        showLot?<><LotCard/>< MdOutlineChevronLeft cursor={"pointer"} className='return-btn' size={30} onClick={handleLotDetails}/></>
                        :lots.map((lot, index)=>(
                            <ResultCard key={index} index={index} lot={lot}/>
                        ))
                    }
                </div>
            </div>
        </section>
        <Footer/>
    </div>
}
export default Results;