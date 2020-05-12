import React, { createContext, useState } from "react"

export const PowerContext = createContext();

const PowerContextProvider = (props) => {
    const [isOn, toggleOn] = useState(false)
    return ( 
        <PowerContext.Provider value={{isOn, toggleOn}}>
            {props.children}
        </PowerContext.Provider>
     );
}
 
export default PowerContextProvider;