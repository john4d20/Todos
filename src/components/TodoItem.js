import "../styles/TodoItem.css"

function TodoItem(props){
    return(
        
        <div className="Todo-item">
           {props.todo}
        </div>
    )
}

export default TodoItem;