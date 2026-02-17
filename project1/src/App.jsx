import { useState } from 'react';
import './App.css'
import Inputcomp from './Component/Inputcomp'
import { generateResponse } from './VoiceEngine';
import Voicesetter from './Component/Voicestter';
import History from './Component/History';
function App() {
  const [voice,setVoice]=useState("funny");
  const [reply,setReply]=useState("");
  const [history,setHistory]=useState([]);
  const handleSend=(text)=>{
    const r=generateResponse(voice);
    setReply(r);
    const newItem={user:text,reply:r};
    setHistory([...history,newItem]);
  };
  return (
    <div>
      <h1>Inner Voice Simulator</h1>
      <Voicesetter voice={voice} setVoice={setVoice}/>
      <Inputcomp onSend={handleSend}/>
      <h2>{reply}</h2>
      <History history={history}/>
    </div>
  );
}

export default App;
