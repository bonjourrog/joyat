import "leaflet/dist/leaflet.css";
import './Location.css';
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import { LocationProps } from './Location.props';
import { TiLocation } from "react-icons/ti";
import { useState } from "react";

const Location: React.FC<LocationProps> = ()=>{
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const position: LatLngExpression = [
        31.306470625996997, -113.52935150152418,
    ];
    const mapCenter: LatLngExpression = [
        31.306470625996997, -113.53338150882418,
    ]

    const newIcon = new Icon({
        iconUrl:"https://res.cloudinary.com/dvdmz9djk/image/upload/v1711823561/JOYAT/images/icons/zds3mg4cssnj2nzqoemz.png",
        iconSize: [30, 30],
    });
    // const LocationMarker = ()=>{
    //     const map = useMapEvents({
    //         click(e) {
    //             console.log(e.latlng);
    //         },
    //     });
    //     return null
    // }
    return (
        <section className="location" id="location">
            <h2 className="location__headline">Location</h2>
                <div className="location__image">
                    <img src="https://res.cloudinary.com/dvdmz9djk/image/upload/v1711316254/JOYAT/images/qdcg6ajhu7szffqtzauu.jpg" alt=""/>
                </div>
            <MapContainer className="location__map" center={ mapCenter } zoom={16} scrollWheelZoom={false} zoomControl={false} touchZoom={false} dragging={false} doubleClickZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position} icon={newIcon}>
                    <TiLocation/>
                </Marker>
                {/* <LocationMarker/> */}
            </MapContainer>

            <MapContainer className="location__map--center" center={ position } zoom={16} scrollWheelZoom={false} zoomControl={false} touchZoom={false} dragging={false} doubleClickZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position} icon={newIcon}>
                    <TiLocation/>
                </Marker>
                {/* <LocationMarker/> */}
            </MapContainer>
            <p className="location__address">
                <TiLocation size={50}/>
                Boulevard Freemont 210
                Puerto Peñasco, Sonora
            </p>
        </section>
    )
}
export default Location;