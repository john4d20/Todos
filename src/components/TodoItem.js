import "../styles/TodoItem.css"



function TodoItem(props){
    return(
        
        <div className="Todo-item">
           {props.content}
        </div>
        
    )
}

export default TodoItem;