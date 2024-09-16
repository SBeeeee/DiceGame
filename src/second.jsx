import React, { useState,createContext } from 'react';
import './App.css';
import Game from './game.jsx';
import Playgame from './Playgame.jsx';
export const userContext=createContext();
function Second() {
   
    const [dicevalue,setDicevalue]=useState(1);
    const [value,setValue]=useState(0);
    function baksa(element,index) {
        setSelected(index);
        setValue(V=>element);
    }
    const [selected, setSelected] = useState(null);
    const [totalscore, setTotalscore] = useState(0);
    const array = [1, 2, 3, 4, 5, 6];
    return (<>
        <div className="numbers">
            <div className="flex">
                <div>
                    <h1 id="kuchbhi">Total Score</h1>
                    {totalscore}
                </div>
                {array.map((element, index) => <div key={index} id={`a${index}`} style={{ backgroundColor: selected === `a${index}` ? 'black' : 'white', color: selected === `a${index}` ? 'white' : 'black' }} className="boxes" onClick={() => baksa(element,`a${index}`)}>{element}</div>)}
            </div>
        </div>
        <userContext.Provider value={{totalscore,setTotalscore,value,setValue,dicevalue,setDicevalue,selected,setSelected}}>
             <Game/>
        </userContext.Provider>
        
    </>);
}
export default Second