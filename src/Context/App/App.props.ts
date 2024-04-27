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
    lotSelected:Lot;
    setLotSelected:React.Dispatch<SetStateAction<Lot>>;
    showLot:boolean, setShowLot:React.Dispatch<SetStateAction<boolean>>;
    showSlideshow: boolean, 
    setShowSlideShow: React.Dispatch<SetStateAction<boolean>>;
    slideshowImages: string[];
    setSlideshowImages: React.Dispatch<SetStateAction<string[]>>;
    layers:LatLngExpression[] | LatLngExpression[][],
    setLayers:React.Dispatch<SetStateAction<LatLngExpression[] | LatLngExpression[][]>>
}