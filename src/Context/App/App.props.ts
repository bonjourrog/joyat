import { ReactNode, SetStateAction } from "react";
import { City } from "../../types/City";
import { LatLngExpression } from "leaflet";

export interface AppProviderProps{
    children: ReactNode
}
export interface AppContextProps{
    selectedCity: string;
    setSelectedCity: React.Dispatch<SetStateAction<string>>;
    lots: City[];
    setLots: React.Dispatch<SetStateAction<City[]>>;
    zoomLocation: boolean;
    setZoomLocation: React.Dispatch<SetStateAction<boolean>>;
    locationLatLng: LatLngExpression,
    setLocationLatLng: React.Dispatch<SetStateAction<LatLngExpression>>;
}