import { useContext, useEffect, useState } from 'react';
import './Slideshow.css';
import { SlideshowProps } from './Slideshow.props';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { AppContext } from '../../Context/App';


const Slideshow: React.FC<SlideshowProps> = ({images})=>{
    const {slideshowImages, setShowSlideShow} = useContext(AppContext)
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [image, setImage] = useState<string>("");

    const handleNextImage = ()=>{
        imageIndex === slideshowImages.length-1?setImageIndex(0):setImageIndex(imageIndex+1);
        
    }
    const handlePreviousImage = ()=>{
        imageIndex === 0 ? setImageIndex(slideshowImages.length-1):setImageIndex(imageIndex-1)
    }

    const handleImage = ()=>{
        setImage(slideshowImages[imageIndex]);
    }

    useEffect(()=>{
        handleImage()
    }, [imageIndex])

    return <div className='slideshow'>
        <IoClose className='slideshow__btn slideshow__btn--close' onClick={()=>setShowSlideShow(false)}/>
        <FaChevronLeft className='slideshow__btn slideshow__btn--previous' onClick={handlePreviousImage}/>
        <img className='slideshow__image' src={image}/>
        <FaChevronRight className='slideshow__btn slideshow__btn--next' onClick={handleNextImage}/>
    </div>
}
export default Slideshow;