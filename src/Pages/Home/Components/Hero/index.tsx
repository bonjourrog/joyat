import './Hero.css';
import { HeroProps } from './Hero.props';
import { IoSearch } from "react-icons/io5";
import {Select} from 'antd';


const Hero: React.FC<HeroProps> = ()=>{
    return <div className="hero">
        <div className='filter'></div>
        <img src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1711316254/JOYAT/images/qdcg6ajhu7szffqtzauu.jpg" alt="" />
        <div className='hero__content'>
            <p className='hero__caption'>Your dream home awaits discover it with us.</p>
            <form className='search-box'>
                <div className='search-box__icon'>
                    <IoSearch className='icon' />
                </div>
                <Select allowClear placeholder="Seleccione una ciudad" showSearch className='search-box__cities' options={[
                    {title:"Puerto Peñasco", value:"Puerto Peñasco"},
                    {title:"La Paz", value:"La Paz"},
                    {title:"Los Cabos", value:"Los Cabos"},
                    {title:"Guadalajara", value:"Guadalajara"},
                ]}/>
                <button className='search-box__btn'>BUSCAR</button>
            </form>
        </div>
    </div>
}

export default Hero;