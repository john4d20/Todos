import { useState } from "react";

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
            <input value={todo} type="text" onChange={handleChangeTodo} className="inputField"></input>
            <button onClick={add} className="addButton">add</button>
        </>
    )
}

export default TodoGenerator;