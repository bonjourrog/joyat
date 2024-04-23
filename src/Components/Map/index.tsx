import { MapContainer, Marker, Polyline, TileLayer, useMapEvents } from 'react-leaflet';
import './Map.css';
import { MapProps } from './Map.props';
import { DivIcon, Icon, LatLngExpression, polyline } from 'leaflet';
import { useContext, useEffect } from 'react';
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
        }
    })
    useEffect(()=>{
        zoomLocation?map.fireEvent('click'):null
    },[zoomLocation])
    return <></>
}
const Map: React.FC<MapProps> = ({position, zoom, markers})=>{
    const limeOptions = { color: 'lime' }
    const polyline: LatLngExpression[] | LatLngExpression[][] = [
        [31.395690855609423, -113.61634614533192],
        [31.39556722216417, -113.61633015006801],
        [31.3955168529361, -113.61709205203498],
        [31.395635907431636, -113.61710814855539],
        [31.395690855609423, -113.61634614533192]
    ];

    const customeIcon = new DivIcon({
        html:'<div></div>',
        className:'custome-marker'
    })
    const newIcon = new Icon({
        iconUrl:"https://res.cloudinary.com/dvdmz9djk/image/upload/v1711823561/JOYAT/images/icons/zds3mg4cssnj2nzqoemz.png",
        iconSize: [30, 30],
    });
    // https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
    return <MapContainer className="map" center={ position } zoom={zoom} scrollWheelZoom={false} zoomControl={true} touchZoom={true} dragging={true} doubleClickZoom={false}>
        <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            // attribution='&copy; CNES, Distribution Airbus DS, &copy; Airbus DS, &copy; PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            // url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}.jpg"
        />
        {
            markers.length>0? markers.map((elem, index)=>(<Marker key={index} position={elem} icon={customeIcon}></Marker>)): null
        }
        {<LocationMarker/>}
        <Polyline pathOptions={limeOptions} positions={polyline} />
    </MapContainer>
}
export default Map;