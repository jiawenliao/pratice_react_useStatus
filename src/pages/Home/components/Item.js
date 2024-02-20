const Item = ({note,date,time,deleteData,id,subittingStatus}) =>{
    subittingStatus.current = true
    function deleteItem(){
        deleteData(function(prev){
            return prev.filter(item=>item.id !== id)
        })
    }

    return<div className="item">
        <div>
            <p>{note}</p>
            <p>{date} {time}</p>
            {/* <p>{`${date} ${time}`}</p> */}
        </div>
        
        <button className="remove" onClick={deleteItem}>刪除</button>
    </div>
}
export default Item