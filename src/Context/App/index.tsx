import { createContext, useState } from "react";
import { AppContextProps, AppProviderProps } from "./App.props";

export const AppContext = createContext<AppContextProps>({}as AppContextProps);

export const AppProvider:React.FC<AppProviderProps> = ({children})=>{
    const [selectedCity, setSelectedCity] = useState<string>("");
    return <AppContext.Provider value={{
        selectedCity,
        setSelectedCity
    }}>
        {children}
    </AppContext.Provider>
}