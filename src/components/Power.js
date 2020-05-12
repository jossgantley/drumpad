import React, { useContext } from "react"
import { PowerContext } from "../contexts/PowerContext";
import { DisplayContext } from "../contexts/DisplayContext";

const Power = () => {
    const {isOn, toggleOn} = useContext(PowerContext)
    const {setDisplay} = useContext(DisplayContext)
    const powerOn =()=>{
        toggleOn(!isOn)
        if (isOn){
            setDisplay("")
        }
    }
    return ( 
        <div id="power">
            
            <button onClick={powerOn}id="power-button"><i className="fas fa-power-off"></i></button>
            <h1 id="logo">drumPad.js</h1>
        </div>
     );
}
 
export default Power;
