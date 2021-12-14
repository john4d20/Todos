import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList(){
    const [todo,setTodo] = useState("");
    const [todoList] = useState([]);
    function updateTodo(todo){
        setTodo(todo);
        todoList.push(todo);
    }



    return (
        <div>
            <h1>ToDo List</h1>
            <TodoGroup todo={todo} todoList={todoList}></TodoGroup>
            <TodoGenerator updateTodo={updateTodo}></TodoGenerator>
        </div>
        
    )
}

export default TodoList;