import { useEffect, useState } from 'react';
import './Feature.css';
import { FeatureProps } from './Feature.props';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import clickLottieFile from '../../assets/Animation - 1723164938382.json';

const Feature: React.FC<FeatureProps> = ({url, headline, caption, flip})=>{
    const [width, setWidth] = useState<number>(window.innerWidth);
    const handleWidth = ()=>{
        setWidth(window.innerWidth);
        console.log(width);
        
    }
    useEffect(()=>{
        window.addEventListener('resize', handleWidth);
        return ()=>window.removeEventListener('resize', handleWidth);
    }, [width])
    return <section className='feature'>
        {flip?
            <div className='feature__message'>
                <h2 className='feature__headline'>{headline}</h2>
                <p className='feature__caption'>{caption}</p>
            </div>:undefined
        }
        <div className='feature__file'>
            <video autoPlay loop muted playsInline src={url}></video>
            {width<=1200?<DotLottieReact autoplay loop data={clickLottieFile} speed={.4} className='click-icon'/>:<button className='feature__action-btn'>Ver Galeria</button>}
        </div>
        {!flip?
            <div className='feature__message'>
                <h2 className='feature__headline'>{headline}</h2>
                <p className='feature__caption'>{caption}</p>
            </div>:undefined
        }
    </section>
}
export default Feature;