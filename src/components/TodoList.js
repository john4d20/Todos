import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList(){
    const [todoList,setTodoList] = useState([]);
    function updateTodo(todo){
        setTodoList([...todoList,todo])    
    }



    return (
        <div>
            <h1>ToDo List</h1>
            <TodoGroup  todoList={todoList}></TodoGroup>
            <TodoGenerator updateTodo={updateTodo}></TodoGenerator>
        </div>
        
    )
}

export default TodoList;