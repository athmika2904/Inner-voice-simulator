function History({history}){
    return(
        <div className="chat-container">
            {history.map((item,index)=>(
                <div key={index} className="msg-group">
                    <div className="message-row user-row">
                    <div className="bubble user">You:{item.user}</div>
                    </div>
                    <div className="message-row voice-row">
                        <div className="bubble voice">Voice:{item.reply}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default History;