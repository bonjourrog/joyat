import { useContext } from 'react';
import { AppContext } from '../../../Context/App';
import './ResultCard.css';
import { ResulCardProps } from './ResultCard.props';
import { RxSize } from "react-icons/rx";

const ResultCard: React.FC<ResulCardProps> = ({lot, index})=>{
    const {setZoomLocation, setLocationLatLng, setLotSelected, setShowLot} = useContext(AppContext);

    const handleZoom = ()=>{
        setZoomLocation(true);
        setLocationLatLng(lot.location),
        setLotSelected(lot);
        setShowLot(true)
    }

    return <div className='result-card' key={index} onClick={handleZoom}>
    <div className='results-image'>
        <img src={lot.images[0]} alt="" />
    </div>
    <ul className='results__list'>
        <li className='results__elem results__elem--name'>{lot.location_name}</li>
        <li className='results__elem results__elem--size'><RxSize color='gray'/>{lot.size}</li>
        <li className='results__elem results__elem--price'>${lot.price}</li>
    </ul>
</div>
}
export default ResultCard;