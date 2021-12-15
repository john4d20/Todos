import { useState } from "react";
import "../styles/TodoGernerator.css"
import {useDispatch} from "react-redux";
import {  CREATE_TODO } from "../constants/constant";
import { v4 as uuidv4 } from "uuid";
import {addTodoItem} from "../apis/todos"

function TodoGenerator(props){
    const dispatch = useDispatch();
    const[todo,setTodo] = useState("");

    function add(){
        addTodoItem({content : todo,done : false}).then((Response) =>{
            dispatch({type: CREATE_TODO, payload: Response.data})
        }
            
        )
        // if(todo.trim() !== ""){
        //     dispatch({type: CREATE_TODO, payload:{content: todo, ID:uuidv4(), done: false}})
        // }
        setTodo("");    
        
        
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