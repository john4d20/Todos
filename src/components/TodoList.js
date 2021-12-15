
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { INIT_TODO } from "../constants/constant";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import {getTodos} from "../apis/todos"
import "../styles/TodoList.css"

function TodoList(){
    const dispatch = useDispatch();
    useEffect(()=> {
        getTodos().then((response)=>{
            dispatch({type: INIT_TODO, payload: response.data})

        })
    })
    return (
        <div className="background">
            <h1>ToDo List</h1>
            <TodoGenerator ></TodoGenerator>
            <TodoGroup  ></TodoGroup>
        </div>
        
    )
}

export default TodoList;