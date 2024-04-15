import './Results.css';
import Header from '../../Components/Header';
import { ResultsProps } from './Results.props';
import Footer from '../../Components/Footer';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../Context/App';
import Map from '../../Components/Map';
import { LatLngExpression } from 'leaflet';
import Search from '../../Components/Search';
import { getLotes } from '../../controller/firebase/cities';

const items = [
    {
        id:"1",
        name:"La jolla",
        price:"$80,000",
        size:"1000m2"
    },
    {
        id:"2",
        name:"La jolla",
        price:"$80,000",
        size:"1000m2"
    },
    {
        id:"3",
        name:"La jolla",
        price:"$80,000",
        size:"1000m2"
    },
    {
        id:"4",
        name:"La jolla",
        price:"$80,000",
        size:"1000m2"
    },
    {
        id:"5",
        name:"La jolla",
        price:"$80,000",
        size:"1000m2"
    },
    {
        id:"6",
        name:"La jolla",
        price:"$80,000",
        size:"1000m2"
    },
    {
        id:"7",
        name:"La jolla",
        price:"$80,000",
        size:"1000m2"
    }
]

const images: {[key:string]:string} = {
    "Puerto Peñasco":"https://res.cloudinary.com/dvdmz9djk/image/upload/v1712691254/JOYAT/images/chzwvowkloon0o6g0n8b.jpg",
    "La Paz": "https://res.cloudinary.com/dvdmz9djk/image/upload/v1713048907/JOYAT/images/prkurbitg6segbalxrwd.jpg",
    "Los Cabos": "https://res.cloudinary.com/dvdmz9djk/image/upload/v1713048922/JOYAT/images/ijuhqzpyv52s3qapvvj8.jpg"
}

const Results: React.FC<ResultsProps> = ()=>{
    const  {selectedCity} = useContext(AppContext);
    const markers: LatLngExpression[] = [
        [31.28538858112754, -113.35599672005432], 
        [31.28531723688076, -113.3553835485756],
        [31.285437784028264, -113.35653216557036],
        [31.286028129363345, -113.3590060280771],
        [31.40433740261502, -113.60788775690045],
        [31.403876085745964, -113.61653562301763]
    ]
    useEffect(()=>{
        // <img src={images[selectedCity]} alt="city image"/>
        console.log(images["Los Cabos"]);
        
        getLotes().then(elem=>{
            console.log(elem);
        }).catch(e=>{
            console.log(e);
        })
        
    },[])
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
                <div style={{right: selectedCity? "-3em" : "-40em", opacity: selectedCity ? '1':'0'}} className='results-bottom__list'>
                    {
                        items.map(elem=>(
                            <div className='results-bottom__list-elem' key={elem.id}>
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