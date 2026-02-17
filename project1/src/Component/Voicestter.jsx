function Voicesetter({voice,setVoice}){
    return(
        <div>
            <select value={voice} onChange={(e)=>setVoice(e.target.value)}>
                <option value="funny">Funny</option>
                <option value="motivational">Motivational</option>
                <option value="sarcastic">Sarcastic</option>
            </select>
        </div>
    )
}
export default Voicesetter;