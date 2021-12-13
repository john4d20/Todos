import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList(){
    const [todo,setTodo] = useState("");
    function updateTodo(todo){
        setTodo(todo)
    }

    return (
        <div>
            <TodoGroup todo={todo}></TodoGroup>
            <TodoGenerator updateTodo={updateTodo}></TodoGenerator>
        </div>
        
    )
}

export default TodoList;