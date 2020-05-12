import React, { createContext, useState } from "react";

export const BankContext = createContext();

const BankContextProvider = (props) => {
    const [bank, setBank] = useState("")
    return ( 
        <BankContext.Provider value={{bank, setBank}}>
            {props.children}
        </BankContext.Provider>
     );
}
 
export default BankContextProvider;
