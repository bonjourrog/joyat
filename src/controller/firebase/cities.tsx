import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../db/firebase";
import { SelectProps } from 'antd';
import { Lot } from "../../types/Lot";

export const getCities = async()=>{
    let cities: SelectProps['options'] = [];
    const querySnapshot = await getDocs(collection(db, "cities"));
    querySnapshot.forEach((doc) => {
        const {city} = doc.data();
        cities.push({title:doc.id, name: city});
    });
    return cities;
}
export const getLotS = async()=>{
    let lots:Lot[] = []
    const querySnapshot = await getDocs(collection(db,'lote'));
    querySnapshot.forEach(doc=>{
        lots.push(doc.data() as Lot);
    });
    return lots;
}