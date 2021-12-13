import { useState } from "react";

function TodoGenerator(props){

    const[todo,setTodo] = useState("");

    function add(){
        setTodo(todo)
        props.updateTodo(todo);
    }
    
    return(
        <>
            <input value={todo} type="String"></input>
            <button onClick={add}>add</button>
        </>
    )
}

export default TodoGenerator;