import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import './Map.css';
import { MapProps } from './Map.props';
import { Icon } from 'leaflet';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../Context/App';

const LocationMarker = ()=>{
    const {zoomLocation, setZoomLocation,locationLatLng} = useContext(AppContext);

    const map = useMapEvents({
        click(){
            if(zoomLocation){
                map.flyTo(locationLatLng, 18);
                setZoomLocation(false);
            }
        }
    })
    useEffect(()=>{
        zoomLocation?map.fireEvent('click'):null
    },[zoomLocation])
    return <></>
}
const Map: React.FC<MapProps> = ({position, zoom, markers})=>{

    const newIcon = new Icon({
        iconUrl:"https://res.cloudinary.com/dvdmz9djk/image/upload/v1711823561/JOYAT/images/icons/zds3mg4cssnj2nzqoemz.png",
        iconSize: [30, 30],
    });
    return <MapContainer className="map" center={ position } zoom={zoom} scrollWheelZoom={true} zoomControl={false} touchZoom={true} dragging={true} doubleClickZoom={false}>
        <TileLayer
            attribution='&copy; CNES, Distribution Airbus DS, &copy; Airbus DS, &copy; PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
            url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}.jpg"
        />
        {
            markers.length>0? markers.map((elem, index)=>(<Marker key={index} position={elem} icon={newIcon}></Marker>)): null
        }
        {<LocationMarker/>}
    </MapContainer>
}
export default Map;