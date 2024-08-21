import { useEffect, useState } from 'react';
import './Feature.css';
import { FeatureProps } from './Feature.props';

const Feature: React.FC<FeatureProps> = ({url, headline, caption, flip, id})=>{
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWidth = ()=>{
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handleWidth);
        return ()=>window.removeEventListener('resize', handleWidth);
    }, [width])
    return <section className='feature' style={{flexDirection:flip?'row-reverse': undefined}}>
        <div className='feature__file'>
            <video autoPlay loop muted playsInline src={url}></video>
        </div>
        <div className='feature__message'>
                <h2 className='feature__headline'>{headline}</h2>
                <p className='feature__caption'>{caption}</p>
            </div>
    </section>
}
export default Feature;