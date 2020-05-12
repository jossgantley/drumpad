import React, { useContext, useEffect, useCallback } from "react";
import {AudioContext} from "../contexts/AudioContext"; 
import {BankContext} from "../contexts/BankContext";
import { PowerContext } from "../contexts/PowerContext";
import { DisplayContext } from "../contexts/DisplayContext";
const Pad = () => {
    const {sounds} = useContext(AudioContext);
    const {bank} =useContext(BankContext);
    const {isOn} =useContext(PowerContext);
    const {setDisplay}= useContext(DisplayContext)

    const handleSound = (e) =>{
        if (isOn){
        let audio = document.getElementById(e.target.value)
        audio.currentTime=0
        audio.play()
        setDisplay(e.target.id)
        
        }
    }
    const handleKey = useCallback((e) =>{
        if(isOn){
        let audio = document.getElementById(e.code[3])
        if (audio !== null) { 
        audio.currentTime=0
        audio.play()
        setDisplay(audio.parentElement.id)
        } else return null
        } else return null
}, [isOn, setDisplay])
useEffect((isOn)=>{
    
    window.addEventListener("keydown", handleKey)
    
    return ()=> window.removeEventListener("keydown", handleKey)
     
    }, [isOn, handleKey])
    return (
    <div id="pad">
    {bank.length ? ( 
        
            
                 
            bank.map(sound=>{
                return(
                    <button disabled={isOn? false: true} key={sound.id} value={sound.id} onClick={handleSound}id={sound.title} className="drum-pad">{sound.id}
                    <audio id={sound.id} className="clip" src={sound.src}>
                        Your browser does not support this audio format.
                    </audio>
                    </button>
                )
            })

        
     ): (
        
        
             
        sounds.drums.map(sound=>{
            return(
                <button disabled={isOn? false: true} key={sound.id} value={sound.id} onClick={handleSound}  id={sound.title} className="drum-pad">{sound.id}
                <audio id={sound.id} className="clip" src={sound.src}>
                    Your browser does not support this audio format.
                </audio>
                </button>
            )
        })
     )}
    </div>
     
    )
     
}
 
export default Pad;
