import TodoItem from "./TodoItem";

function TodoGroup(props){

    return (
        <div>
            <span>
                {
                    props.todoList.map((item,index)=>(
                        <TodoItem key={item+index} todo={item}></TodoItem>
                    ))
                }
            </span>
        </div>
    )
}

export default TodoGroup;