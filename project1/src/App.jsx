import { useState } from 'react';
import './App.css'
import Inputcomp from './Component/Inputcomp'
import { generateResponse } from './VoiceEngine';
import Voicesetter from './Component/Voicestter';
function App() {
  const [voice,setVoice]=useState("funny");
  const [reply,setReply]=useState("");
  const handleSend=()=>{
    const r=generateResponse(voice);
    setReply(r);
  };
  return (
    <div>
      <h1>Inner Voice Simulator</h1>
      <Voicesetter voice={voice} setVoice={setVoice}/>
      <Inputcomp onSend={handleSend}/>
      <h2>{reply}</h2>
    </div>
  )
}

export default App
