
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList(){

    return (
        <div>
            <h1>ToDo List</h1>
            <TodoGroup  ></TodoGroup>
            <TodoGenerator ></TodoGenerator>
        </div>
        
    )
}

export default TodoList;