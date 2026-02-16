import { useState } from 'react';
import './App.css'
import Inputcomp from './Component/Inputcomp'
import { generateResponse } from './VoiceEngine';
function App() {
  const [reply,setReply]=useState("");
  const handleSend=()=>{
    const r=generateResponse("funny");
    setReply(r);
  };
  return (
    <div>
      <h1>Inner Voice Simulator</h1>
      <Inputcomp onSend={handleSend}/>
      <h2>{reply}</h2>
    </div>
  )
}

export default App
