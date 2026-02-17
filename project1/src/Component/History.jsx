function History({history}){
    return(
        <div>
            {history.map((item,index)=>(
                <div key={index}>
                    <p>You:{item.user}</p>
                    <p>Voice:{item.reply}</p>
                </div>
            ))}
        </div>
    )
}
export default History;