"use client"

import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();
const initialState = {
cart: false,
userProfile: false,

}

export const ContextProvider = ({ children}) => {
    
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined)

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true});
    }
        
    return (
        
        <StateContext.Provider
        value={{ activeMenu }}
        >
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);