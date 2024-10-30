"use client"
import {createContext, useContext, useState} from "react";

interface StoreProps {
    name: string | null;
    step: number;
    password: string | null;
    email: string | null;
}

interface GlobalContextType {
    store: StoreProps;
    setStore: React.Dispatch<any>;
}

const DEFAULT_STORE = {
    name: null,
    step: 0,
    password: null,
    email: null
}

const GlobalContext = createContext<GlobalContextType>({
    store: DEFAULT_STORE,
    setStore: () => {}
});

export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
    const [store, setStore] = useState<StoreProps>(DEFAULT_STORE);

    return (
        <GlobalContext.Provider value={{store,setStore}}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);