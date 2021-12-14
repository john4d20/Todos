import { useState } from "react";
import "../styles/TodoGernerator.css"
import {useDispatch} from "react-redux";
import { UPDATE_SIZE, UPDATE_TODO_LIST } from "../constants/constant";
import { v4 as uuidv4 } from "uuid";

function TodoGenerator(props){
    const dispatch = useDispatch();
    const[todo,setTodo] = useState("");

    function add(){
        if(todo !== ""){
        dispatch({type: UPDATE_SIZE, payload: 1})
        dispatch({type: UPDATE_TODO_LIST, payload:{"content": todo, "ID":uuidv4(), "done": "false"}})
            setTodo("");
        }
        
    }

    function handleContentValue(event){
        setTodo(event.target.value);
    }

    return(
        <>
            <input value={todo} type="text" onChange={handleContentValue} className="Input-field"></input>
            <button onClick={add} className="Add-button">add</button>
        </>
    )
}

export default TodoGenerator;