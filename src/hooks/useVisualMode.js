import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(mode, replace=false) {
    let prev = history
    if(replace){
      prev = history.slice(0, -1);
    }
    setMode(mode)
    setHistory([...prev, mode])
  }
  function back(){
    const prev = history.slice(0, -1);
    setHistory(prev);
    setMode(history[prev.length-1])
  }  

  return { mode, transition, back};  
}

