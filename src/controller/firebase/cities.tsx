import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../db/firebase";
import { SelectProps } from 'antd';
import { Lot } from "../../types/Lot";
import { LatLngExpression } from "leaflet";

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
        let layers:LatLngExpression[] | LatLngExpression[][] = [];
        if(JSON.parse(doc.get('layers'))){
            layers = JSON.parse(doc.get('layers'))
        }
        const lot:Lot = {...doc.data() as Lot, id:doc.id, layers}
        lots.push(lot);
    });
    
    return lots;
}