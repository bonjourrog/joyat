import { createContext, useState } from "react";
import { AppContextProps, AppProviderProps } from "./App.props";
import { Lot } from "../../types/Lot";
import { LatLngExpression } from "leaflet";

export const AppContext = createContext<AppContextProps>({}as AppContextProps);

export const AppProvider:React.FC<AppProviderProps> = ({children})=>{
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [zoomLocation, setZoomLocation] = useState<boolean>(false);
    const [locationLatLng, setLocationLatLng] = useState<LatLngExpression>([0, 0]);
    const [lotSelected, setLotSelected] = useState<Lot>({} as Lot);
    const [lots, setLots] = useState<Lot[]>([]);
    const [showLot, setShowLot] = useState<boolean>(false);
    const [showSlideshow, setShowSlideShow] = useState<boolean>(false);
    const [slideshowImages, setSlideshowImages] = useState<string[]>([]);
    const [layers, setLayers] = useState<LatLngExpression[] | LatLngExpression[][]>([])
    return <AppContext.Provider value={{
        selectedCity,
        setSelectedCity,
        lots, 
        setLots,
        zoomLocation, 
        setZoomLocation,
        locationLatLng, 
        setLocationLatLng,
        lotSelected, 
        setLotSelected,
        showLot, 
        setShowLot,
        showSlideshow, 
        setShowSlideShow,
        slideshowImages, 
        setSlideshowImages,
        layers, 
        setLayers
    }}>
        {children}
    </AppContext.Provider>
}