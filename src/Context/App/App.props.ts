import { ReactNode, SetStateAction } from "react";

export interface AppProviderProps{
    children: ReactNode
}
export interface AppContextProps{
    selectedCity: string;
    setSelectedCity: React.Dispatch<SetStateAction<string>>
}