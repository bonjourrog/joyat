import './Gallery.css';
import { GalleryProps } from './Gallery.props';
import { useStore } from 'zustand';
import { useLocationStore } from '../../Store/location';
import { useEffect, useState } from 'react';
import { getGallery } from '../../controller/firebase/feature';

const Gallery: React.FC<GalleryProps> = ()=>{
    const [images, setImages] = useState<string[]>([]);
    const retrieveImages = ()=>{
        getGallery(id).then(res=>{
            setImages(res);
        }).catch(e=>{
            console.log('An error has occured trying to retrieving images', e);
        })
    }
    const {video} = useStore(useLocationStore)
    const {id} = useLocationStore();
    useEffect(()=>{
        retrieveImages()
    })
    return <main className='gallery'>
        <header className='gallery__header'>
            <video src={video} loop autoPlay playsInline muted></video>
        </header>
        <section className='gallery__list'>
            {images.map((image, index)=><img key={index} src={image}/>)}
        </section>
    </main>
}
export default Gallery;