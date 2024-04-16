import { createContext, useState } from "react";
import { AppContextProps, AppProviderProps } from "./App.props";
import { City } from "../../types/City";

export const AppContext = createContext<AppContextProps>({}as AppContextProps);

export const AppProvider:React.FC<AppProviderProps> = ({children})=>{
    const [selectedCity, setSelectedCity] = useState<string>("");
    const [lots, setLots] = useState<City[]>([]);
    return <AppContext.Provider value={{
        selectedCity,
        setSelectedCity,
        lots, 
        setLots
    }}>
        {children}
    </AppContext.Provider>
}