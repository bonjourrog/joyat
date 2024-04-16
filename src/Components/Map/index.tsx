import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import './Map.css';
import { MapProps } from './Map.props';
import { Icon } from 'leaflet';

const Map: React.FC<MapProps> = ({position, zoom, markers})=>{
    const newIcon = new Icon({
        iconUrl:"https://res.cloudinary.com/dvdmz9djk/image/upload/v1711823561/JOYAT/images/icons/zds3mg4cssnj2nzqoemz.png",
        iconSize: [30, 30],
    });
    return <MapContainer className="map" center={ position } zoom={zoom} scrollWheelZoom={true} zoomControl={false} touchZoom={true} dragging={true} doubleClickZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {
            markers.length>0? markers.map((elem, index)=>(<Marker key={index} position={elem} icon={newIcon}></Marker>)): null
        }
    </MapContainer>
}
export default Map;