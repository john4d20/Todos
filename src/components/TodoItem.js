function TodoItem(props){
    console.log('props.todo',props.todo);
    return(
        
        <div className="toDoItem">
           {props.todo}
        </div>
    )
}

export default TodoItem;