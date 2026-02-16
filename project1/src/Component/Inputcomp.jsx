import {useState} from "react";
function Inputcomp({onSend}){
    const [text,setText]=useState("");
    const handleClick=()=>{
        onSend(text);
        setText("");
    }
    return(<div>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type your thought..."/>
        <button onClick={handleClick}>Send</button>
    </div>)
}
export default Inputcomp;