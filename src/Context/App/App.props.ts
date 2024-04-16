import { ReactNode, SetStateAction } from "react";
import { City } from "../../types/City";

export interface AppProviderProps{
    children: ReactNode
}
export interface AppContextProps{
    selectedCity: string;
    setSelectedCity: React.Dispatch<SetStateAction<string>>;
    lots: City[];
    setLots: React.Dispatch<SetStateAction<City[]>>;
}