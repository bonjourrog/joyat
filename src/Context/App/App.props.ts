import { ReactNode, SetStateAction } from "react";
import { Lot } from "../../types/Lot";
import { LatLngExpression } from "leaflet";

export interface AppProviderProps{
    children: ReactNode
}
export interface AppContextProps{
    selectedCity: string;
    setSelectedCity: React.Dispatch<SetStateAction<string>>;
    lots: Lot[];
    setLots: React.Dispatch<SetStateAction<Lot[]>>;
    zoomLocation: boolean;
    setZoomLocation: React.Dispatch<SetStateAction<boolean>>;
    locationLatLng: LatLngExpression,
    setLocationLatLng: React.Dispatch<SetStateAction<LatLngExpression>>;
}