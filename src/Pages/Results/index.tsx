import './Results.css';
import Header from '../../Components/Header';
import { ResultsProps } from './Results.props';
import Footer from '../../Components/Footer';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/App';
import Map from '../../Components/Map';
import { LatLngExpression } from 'leaflet';
import Search from '../../Components/Search';
import { getLotS } from '../../controller/firebase/cities';

const images: {[key:string]:string} = {
    "Puerto Peñasco":"https://res.cloudinary.com/dvdmz9djk/image/upload/v1712691254/JOYAT/images/chzwvowkloon0o6g0n8b.jpg",
    "La Paz": "https://res.cloudinary.com/dvdmz9djk/image/upload/v1713048907/JOYAT/images/prkurbitg6segbalxrwd.jpg",
    "Los Cabos": "https://res.cloudinary.com/dvdmz9djk/image/upload/v1713048922/JOYAT/images/ijuhqzpyv52s3qapvvj8.jpg"
}

const Results: React.FC<ResultsProps> = ()=>{
    const  { selectedCity, setLots, lots } = useContext(AppContext);
    const [markers, setMarkers] = useState<LatLngExpression[]>([]);
    useEffect(()=>{
        getLotS().then(elem=>{
            setLots(elem);
            if(elem.length>0 && markers.length==0){
                const newArray:LatLngExpression[] = [];
                lots.forEach(lot=>{
                    newArray.push(lot.location)
                });
                setMarkers(newArray);
            }
        }).catch(e=>{
            console.log(e);
        });
    },[selectedCity])
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
                    selectedCity && markers.length>0 ? <div className='results-bottom__map'><Map position={[31.305624989953, -113.42662792477782]} zoom={11} markers={markers}/></div> : <img className='results-bottom__img' src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1712778687/JOYAT/images/ss6u3tfqghju0qrgocyv.svg" alt="" />
                }
                <div style={{right: selectedCity? "-3em" : "-40em", opacity: selectedCity ? '1':'0'}} className='results-bottom__list'>
                    {
                        lots.map((elem, index)=>(
                            <div className='results-bottom__list-elem' key={index}>
                                <div className='results-image'>
                                    <img src="https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJpbmdlc3Rlci8wMjRlODk4YS0yOTM0LTNjMzctOTQwNy00OTZjZGI5Nzk1MjMvNDFmMjZlNThkZDYzOGZlYzNmMzAyYTFhYjBlMTIwNjg4MWQ3NWRiMWJmOTNjMWE0MDgyNDNjMzIwM2JiMTY4NC5qcGciLCJicmFuZCI6IlJFU0VNIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozNTQsImhlaWdodCI6MjQwLCJmaXQiOiJjb3ZlciJ9fX0=" alt="" />
                                </div>
                                <ul className='results__list'>
                                    <li className='results__elem results__elem--name'>{elem.name}</li>
                                    <li className='results__elem results__elem--price'>{elem.price}</li>
                                    <li className='results__elem results__elem--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                                    <li className='results__elem results__elem--size'>{elem.size}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
        <Footer/>
    </div>
}
export default Results;