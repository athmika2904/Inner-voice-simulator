function History({history}){
    return(
        <div className="chat-container">
            {history.map((item,index)=>(
                <div key={index}>
                    <div className="user">You:{item.user}</div>
                    <div className="voice">Voice:{item.reply}</div>
                </div>
            ))}
        </div>
    )
}
export default History;