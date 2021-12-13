function TodoItem(props){
    console.log('props.todo',props.todo);
    return(
        
        <div>
            <span>{props.todo}</span>
        </div>
    )
}

export default TodoItem;