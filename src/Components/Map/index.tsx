import { MapContainer, Marker, Polyline, TileLayer, useMapEvents } from 'react-leaflet';
import './Map.css';
import { MapProps } from './Map.props';
import { DivIcon, LatLngExpression } from 'leaflet';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../Context/App';

const LocationMarker = ()=>{
    const {zoomLocation, setZoomLocation,locationLatLng} = useContext(AppContext);
    const map = useMapEvents({
        click(e){
            console.log(e.latlng); 
            if(zoomLocation){
                map.flyTo(locationLatLng, 18);
                setZoomLocation(false);
            }
            
        },
    })
    useEffect(()=>{
        zoomLocation?map.fireEvent('click'):null
    },[zoomLocation])
    return <></>
}
const Map: React.FC<MapProps> = ({position, zoom, markers})=>{
    const {layers} = useContext(AppContext);
    const limeOptions = { color: 'lime' };
    const [polyline, setPolyline] = useState<LatLngExpression[] | LatLngExpression[][]>([]);

        useEffect(()=>{
            setPolyline(layers);
            console.log("Polyine", layers);
        },[layers])
    
    const customeIcon = new DivIcon({
        html:'<div></div>',
        className:'custome-marker'
    })
    return <MapContainer className="map" center={ position } zoom={zoom} scrollWheelZoom={false} zoomControl={true} touchZoom={true} dragging={true} doubleClickZoom={false}>
        <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        />
        {
            markers.length>0? markers.map((elem, index)=>(<Marker key={index} position={elem} icon={customeIcon}></Marker>)): null
        }
        {<LocationMarker/>}
        <Polyline pathOptions={limeOptions} positions={polyline} />
    </MapContainer>
}
export default Map;