import './Hero.css';
import { HeroProps } from './Hero.props';
import Search from '../../../../Components/Search';
import { Socials } from '../../../../Components/Socials';


const Hero: React.FC<HeroProps> = ()=>{
    return <div className="hero">
        <div className='filter'></div>
        <img src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1711558391/JOYAT/images/vgjnh5kfbvre9pysgpmp.jpg" alt="" />
        <div className='hero__content'>
            <p className='hero__caption'>Tu hogar soñado te espera, descúbrelo con nosotros.</p>
            <Search showBtn={true}/>
            <Socials customClass='socials--vertical socials--left'/>
        </div>
    </div>
}

export default Hero;