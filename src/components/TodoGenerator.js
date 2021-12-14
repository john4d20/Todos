import { useState } from "react";
import "../styles/TodoGernerator.css"

function TodoGenerator(props){

    const[todo,setTodo] = useState("");

    function add(){
        if(todo !== ""){
            props.updateTodo(todo);
            setTodo("");
        }
        
    }

    function handleChangeTodo(event){
        setTodo(event.target.value)
        
    }
    
    return(
        <>
            <input value={todo} type="text" onChange={handleChangeTodo} className="Input-field"></input>
            <button onClick={add} className="Add-button">add</button>
        </>
    )
}

export default TodoGenerator;