import { createContext, useState } from "react";
import { AppContextProps, AppProviderProps } from "./App.props";
import { City } from "../../types/City";
import { LatLngExpression } from "leaflet";

export const AppContext = createContext<AppContextProps>({}as AppContextProps);

export const AppProvider:React.FC<AppProviderProps> = ({children})=>{
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [zoomLocation, setZoomLocation] = useState<boolean>(false);
    const [locationLatLng, setLocationLatLng] = useState<LatLngExpression>([0, 0])
    const [lots, setLots] = useState<City[]>([]);
    return <AppContext.Provider value={{
        selectedCity,
        setSelectedCity,
        lots, 
        setLots,
        zoomLocation, 
        setZoomLocation,
        locationLatLng, 
        setLocationLatLng
    }}>
        {children}
    </AppContext.Provider>
}