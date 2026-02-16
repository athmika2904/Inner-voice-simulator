import './App.css'
import Inputcomp from './Component/Inputcomp'
function App() {
  const handleSend=(txt)=>{
    console.log("User types:",txt);
  };
  return (
    <div>
      <h1>Inner Voice Simulator</h1>
      <Inputcomp onSend={handleSend}/>
    </div>
  )
}

export default App
