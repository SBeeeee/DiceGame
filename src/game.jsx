import React from 'react';
import  { useState,useContext,useEffect} from 'react';
import {userContext} from './second.jsx';

import './App.css';

function Game(){
    const {totalscore,setTotalscore,value,setValue,dicevalue,setDicevalue,selected,setSelected}=useContext(userContext);
    function Playgame(){
        console.log("presses")
        if(selected!=null){
            if(dicevalue==value){
                setTotalscore(T=>T+value);
            }
            else{
                setTotalscore(T=>T-2);
            }
        }
        
    
    }
    function random(){
       setDicevalue(D=>Math.floor(Math.random() * 6)+1);
    }
    function reset(){
        setSelected(null);
        setDicevalue(1);
        setTotalscore(0);
    }
    useEffect(()=>{
        Playgame();
    },[dicevalue])
    return(<>
    <div className="random">
    <img onClick={()=>random()} src={`dice${dicevalue}.jpg`}></img>
    </div>
    <div className="design"style={{display:'flex',justifyContent:'center'}}><h5>Click on dice to roll</h5></div>
    <div className="design"style={{display:'flex',justifyContent:'center'}}onClick={()=>reset()}><h5>Reset</h5></div>
    <div className="design"style={{display:'flex',justifyContent:'center'}}><h5>ShowRules</h5></div>
   
    </>);
    
}
export default Game