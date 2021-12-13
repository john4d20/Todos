import { useState } from "react";

function TodoGenerator(props){

    const[todo,setTodo] = useState("");

    function add(){
        props.updateTodo(todo);
    }

    function handleChangeTodo(event){
        setTodo(event.target.value)
        
    }
    
    return(
        <>
            <input value={todo} type="text" onChange={handleChangeTodo}></input>
            <button onClick={add}>add</button>
        </>
    )
}

export default TodoGenerator;