import React, { createContext, useState } from "react"
import crash from "../sounds/crashcym.wav";
import smallTom from "../sounds/smalltom.wav";
import ride from "../sounds/ridecym.wav";
import openHat from "../sounds/openhat.wav";
import floorTom from "../sounds/floortom.wav";
import closedHat from "../sounds/closedhat.wav";
import rim from "../sounds/rim.wav";
import kick from "../sounds/kick.wav";
import snare from "../sounds/snare.wav";
import aRhythm from "../sounds/bassArhythm.wav";
import dRhythm from "../sounds/bassDrhythm.wav";
import eRhythm from "../sounds/bassErhythm.wav";
import aHigh from "../sounds/Ahigh.wav";
import dHigh from "../sounds/Dhigh.wav";
import eHigh from "../sounds/Ehigh.wav";
import aLow from "../sounds/Alow.wav";
import dLow from "../sounds/Dlow.wav";
import eLow from "../sounds/Elow.wav";
import aMaj from "../sounds/guitarA.wav";
import dMaj from "../sounds/guitarD.wav";
import eMaj from "../sounds/guitarE.wav";
import riff1 from "../sounds/riff1.wav";
import riff2 from "../sounds/riff2.wav";
import riff3 from "../sounds/riff3.wav";
import funky1 from "../sounds/funky1.wav";
import funky2 from "../sounds/funky2.wav";
import funky3 from "../sounds/funky3.wav";
import pianoA from "../sounds/pianoA.wav";
import pianoG from "../sounds/pianoG.wav";
import pianoC from "../sounds/pianoC.wav";
import pianoCs from "../sounds/pianoCs.wav";
import pianoD from "../sounds/pianoD.wav";
import pianoE from "../sounds/pianoE.wav";
import pianoF from "../sounds/pianoF.wav";
import pianoFs from "../sounds/pianoFs.wav";
import pianoGs from "../sounds/pianoGs.wav";




export const AudioContext = createContext();

const AudioContextProvider = (props) => {
    const [sounds]=useState(
        
        {
            drums: [
            {id:"Q", src: crash, title:"Crash Cymbal"},
            {id:"W", src: smallTom, title:"Small Tom"},
            {id:"E", src: ride, title:"Ride Cymbal"},
            {id:"A", src: openHat, title:"Open Hi-Hat"},
            {id:"S", src: floorTom, title:"Floor Tom"},
            {id:"D", src: closedHat, title:"Closed Hi-Hat"},
            {id:"Z", src: rim, title: "Rim"},
            {id:"X", src: kick, title: "Kick"},
            {id:"C", src: snare, title: "Snare"}
        ],
        bass:[
            {id:"Q", src: aRhythm, title:"A Rhythm"},
            {id:"W", src: dRhythm, title:"D Rhythm"},
            {id:"E", src: eRhythm, title:"E Rhythm"},
            {id:"A", src: aHigh, title:"A High"},
            {id:"S", src: dHigh, title:"D High"},
            {id:"D", src: eHigh, title:"E High"},
            {id:"Z", src: aLow, title: "A Low"},
            {id:"X", src: dLow, title: "D low"},
            {id:"C", src: eLow, title: "E low"}
        ],
    
        guitar:[
            {id:"Q", src: aMaj, title:"A Major"},
            {id:"W", src: dMaj, title:"D Major"},
            {id:"E", src: eMaj, title:"E Major"},
            {id:"A", src: riff1, title:"Guitar Riff 1"},
            {id:"S", src: riff2, title:"Guitar Riff 2"},
            {id:"D", src: riff3, title:"Guitar Riff 3"},
            {id:"Z", src: funky1, title: "Funky Guitar 1"},
            {id:"X", src: funky2, title: "Funky Guitar 2"},
            {id:"C", src: funky3, title: "Funky Guitar 3"}
        
        ],
        piano:[
            {id:"Q", src: pianoA, title:"A Piano Note"},
            {id:"W", src: pianoC, title:"C Piano Note"},
            {id:"E", src: pianoCs, title:"C# Piano Note"},
            {id:"A", src: pianoD, title:"D Piano Note"},
            {id:"S", src: pianoE, title:"E Piano Note"},
            {id:"D", src: pianoF, title:"F Piano Note"},
            {id:"Z", src: pianoFs, title: "F# Piano Note"},
            {id:"X", src: pianoG, title: "G Piano Note"},
            {id:"C", src: pianoGs, title: "G# Piano Note"}
        
        ]
       
    })
  
    return ( 
    <AudioContext.Provider value={{sounds}}>
        {props.children}
    </AudioContext.Provider> 
    );
}
 
export default AudioContextProvider;