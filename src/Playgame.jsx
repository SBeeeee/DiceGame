import React, { useState,useContext } from 'react';
import './App.css';
import {userContext} from './second.jsx';
function Playgame(){
    
    const {totalscore,setTotalscore,value,setValue,dicevalue,setDicevalue,selected}=useContext(userContext);
    if(selected!=null){
        if(dicevalue==value){
            setTotalscore(T=>T+value);
        }
        else{
            setTotalscore(T=>T-2);
        }
    }
    return null

}
export default Playgame;