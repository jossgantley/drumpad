import React, { useContext } from "react"
import { AudioContext } from "../contexts/AudioContext"
import { BankContext } from "../contexts/BankContext"
import { PowerContext } from "../contexts/PowerContext"
const Bank = () => {
    const {sounds} = useContext(AudioContext)
    const {bank,setBank} = useContext(BankContext) 
    const {isOn} = useContext(PowerContext)
    return ( 
        <div id="banks">
            <button disabled={isOn? false: true} className={bank===sounds.drums || bank==="" ? "bank-button-selected": "bank-button"} onClick={()=>{if (isOn){setBank(sounds.drums)}}} id="drums">Drums</button>
            <button disabled={isOn? false: true} className={bank===sounds.bass ? "bank-button-selected": "bank-button"} onClick={()=>{if (isOn){setBank(sounds.bass)}}} id="bass">Bass</button>
            <button disabled={isOn? false: true} className={bank===sounds.guitar ? "bank-button-selected": "bank-button"} onClick={()=>{if (isOn){setBank(sounds.guitar)}}} id="guitar">Guitar</button>
            <button disabled={isOn? false: true} className={bank===sounds.piano ? "bank-button-selected": "bank-button"} onClick={()=>{if (isOn){setBank(sounds.piano)}}} id="piano">Piano</button>
        </div>
     );
}
 
export default Bank;
