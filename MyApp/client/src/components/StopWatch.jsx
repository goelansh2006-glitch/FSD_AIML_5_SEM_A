import React, { useEffect, useState } from 'react'
import "./StopWatch.css"

const StopWatch = () => {
    const [timer,setTimer] = useState(0);
    const [running,setRunning] = useState(false);
    useEffect(()=>{
      let time=0;
      if(running){
      time = setInterval(()=>{
        setTimer((pt)=>pt+10)
      },10)
    }
    return()=>{
      clearInterval(time);
    }
    },[running])
    function Reset(){
      setTimer(0);
    }
    function toggleButton(){
      if(running)
      {
      setRunning(false)
      }
      else
      setRunning(true)
    }
    const ms=(timer%1000)/10;
    const s=Math.round((timer%6000)/1000);
    const m=Math.round(s/60);
  return (    
      <div>
        <h1>StopWatch App</h1>
        <div>
            <div className='watch'> {m}:{s}:{ms} </div>
            <button className="btn" onClick={toggleButton}>{running?"Stop":"Start"}</button>
            <button className='btn' onClick={Reset}>Reset</button>
        </div>
      </div>
  )
}

export default StopWatch