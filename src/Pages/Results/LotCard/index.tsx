import { useContext} from 'react';
import './LotCard.css';
import { LotCardProps } from './LotCard.props';
import { AppContext } from '../../../Context/App';
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { RiFullscreenExitFill } from "react-icons/ri";
import { BsFillHousesFill } from "react-icons/bs";
import { RxSize } from "react-icons/rx";


const LotCard: React.FC<LotCardProps> = ()=>{
    const {lotSelected, setShowSlideShow} = useContext(AppContext);
    const handleSlideshow = ()=>{
        setShowSlideShow(true);
    }
    return <div className='lot'>
        <div className='lot__images' style={{height:lotSelected.images[0].length>0?'':'auto'}}>
            <div className='lot__image-cover'>
                <img src={lotSelected.location_image} alt="" />
            </div>
            {
                lotSelected.images[0].length>0?<div className='lot__images-list'>{lotSelected!==undefined
                    ?lotSelected.images.map(elem=>
                        <div className='lot__image' onClick={()=>handleSlideshow()}>
                            <div className='show-images'><RiFullscreenExitFill/></div>
                            <img src={elem} alt=""/>
                        </div>
                    )
                    :null}</div>:undefined
            }
            
        </div>
        <div className='lot__info'>
            <div className='lot__details'>
                <strong className='lot__name'>{lotSelected.location_name}</strong>
                <div>
                    <p className= 'lot__detail lot__zise'><RxSize size={13}/>{lotSelected.size}</p>
                    <p className= 'lot__detail lot__floor'> <BsFillHousesFill size={10}/>{lotSelected.floor.toUpperCase()}</p>
                </div>
                <strong className='lot__price'>${lotSelected.price}<small>MXN</small></strong>
            </div>
            <ul className='lot__contacts'>
                <li className='lot__contact'><HiOutlineMail color='rgb(108, 108, 238)'/>contacto@joyat.com</li>
                <li className='lot__contact'><MdOutlinePhoneEnabled color='rgb(108, 108, 238)'/>000 000 0000</li> 
            </ul>
        </div>
    </div>
}
export default LotCard;