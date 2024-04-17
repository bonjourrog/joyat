import { useContext } from 'react';
import { AppContext } from '../../../Context/App';
import './ResultCard.css';
import { ResulCardProps } from './ResultCard.props';

const ResultCard: React.FC<ResulCardProps> = ({lot, index})=>{
    const {setZoomLocation, setLocationLatLng} = useContext(AppContext);

    const handleZoom = ()=>{
        setZoomLocation(true);
        setLocationLatLng(lot.location)
    }

    return <div className='result-card' key={index} onClick={handleZoom}>
    <div className='results-image'>
        <img src="https://img.resemmedia.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJpbmdlc3Rlci8wMjRlODk4YS0yOTM0LTNjMzctOTQwNy00OTZjZGI5Nzk1MjMvNDFmMjZlNThkZDYzOGZlYzNmMzAyYTFhYjBlMTIwNjg4MWQ3NWRiMWJmOTNjMWE0MDgyNDNjMzIwM2JiMTY4NC5qcGciLCJicmFuZCI6IlJFU0VNIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozNTQsImhlaWdodCI6MjQwLCJmaXQiOiJjb3ZlciJ9fX0=" alt="" />
    </div>
    <ul className='results__list'>
        <li className='results__elem results__elem--name'>{lot.name}</li>
        <li className='results__elem results__elem--price'>{lot.price}</li>
        <li className='results__elem results__elem--description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li className='results__elem results__elem--size'>{lot.size}</li>
    </ul>
</div>
}
export default ResultCard;