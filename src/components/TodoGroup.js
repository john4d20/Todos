import TodoItem from "./TodoItem";
import { useState } from "react";
function TodoGroup(props){

    return (
        <TodoItem todo={props.todo}></TodoItem>
    )
}

export default TodoGroup;