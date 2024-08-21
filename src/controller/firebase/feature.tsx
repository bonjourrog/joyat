import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../db/firebase"

export const getGallery= async(id:string)=>{
    let images: string[] = [];
    const q = query(collection(db, 'gallery'), where('location_id', '==', id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc=>{
        const {images:_images} = doc.data()
        images=_images;
    })
    return images
}