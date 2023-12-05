import React, { createContext, useContext } from 'react';
import { useState } from 'react';

const MainContext = createContext();

export default function MainContextProvider({ children }) {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <MainContext.Provider value={{
            toggleSidebar,
            setToggleSidebar
        }}>
            {children}
        </MainContext.Provider>
    );
}

export { MainContext };