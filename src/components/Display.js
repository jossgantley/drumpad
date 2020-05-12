import React, { useContext } from "react"
import { DisplayContext } from "../contexts/DisplayContext";
import { PowerContext } from "../contexts/PowerContext";

const Display = () => {
    const {display}= useContext(DisplayContext)
    const {isOn} = useContext(PowerContext)
   
    return ( 
        <div id="display">
            
            <header className={isOn ? "display-header": "display-header-off"}>
            <h1 id="title">{display}</h1>
            </header>
        </div>
     );
}
 
export default Display;